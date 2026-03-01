(function () {
  function normalizeError(err) {
    if (!err) return 'Unknown error.';
    if (typeof err === 'string') return err;
    if (err.message) return err.message;
    try {
      return JSON.stringify(err);
    } catch (_) {
      return 'Unknown error.';
    }
  }

  function setStatus(text, isError) {
    const el = document.getElementById('auth-status');
    if (!el) return;
    el.textContent = text;
    el.className = isError ? 'text-red-400 text-sm mt-3' : 'text-emerald-300 text-sm mt-3';
  }

  function getDisplayName(user) {
    if (!user) return '';
    const meta = user.user_metadata || {};
    if (meta.full_name && String(meta.full_name).trim()) return String(meta.full_name).trim();
    if (user.email) return user.email.split('@')[0];
    return 'Account';
  }

  function getClientOrStatus() {
    if (window.location.protocol === 'file:') {
      setStatus('Open this page via http://localhost or your deployed URL. file:// mode can break auth.', true);
      return null;
    }

    if (!window.SupabaseClient || !window.SupabaseClient.isConfigured()) {
      setStatus('Set valid SUPABASE_URL + SUPABASE_ANON_KEY in assets/js/supabase-config.js', true);
      return null;
    }

    return window.SupabaseClient.getClient();
  }

  function wireShowPassword() {
    const toggles = document.querySelectorAll('[data-toggle-password]');
    toggles.forEach(function (toggle) {
      const targetId = toggle.getAttribute('data-target');
      const input = document.getElementById(targetId);
      if (!input) return;
      toggle.addEventListener('change', function () {
        input.type = toggle.checked ? 'text' : 'password';
      });
    });
  }

  async function refreshUserView() {
    const userBox = document.getElementById('auth-user');
    const actions = document.getElementById('auth-actions');
    const form = document.getElementById('auth-form');
    const switchLink = document.getElementById('switch-auth-link');

    if (!userBox || !actions || !form) return;

    const user = await window.TrackerCloud.getUser();
    if (user) {
      userBox.textContent = `Logged in as: ${getDisplayName(user)} (${user.email})`;
      actions.classList.remove('hidden');
      form.classList.add('hidden');
      if (switchLink) switchLink.classList.add('hidden');
    } else {
      userBox.textContent = 'Not logged in';
      actions.classList.add('hidden');
      form.classList.remove('hidden');
      if (switchLink) switchLink.classList.remove('hidden');
    }
  }

  async function signIn(email, password) {
    const client = window.SupabaseClient.getClient();
    const { error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw error;
  }

  async function signUp(fullName, email, password) {
    const client = window.SupabaseClient.getClient();
    const { data, error } = await client.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName || '' }
      }
    });
    if (error) throw error;
    return data;
  }

  async function signOut() {
    const client = window.SupabaseClient.getClient();
    await client.auth.signOut();
  }

  function validateCredentials(email, password) {
    if (!email || !password) {
      setStatus('Email and password are required.', true);
      return false;
    }
    if (password.length < 6) {
      setStatus('Password must be at least 6 characters.', true);
      return false;
    }
    return true;
  }

  async function initLoginPage() {
    const client = getClientOrStatus();
    wireShowPassword();
    if (!client) return;

    const form = document.getElementById('auth-form');
    const signInBtn = document.getElementById('signin-btn');
    const signOutBtn = document.getElementById('signout-btn');

    if (!form || !signInBtn || !signOutBtn) return;

    async function submitSignIn() {
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      if (!validateCredentials(email, password)) return;

      try {
        setStatus('Processing...');
        await signIn(email, password);
        setStatus('Signed in successfully.');
        await refreshUserView();
      } catch (err) {
        console.error('Sign in error:', err);
        setStatus(`Auth failed: ${normalizeError(err)}`, true);
      }
    }

    signInBtn.addEventListener('click', submitSignIn);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      submitSignIn();
    });

    signOutBtn.addEventListener('click', async function () {
      await signOut();
      setStatus('Signed out.');
      await refreshUserView();
    });

    client.auth.onAuthStateChange(function () {
      refreshUserView();
    });

    refreshUserView();
  }

  async function initSignupPage() {
    const client = getClientOrStatus();
    wireShowPassword();
    if (!client) return;

    const form = document.getElementById('auth-form');
    const signUpBtn = document.getElementById('signup-btn');
    const signOutBtn = document.getElementById('signout-btn');

    if (!form || !signUpBtn || !signOutBtn) return;

    async function submitSignUp() {
      const fullName = (document.getElementById('full-name') || { value: '' }).value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      if (!validateCredentials(email, password)) return;

      try {
        setStatus('Creating account...');
        const result = await signUp(fullName, email, password);

        if (result && !result.session) {
          setStatus('Sign-up successful. Check your email to confirm, then sign in.');
        } else {
          setStatus('Sign-up successful and logged in.');
        }

        await refreshUserView();
      } catch (err) {
        console.error('Sign up error:', err);
        setStatus(`Auth failed: ${normalizeError(err)}`, true);
      }
    }

    signUpBtn.addEventListener('click', submitSignUp);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      submitSignUp();
    });

    signOutBtn.addEventListener('click', async function () {
      await signOut();
      setStatus('Signed out.');
      await refreshUserView();
    });

    client.auth.onAuthStateChange(function () {
      refreshUserView();
    });

    refreshUserView();
  }

  window.AuthUI = {
    initLoginPage,
    initSignupPage,
    getDisplayName
  };
})();
