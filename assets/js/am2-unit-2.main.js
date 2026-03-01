const app = window.createStudyTrackerApp({
  studyData,
  storageKey: 'ams1122_unit2_data',
  fallbackStorageKeys: ['ams1122_data']
});

window.app = app;

document.addEventListener('DOMContentLoaded', function () {
  app.init();
});
