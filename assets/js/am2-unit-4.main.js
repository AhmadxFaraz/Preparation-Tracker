const app = window.createStudyTrackerApp({
  studyData,
  storageKey: 'ams1122_unit4_data',
  fallbackStorageKeys: ['ams1120_unit4_data']
});

window.app = app;

document.addEventListener('DOMContentLoaded', function () {
  app.init();
});
