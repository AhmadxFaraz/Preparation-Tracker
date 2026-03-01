(function () {
  function getDisplayName(user) {
    if (!user) return '';
    const meta = user.user_metadata || {};
    if (meta.full_name && String(meta.full_name).trim()) return String(meta.full_name).trim();
    if (user.email) return user.email.split('@')[0];
    return 'Account';
  }

  async function getUser() {
    if (!window.SupabaseClient || !window.SupabaseClient.isConfigured()) return null;
    const client = window.SupabaseClient.getClient();
    const { data } = await client.auth.getUser();
    return data && data.user ? data.user : null;
  }

  async function refreshAuthLinks() {
    const links = document.querySelectorAll('[data-auth-link]');
    if (!links.length) return;

    const user = await getUser();
    links.forEach(function (link) {
      const defaultLabel = link.getAttribute('data-default-label') || 'Sign In / Sign Up';
      link.textContent = user ? getDisplayName(user) : defaultLabel;
      link.title = user ? `Logged in as ${user.email}` : defaultLabel;
    });
  }

  async function initHeaderAuth() {
    await refreshAuthLinks();

    if (window.SupabaseClient && window.SupabaseClient.isConfigured()) {
      const client = window.SupabaseClient.getClient();
      client.auth.onAuthStateChange(function () {
        refreshAuthLinks();
      });
    }
  }

  window.HeaderAuth = {
    initHeaderAuth,
    refreshAuthLinks
  };
})();
