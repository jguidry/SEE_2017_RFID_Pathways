/*
* File Name: populateContent.js
* Author(s): James Guidry
* Date: 15 August 2017
* Description: Retrieves correct content from firebase and displays it on the
* pathway html file.
*/

/*
* Function Name: populateContent
* Description: Pulls the correct content from the Firebase Storage and Displays
* it on the calling html pathway page
* Parameters:
*   terminalNum: The Terminal number that is running. Used for the correct path
*                in the Storage.
*   contentID: id of the html element that will be updated
*/

function populateContent( terminalNum, contentID ){

  //Get content name from local storage
  var content = localStorage.getItem( "contentName" );

  //Get reference to correct content in FB Storage
  var folderRef = firebase.storage().ref().child( terminalNum + "/" );
  var contentRef = folderRef.child( terminalNum + "_" + content );

  //Dynamically set the content
  contentRef.getDownloadURL().then( function( url ){

    var elem = document.getElementById( contentID );
    elem.src = url;

  }).catch( function( error ){

    //Hanlde errors TODO
    console.log( "Content download error..." + error );

  });

}
