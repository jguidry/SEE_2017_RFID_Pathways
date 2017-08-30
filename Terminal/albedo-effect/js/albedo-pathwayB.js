/*
* File Name: albedo-pathwayB.js
* Author(s): Matt Rice, Bryle Castro
* Description: Contains the needed js functionality for the specific pathway.
* Date: 30 August 2017
*/

/*
* Function Name: populateContent
* Description: Retrieves the correct content from the database and populates
*   the html elements with the content.
*
* Algorithm: TODO
*/

function populateContent(){

  //Get content name from local storage

  //var content = localStorage.getItem( "contentName" );

var names={
  middle: "albedo-biologist.jpg",
  right: "terminal-background.jpg",
  top: "terminal-background.jpg",
  left: "terminal-background.jpg",
  bottom: "terminal-background.jpg"
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
    });



  // }
}
