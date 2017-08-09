/*
* Filename: pathway_redirect.js
* Author(s): James Guidry
* Description: This file contains the source javascript that will take the user
* to the correct Professional Pathway page based upon their preferences.
* Date: 2 August 2017
*/

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

/*
* Function Name: pathway_redirect
* Description: Obtains the user's userID value that was scanned, and based
* upon the preferences associated with the unique userID in the database,
* redirect to the correct "Professional Pathway" page.
*/

function pathway_redirect() {

  //Firebase reference
  var database = firebase.database();

  //Get the userID scanned in
  var userID = document.getElementById('RFID_ID').value;
  //TODO TODO TODO sanatize for sql? --> security risks here to look into


  //Get a reference to the Pathway field of the user in the db
  var pathwayRef = database.ref().child( "RFID/" + userID + "/Pathway" );

  //Get a ref to language
  var langRef = database.ref().child( "RFID/" + userID + "/Language");

  //Get a ref to education level
  var levelRef = database.ref().child( "RFID/" + userID + "/Level");


  //TODO
  //Turn this step into a function

  //Add the pathway to the url to go to
  pathwayRef.on('value', function( snapshot ){

    //Log the value retrieved to console
    //console.log( 'value:' + JSON.stringify( snapshot.val() ));

    //Check that the user's tag has been registered in database
    if( snapshot.val() === null){
      //Display popup error for invalid user
      invalidPopup();

      //Reset entry field for clean read
      document.getElementById('RFID_ID').value = '';
    }

    else{ //user tag is valid

      //Get the pathway character
      var pathway = JSON.stringify( snapshot.val() );
      var pathChar = pathway.charAt(1);                        //TODO TODO TODO fix variable name to something useful

      //Build the pathway html link
      var path = "pathway" + pathChar + ".html";

          //TODO TODO TODO
          //Record user statistics (own function/file)
          //TODO TODO TODO


          //TODO put this at then end after everything is built
      //Take user to correct pathway page
      window.location.href = path;

      //Reset the text field on index.html
      document.getElementById('RFID_ID').value = '';
    }
  });

}
