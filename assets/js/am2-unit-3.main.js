const app = window.createStudyTrackerApp({
  studyData,
  storageKey: 'ams1122_unit3_data',
  fallbackStorageKeys: ['ams1122_data']
});

window.app = app;

document.addEventListener('DOMContentLoaded', function () {
  app.init();
});
