(function () {
  let client = null;

  function isConfigured() {
    const url = window.SUPABASE_URL || 'https://ncxduxhawivknhzvbrmo.supabase.co';
    const key = window.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jeGR1eGhhd2l2a25oenZicm1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzNDU0OTQsImV4cCI6MjA4NzkyMTQ5NH0.Nti1thsB_0L41V6qI-4t8fmASendh_tYtqVq4xYRsA4';
    const hasRealUrl = /^https:\/\/.+\.supabase\.co$/.test(url);
    const hasRealKey = key.length > 20;
    return Boolean(hasRealUrl && hasRealKey && window.supabase);
  }

  function getClient() {
    if (!isConfigured()) return null;
    if (!client) {
      client = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
    }
    return client;
  }

  window.SupabaseClient = {
    isConfigured,
    getClient
  };
})();
