const app = window.createStudyTrackerApp({
  studyData,
  storageKey: 'ams1112_unit4_data'
});

window.app = app;

document.addEventListener('DOMContentLoaded', function () {
  app.init();
});
