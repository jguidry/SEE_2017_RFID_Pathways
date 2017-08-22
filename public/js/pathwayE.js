var myElement = document.getElementById('swipe');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);
//console.log("HOO")
// listen to events...
mc.on("swipeleft swiperight swipeup swipedown", function(ev) {
    switch (ev.type) {
      case "swipeleft":
        window.location.href = "leftPage.html";
        break;
      case "swiperight":
        window.location.href = "rightPage.html";
        break;
      case "swipeup":
        window.location.href = "topPage.html";
        break;
      case "swipedown":
        window.location.href = "bottomPage.html";
      default:

    }
});
