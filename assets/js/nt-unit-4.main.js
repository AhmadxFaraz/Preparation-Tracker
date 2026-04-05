const app = window.createStudyTrackerApp({
  studyData,
  storageKey: 'am03510_unit4_data'
});

window.app = app;

document.addEventListener('DOMContentLoaded', function () {
  app.init();
});
