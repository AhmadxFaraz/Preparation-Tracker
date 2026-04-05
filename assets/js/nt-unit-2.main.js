const app = window.createStudyTrackerApp({
  studyData,
  storageKey: 'am03510_unit2_data'
});

window.app = app;

document.addEventListener('DOMContentLoaded', function () {
  app.init();
});
