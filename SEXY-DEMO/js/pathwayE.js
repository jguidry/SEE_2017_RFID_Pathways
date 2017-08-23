
/* Swipe Functionality */

var myElement = document.getElementById('swipe');
var mc = new Hammer(myElement);
mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
// listen to events...
mc.on("swipeleft swiperight swipeup swipedown", function(ev) {
    switch (ev.type) {
      case "swipeleft":
        window.location.href = "gallery/index.html";
        break;
      case "swiperight":
        window.location.href = "leftPage.html";
        break;
      case "swipeup":
        window.location.href = "bottomPage.html";
        break;
      case "swipedown":
        window.location.href = "topPage.html";
      default:

    }
});
