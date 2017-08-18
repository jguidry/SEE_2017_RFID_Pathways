var myElement = document.getElementById('swipe');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);
//console.log("HOO")
// listen to events...
mc.on("swipeleft swiperight swipeup swipedown", function(ev) {
  
    myElement.textContent = ev.type +" gesture detected.";
});
