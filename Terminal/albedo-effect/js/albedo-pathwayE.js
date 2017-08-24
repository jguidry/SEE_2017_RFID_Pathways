function populateContent(){

  //Get content name from local storage

  //var content = localStorage.getItem( "contentName" );

var names={
  middle: "albedo-engineer.jpg"
}
for(var name in names){




  //Get reference to correct content in FB Storage

  var folderRef = firebase.storage().ref().child( "T_1/" );
  var contentRef = folderRef.child( names[name] );

  //alert( "Content: " + content );
  //alert( "ContenetRef:: " + contentRef );

  //Dynamically set the content
  contentRef.getDownloadURL().then( function( url ){

    //Store this url into local store for the html page to pick up and set src
    //localStorage.setItem( "downloadURL", url );
    //alert( "WOOHOO" );
    //alert( "Placed into localStorage: " + localStorage.getItem("downloadURL") );
    document.getElementById(name).src = url;

    }).catch( function( error ){
      //Hanlde errors TODO
      console.log( "Content download error..." + JSON.stringify( error ) );
    });
  }
}
