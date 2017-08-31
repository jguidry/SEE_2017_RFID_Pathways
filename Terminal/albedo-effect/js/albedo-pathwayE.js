function populateContent(){

  //Get content name from local storage

  //var content = localStorage.getItem( "contentName" );

var names={
  middle: "albedo-engineer-middle.png",
  right: "albedo-engineer-right.jpg",
  top: "albedo-engineer-top.jpg",
  left: "albedo-engineer-left.jpg",
  bottom: "albedo-engineer-bottom.jpg"
}
// for(var name in names){


  //Get reference to correct content in FB Storage
var name = "middle";
var key=names[name];
  var folderRef = firebase.storage().ref().child( "T_1/" );
  var contentRef = folderRef.child( key );

  //alert( "Content: " + content );
  //alert( "ContenetRef:: " + contentRef );

  //Dynamically set the content
  contentRef.getDownloadURL().then( function( url ){
    //console.log(name);
    //console.log(names[0]);
    //console.log(url);
    //Store this url into local store for the html page to pick up and set src
    //localStorage.setItem( "downloadURL", url );
    //alert( "WOOHOO" );
    //alert( "Placed into localStorage: " + localStorage.getItem("downloadURL") );
    document.getElementById(name).src = url;

    }).catch( function( error ){
      //Hanlde errors TODO
      console.log( "Content download error..." + JSON.stringify( error ) );
    }).then((error)=>{
      name = "right";
      key = names[name];
        var folderRef = firebase.storage().ref().child( "T_1/" );
        var contentRef = folderRef.child( key );

        contentRef.getDownloadURL().then( function( url ){
          document.getElementById(name).src = url;

          }).catch( function( error ){
            //Hanlde errors TODO
            console.log( "Content download error..." + JSON.stringify( error ) );
          });
    }).then((err)=>{
      var name = "top";
      var key=names[name];
        var folderRef = firebase.storage().ref().child( "T_1/" );
        var contentRef = folderRef.child( key );

        contentRef.getDownloadURL().then( function( url ){
          document.getElementById(name).src = url;

          }).catch( function( error ){
            //Hanlde errors TODO
            console.log( "Content download error..." + JSON.stringify( error ) );
          });
    }).then((err)=>{
      var name = "left";
      var key=names[name];
        var folderRef = firebase.storage().ref().child( "T_1/" );
        var contentRef = folderRef.child( key );

        contentRef.getDownloadURL().then( function( url ){
          document.getElementById(name).src = url;

          }).catch( function( error ){
            //Hanlde errors TODO
            console.log( "Content download error..." + JSON.stringify( error ) );
          });
    }).then((err)=>{
      var name = "bottom";
      var key=names[name];
        var folderRef = firebase.storage().ref().child( "T_1/" );
        var contentRef = folderRef.child( key );

        contentRef.getDownloadURL().then( function( url ){
          document.getElementById(name).src = url;

          }).catch( function( error ){
            //Hanlde errors TODO
            console.log( "Content download error..." + JSON.stringify( error ) );
          });
    }).then((err)=>{
        var folderRef = firebase.storage().ref().child( "T_1/" );
        var contentRef = folderRef.child("albedo-engineer-top.mp4");

        contentRef.getDownloadURL().then(function( url ){
        document.getElementById("videoTop").src = url;

          }).catch( function( error ){
            //Hanlde errors TODO
            console.log( "Content download error..." + JSON.stringify( error ) );
          });
    });
    $(document).ready(function(){
      $(document.body).on("touchstart", ()=>{
        $("#swipe-box").hide();

      })

    });


  // }
}
