const app = window.createStudyTrackerApp({
  studyData,
  storageKey: 'ams2632_unit3_data'
});

window.app = app;

document.addEventListener('DOMContentLoaded', function () {
  app.init();
});
