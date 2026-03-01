(function () {
  function deepCopy(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function read(storageKey) {
    try {
      return JSON.parse(localStorage.getItem(storageKey));
    } catch (_) {
      return null;
    }
  }

  function load(storageKey, seedData) {
    const saved = read(storageKey);
    if (saved) return saved;
    return deepCopy(seedData);
  }

  function save(storageKey, data) {
    localStorage.setItem(storageKey, JSON.stringify(data));
  }

  window.TrackerStorage = {
    deepCopy,
    read,
    load,
    save
  };
})();
