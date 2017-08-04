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
var TIME_LENGTH = 3000; //Time before automatic close

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

  //Database reference
  var database = firebase.database();

  //Get the userID scanned in
  var userID = document.getElementById('RFID_ID').value;

  //Get a reference to the Pathway field of the user in the db
  var pathRef = database.ref().child( 'RFID' ).child( userID ).child( 'Pathway' );

  //Overall gets the pathway and redirects user to correct page
  pathRef.on('value', function( snapshot ){

    //Log the value retrieved
    console.log( 'value:' + JSON.stringify( snapshot.val() ));

    //Check that the user's tag has been registered and is in the database
    if( snapshot.val() === null){

      //Display popup error for invalid user
      invalidPopup();

      //Reset entry field for clean read
      document.getElementById('RFID_ID').value = '';
    }
    else{ //user tag is valid

      //Get the pathway character
      var pathway = JSON.stringify( snapshot.val() );
      var thing = pathway.charAt(1);

      //Build the pathway html link
      var path = "pathway" + thing + ".html";

      //Take user to correct pathway page
      window.location.href= path;

      //Reset the text field on index.html
      document.getElementById('RFID_ID').value = '';
    }
  });

}
