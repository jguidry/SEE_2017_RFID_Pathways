//
// /* Swipe Functionality */
//
// var myElement = document.getElementById('swipe');
// var mc = new Hammer(myElement);
// mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
// // listen to events...
// mc.on("swipeleft swiperight swipeup swipedown", function(ev) {
//   console.log("YO");
//     switch (ev.type) {
//       case "swipeleft":
//       jump("firstPage")
//       //document.getElementById(h).scrollIntoView();
//         //window.location.href = "gallery/index.html";
//         break;
//       case "swiperight":
//         //window.location.href = "leftPage.html";
//         jump("firstPage")
//         break;
//       case "swipeup":
//         //window.location.href = "bottomPage.html";
//         jump("firstPage")
//         break;
//       case "swipedown":
//         jump("firstPage")
//         //window.location.href = "topPage.html";
//       default:
//
//     }
// });
// function jump(h){
//     var url = location.href;               //Save down the URL without hash.
//     location.href = "#"+h;                 //Go to the target element.
//     history.replaceState(null,null,url);   //Don't like hashes. Changing it back.
// }​
