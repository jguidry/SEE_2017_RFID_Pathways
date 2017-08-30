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

    //Variables used for content generation and html redirection
    var terminalNum = "T_2";
    var pathwayChar;
    var extension;    //extension of media source

    var pathLink;     //html page to go to
    var registered;   //If the user tag is registered in the DB

    //Get the pathway character, then get the extension
    pathwayRef.once( 'value' ).then( function( snapshot ){

      if( snapshot.val() == null){  //User was not registered in the DB

        invalidPopup();   //Display popup error for invalid user
        refocusInput();   //Reset entry field for clean read and refocus
        registered = false;

      }
      else{   //user tag is valid, get the pathway char

        pathwayChar = JSON.stringify( snapshot.val() ).charAt( 1 );
        pathLink = "pathway" + pathwayChar + ".html";

        //Updating user statistics TODO make sure this works, and doesnt halt progression
        setTerminalUses( database, terminalNum );
        setPathwayUses( database, pathwayChar );


        registered = true;

      }

      //Get the pathway character and build the html link to redirect to
      if( registered ){

        //Create DB to file
        var fileRef = database.ref().child( "Terminals/" + terminalNum + "/" +
        terminalNum + "_" + pathwayChar );

        //Get the file extension
        return fileRef.once( 'value' ).then( function( snapshot ){

          extension = JSON.stringify( snapshot.val() ).slice( 1, -1 );

          var contentName = pathwayChar + extension;

          //Set content's name in local storage for populateContent
          localStorage.setItem( "contentName", contentName );

          //Take user to correct pathway page
          window.location.href = pathLink;

          //Reset the text field on index.html
          document.getElementById('RFID_ID').value = '';

        }); //End file extension .then()
      } //Ends if registered inside of pathway's .then()
    }); //End pathway .then()
  } //End else
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
