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
* redirect to the correct "Professional Pathway."
*/

function pathway_redirect() {

  //Database reference
  //var database = firebase.database();

  //Get the userID scanned in
  var userID = document.getElementById('RFID_ID').value;
  window.alert( "userID: " + userID );

  //Search database for the userID

  //If userID not found (not in database), prompt user to register their tag

  //If userID found, parse for preferences

  //Based on preferences, redirect to correct Pathway

  /*window.location.replace( pathway_link );*/


}
