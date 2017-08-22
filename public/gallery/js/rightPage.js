
/* Swipe Functionality */
var myElement = document.getElementById('swipe');
var mc = new Hammer(myElement);
var pathway =
//mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
// listen to events...
mc.on("swiperight", function(ev) {
console.log("HI")
        //window.location.href = "pathway"+backPage+".html";
        history.go(-1)



});
