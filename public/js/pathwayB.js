
/* Swipe Functionality */
var myElement = document.getElementById('swipe');
var mc = new Hammer(myElement);

// listen to events...
mc.on("swipeleft swiperight swipeup swipedown", function(ev) {
    switch (ev.type) {
      case "swipeleft":
        window.location.href = "rightPage.html";
        break;
      case "swiperight":
        window.location.href = "leftPage.html";
        break;
      case "swipeup":
        window.location.href = "topPage.html";
        break;
      case "swipedown":
        window.location.href = "bottomPage.html";
      default:

    }
});
