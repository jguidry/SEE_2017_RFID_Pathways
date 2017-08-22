/*
* Filename: pathway_redirect.js
* Author(s): James Guidry
* Description: This file contains the source javascript that will take the user
* to the correct Professional Pathway page based upon their preferences.
* Date: 2 August 2017
*/

/*
* Function Name: pathway_redirect
* Description: Obtains the user's userID value that was scanned, and based
* upon the preferences associated with the unique userID in the database,
* redirect to the correct "Professional Pathway" page.
*/

function pathway_redirect() {

  var ID_LENGTH = 8;  //Length of proper ID

  var database = firebase.database();  //Firebase reference
  var userID = document.getElementById('RFID_ID').value;  //userID scanned

  //User validation checks
  if( userID.length != ID_LENGTH ){ //Correct ID length
    refocusInput();
  }
  else if( isNaN( userID ) ){       //ID scanned was numbers
    refocusInput();
  }
  else{  //Valid input by scanner

    //Get a reference to the user fields in the database
    var pathwayRef = database.ref().child( "RFID/" + userID + "/pathway" );
    var langRef = database.ref().child( "RFID/" + userID + "/language");

    //Variables used for content generation and html redirection
    var terminalNum = "T_1";
    var pathwayChar;
    var langChar;
    var extension;    //extension of media source

    var pathLink;     //html page to go to

    var registered;   //If the user tag is registered in the DB

    //Get the language character, then get the pathway, then get the extension
    langRef.once( 'value' ).then( function( snapshot ){

      if( snapshot.val() == null){  //User was not registered in the DB

        invalidPopup();   //Display popup error for invalid user
        refocusInput();   //Reset entry field for clean read and refocus
        registered = false;

      }
      else{   //user tag is valid, get the language char

        langChar = JSON.stringify( snapshot.val() ).charAt( 1 );
        //alert( "Should be 1st step: langChar: " + langChar );

        registered = true;

      }

      //Get the pathway character and build the html link to redirect to
      if( registered ){
        return pathwayRef.once( 'value' ).then( function( snapshot ){

          pathwayChar = JSON.stringify( snapshot.val() ).charAt( 1 );
          //alert( "Should be 2nd step: pathway char: " + pathwayChar );

          pathLink = "pathway" + pathwayChar + ".html";

        }); //End pathwayRef stuff on return line
      }

    }).then( function() {

      //alert( "done with lang and path, doing some exten stuff")
      if( registered ){

        //Create DB to file
        var fileRef = database.ref().child( "Terminals/" + terminalNum + "/" +
          terminalNum + "_" + pathwayChar + langChar );

        //Get the file extension
        return fileRef.once( 'value' ).then( function( snapshot ){

          extension = JSON.stringify( snapshot.val() ).slice( 1, -1 );
          //alert( "Should be 3rd: extension: " + extension );

          var contentName = pathwayChar + langChar + extension;
          //window.alert( "Content: " + contentName );

          //alert( "ContentName inside redirect:" + contentName );

          //alert( "Current contentName in localStorage: " + localStorage.getItem( "contentName") );
          //Set content's name in local storage for populateContent
          localStorage.setItem( "contentName", contentName );
          //alert( "Contentname just stored:" + localStorage.getItem( "contentName") );

          //Updating user statistics (total visitors)
          setVisitors( database );

          //Take user to correct pathway page
          window.location.href = pathLink;

          //Reset the text field on index.html
          document.getElementById('RFID_ID').value = '';


        }); //end fileRef .then

      } //End if registered clause

    }); //.then( function(){

      //alert( "Should be actaully last" );
      //Process image to display
      //alert( "Calling populate" );
      //populateContent( terminalNum );

    //}); //End .then of langRef



  } //End else (valid input read by scanner)

} //End function



/*
* Function Name: invalidPopup
* Description: Displays a popup for a specified amount of time that asks
* the user to register their RFID tag.
*/

var TIME_LENGTH = 3000; //Time before automatic close (3 seconds)
function invalidPopup(){

  //Get the popup
  var popup = document.getElementById( 'myPopup' );

  //Make popup visable
  popup.style.display = "block";

  //Automatically close
  setTimeout( function(){ popup.style.display = "none"; }, TIME_LENGTH );

}
