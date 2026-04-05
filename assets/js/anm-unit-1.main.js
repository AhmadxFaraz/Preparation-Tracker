const app = window.createStudyTrackerApp({
  studyData,
  storageKey: 'am04430_unit1_data'
});

window.app = app;

document.addEventListener('DOMContentLoaded', function () {
  app.init();
});
