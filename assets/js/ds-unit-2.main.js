const app = window.createStudyTrackerApp({
  studyData,
  storageKey: 'ams2632_unit2_data'
});

window.app = app;

document.addEventListener('DOMContentLoaded', function () {
  app.init();
});
