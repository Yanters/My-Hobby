// import * as $ from "jquery";

// function myTimer() {
//   if (!sessionStorage.getItem("firstVisitTime")) {
//     var myDate = Date.now();
//     if (!localStorage.getItem("timeOnSite")) {
//       sessionStorage.setItem("firstVisitTime", myDate);
//     } else {
//       if (
//         localStorage.getItem("tabsCount") &&
//         parseInt(localStorage.getItem("tabsCount")) > 1
//       ) {
//         sessionStorage.setItem(
//           "firstVisitTime",
//           myDate - parseInt(localStorage.getItem("timeOnSite"))
//         );
//       } else {
//         sessionStorage.setItem("firstVisitTime", myDate);
//       }
//     }
//   }
//   var myInterval = setInterval(function () {
//     var time = Date.now() - parseInt(sessionStorage.getItem("firstVisitTime"));
//     localStorage.setItem("timeOnSite", time);
//     console.log(time / 1000 + " seconds have passed since first visit");
//     // document.getElementById("output").innerHTML =
//     //   time / 1000 + " seconds have passed since first visit";
//   }, 1000);
//   return myInterval;
// }

// window.onbeforeunload = function () {
//   console.log("Document onbeforeunload state.");
//   clearInterval(timer);
// };
// window.onunload = function () {
//   var time = Date.now();
//   localStorage.setItem("timeLeftSite", time);
//   localStorage.setItem(
//     "tabsCount",
//     parseInt(localStorage.getItem("tabsCount")) - 1
//   );
//   console.log("Document onunload state.");
// };
// if (document.readyState === "complete") {
//   if (localStorage.getItem("tabsCount")) {
//     localStorage.setItem(
//       "tabsCount",
//       parseInt(localStorage.getItem("tabsCount")) + 1
//     );
//     var timer = myTimer();
//   } else {
//     localStorage.setItem("tabsCount", 1);
//   }
//   console.log("Document complete state.");
// }

// $(window).on("unload", function () {
//   var time = Date.now();
//   localStorage.setItem("timeLeftSite", time);
//   localStorage.setItem(
//     "tabsCount",
//     parseInt(localStorage.getItem("tabsCount")) - 1
//   );
//   console.log("Document onunload state.");
// });
// $(document).ready(function () {
//   if (localStorage.getItem("tabsCount")) {
//     localStorage.setItem(
//       "tabsCount",
//       parseInt(localStorage.getItem("tabsCount")) + 1
//     );
//     var timer = myTimer();
//   } else {
//     localStorage.setItem("tabsCount", 1);
//   }
//   console.log("Document complete state.");
// });
// $(window).on("beforeunload", function () {
//   console.log("Document onbeforeunload state.");
//   clearInterval(timer);
// });

///TYPESCRIPT

// function myTimer() {
//     if (!sessionStorage.getItem("firstVisitTime")) {
//       var myDate: number = Date.now();
//       if (!localStorage.getItem("timeOnSite")) {
//         sessionStorage.setItem("firstVisitTime", myDate.toString());
//       } else {
//         const tabsCountStorage = localStorage.getItem("tabsCount");
//         const tabsCount = tabsCountStorage ? parseInt(tabsCountStorage) : 0;
//         if (localStorage.getItem("tabsCount") && tabsCount > 1) {
//           const timeOnSiteStorage = localStorage.getItem("timeOnSite");
//           const timeOnSite = timeOnSiteStorage ? parseInt(timeOnSiteStorage) : 0;
//           sessionStorage.setItem(
//             "firstVisitTime",
//             (myDate - timeOnSite).toString()
//           );
//         } else {
//           sessionStorage.setItem("firstVisitTime", myDate.toString());
//         }
//       }
//     }
//     var myInterval = setInterval(function () {
//       const firstVisitTimeStorage = sessionStorage.getItem("firstVisitTime");
//       const firstVisitTime = firstVisitTimeStorage
//         ? parseInt(firstVisitTimeStorage)
//         : 0;
//       var time = Date.now() - firstVisitTime;
//       localStorage.setItem("timeOnSite", time.toString());
//       console.log(time / 1000 + " seconds have passed since first visit");
//       // document.getElementById("output").innerHTML =
//       //   time / 1000 + " seconds have passed since first visit";
//     }, 1000);
//     return myInterval;
//   }

//   window.onbeforeunload = function () {
//     console.log("Document onbeforeunload state.");
//     clearInterval(timer);
//   };
//   window.onunload = function () {
//     var time = Date.now();
//     localStorage.setItem("timeLeftSite", time.toString());
//     const tabsCountStorage = sessionStorage.getItem("firstVisitTime");
//     const tabsCount = tabsCountStorage ? parseInt(tabsCountStorage) : 0;
//     localStorage.setItem("tabsCount", (tabsCount - 1).toString());
//     console.log("Document onunload state.");
//   };
//   if (document.readyState === "complete") {
//     if (localStorage.getItem("tabsCount")) {
//       const tabsCountStorage = sessionStorage.getItem("firstVisitTime");
//       const tabsCount = tabsCountStorage ? parseInt(tabsCountStorage) : 0;
//       localStorage.setItem("tabsCount", (tabsCount + 1).toString());
//       var timer = myTimer();
//     } else {
//       localStorage.setItem("tabsCount", (1).toString());
//     }
//     console.log("Document complete state.");
//   }

/// Fixed version:

export default function Timers() {
  function myTimer() {
    if (!sessionStorage.getItem("firstVisitTime")) {
      var myDate = Date.now();
      if (!localStorage.getItem("timeOnSite")) {
        sessionStorage.setItem("firstVisitTime", myDate);
      } else {
        if (parseInt(localStorage.getItem("tabsCount")) > 1) {
          sessionStorage.setItem(
            "firstVisitTime",
            myDate - parseInt(localStorage.getItem("timeOnSite"))
          );
        } else {
          sessionStorage.setItem("firstVisitTime", myDate);
        }
      }
    }
    var myInterval = setInterval(function () {
      var time =
        Date.now() - parseInt(sessionStorage.getItem("firstVisitTime"));
      localStorage.setItem("timeOnSite", time);
      console.log(time / 1000 + " seconds have passed since first visit");
    }, 1000);
    return myInterval;
  }

  window.onbeforeunload = function () {
    console.log("Document onbeforeunload state.");
    clearInterval(timer);
  };
  window.onunload = function () {
    var time = Date.now();
    localStorage.setItem("timeLeftSite", time);
  };

  var timer = myTimer();

  return null;
}
