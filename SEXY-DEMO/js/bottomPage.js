var myElement = document.getElementById('swipe');
var mc = new Hammer(myElement);
//mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
// listen to events...
mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
mc.on("swipedown", function(ev) {
        //window.location.href = "pathway"+backPage+".html";
        history.go(-1)



});
