/* Swipe Functionality */
var myElement = document.getElementById('swipe');
var mc = new Hammer(myElement);
//mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
// listen to events...
mc.on("swipeleft", function(ev) {
console.log("HI")
        //window.location.href = "pathway"+backPage+".html";
        history.go(-1)



});
