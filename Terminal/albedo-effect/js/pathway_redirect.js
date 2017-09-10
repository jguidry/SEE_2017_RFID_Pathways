/*
* Filename: pathway_redirect.js
* Author(s): James Guidry
* Description: This file contains the source javascript that will take the user
* to the correct Professional Pathway page based upon their preferences. It also
* contains the functionality for invalid user ID handling.
* Date: 2 August 2017
*/

/*
* Function Name: pathway_redirect
* Description: Obtains the user's userID value that was scanned, and based
*   upon the preferences associated with the unique userID in the database,
*   redirect to the correct "Professional Pathway" page.
*/

function pathway_redirect() {

  var ID_LENGTH = 8;  //Length of proper ID

  var database = firebase.database();                     //Firebase reference
  var userID = document.getElementById('RFID_ID').value;  //userID scanned

  //User validation checks
  if( userID.length != ID_LENGTH ){   //Correct ID length
    refocusInput();
  }
  else if( isNaN( userID ) ){         //ID scanned was numbers
    refocusInput();
  }
  else{  //Valid input by scanner

    // RFID Val to local storage for use by pathway
    localStorage.setItem("user_id", userID);

    //Get a reference to the user's pathway in the database
    var pathwayRef = database.ref().child( "RFID/" + userID + "/pathway" );

    //Variables used for html redirection
    var terminalNum = "T_1";
    var pathwayChar;
    var pathLink;     //html page to go to

    //Get the pathway character
    pathwayRef.once( 'value' ).then( function( snapshot ){

      if( snapshot.val() == null){  //User was not registered in the DB

        invalidPopup();   //Display popup error for invalid user
        refocusInput();   //Reset entry field for clean read and refocus

      }
      else{   //user tag is valid, get the pathway char

        //Get the character and build the html link
        pathwayChar = JSON.stringify( snapshot.val() ).charAt( 1 );
        pathLink = "pathway" + pathwayChar + ".html";

        //Record user statistics and redirect to pathLink
        updateUses( database, pathLink, terminalNum, pathwayChar );

      }

    });

  }

} //End function

/*
* Function Name: invalidPopup
* Description: Displays a popup for a specified amount of time that asks
* the user to register their RFID tag.
*/

function invalidPopup(){

  var TIME_LENGTH = 3000; //Time before automatic close (3 seconds)

  //Get the popup and make it visible
  var popup = document.getElementById( 'myPopup' );
  popup.style.display = "block";

  //Automatically close
  setTimeout( function(){ popup.style.display = "none"; }, TIME_LENGTH );

}
