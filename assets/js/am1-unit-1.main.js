const app = window.createStudyTrackerApp({
  studyData,
  storageKey: 'ams1112_unit1_data'
});

window.app = app;

document.addEventListener('DOMContentLoaded', function () {
  app.init();
});
