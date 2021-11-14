export default function Timers() {
  function myTimer() {
    if (!sessionStorage.getItem("firstVisitTime")) {
      var myDate: number = Date.now();
      if (!localStorage.getItem("timeOnSite")) {
        sessionStorage.setItem("firstVisitTime", myDate.toString());
      } else {
        const tabsCountStorage = localStorage.getItem("tabsCount");
        const tabsCount = tabsCountStorage ? parseInt(tabsCountStorage) : 0;
        if (localStorage.getItem("tabsCount") && tabsCount > 1) {
          const timeOnSiteStorage = localStorage.getItem("timeOnSite");
          const timeOnSite = timeOnSiteStorage
            ? parseInt(timeOnSiteStorage)
            : 0;
          sessionStorage.setItem(
            "firstVisitTime",
            (myDate - timeOnSite).toString()
          );
        } else {
          sessionStorage.setItem("firstVisitTime", myDate.toString());
        }
      }
    }
    var myInterval = setInterval(function () {
      const firstVisitTimeStorage = sessionStorage.getItem("firstVisitTime");
      const firstVisitTime = firstVisitTimeStorage
        ? parseInt(firstVisitTimeStorage)
        : 0;
      var time = Date.now() - firstVisitTime;
      localStorage.setItem("timeOnSite", time.toString());
    }, 1000);
    return myInterval;
  }

  window.onbeforeunload = function () {
    clearInterval(timer);
  };
  window.onunload = function () {
    var time = Date.now();
    localStorage.setItem("LastVisitTime", time.toString());
  };

  var timer = myTimer();

  return null;
}
