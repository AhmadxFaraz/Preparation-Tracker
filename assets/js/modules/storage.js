(function () {
  function deepCopy(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function load(storageKey, seedData) {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey));
      if (saved) return saved;
    } catch (_) {
      // Fall back to default data if local storage is malformed.
    }
    return deepCopy(seedData);
  }

  function save(storageKey, data) {
    localStorage.setItem(storageKey, JSON.stringify(data));
  }

  window.TrackerStorage = {
    deepCopy,
    load,
    save
  };
})();
