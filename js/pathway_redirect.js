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
  var database = firebase.database();

  var userPathA = "Path A";

  //Temporary userIDs for project testing while no database connected
  var cardID = "00819879";
  var tagID = "10007974";

  //Get the userID scanned in
  var userID = document.getElementById('RFID_ID').value;

  //TODO delete this at the end once we add database
  /*if( userID === cardID ){

    //Reset text box to have no entry
    document.getElementById('RFID_ID').value = '';

    //window.alert( window.localStorage.getItem( "Path_A" ) );
    //redirect user
    window.location.href = "pathwayA.html";
  }
  else if( userID === tagID ){

    //Reset text box to have no entry
    document.getElementById('RFID_ID').value = '';

    //redirect user
    window.location.href = "pathwayB.html";
  }*/


  //Get the user's specified pathway from database
  var pathRef = database.ref().child( 'RFID' ).child( userID ).child( 'Pathway');
  pathRef.on('value', function( snapshot ){

    console.log( 'value:' + JSON.stringify( snapshot.val() ));

    var pathway = JSON.stringify( snapshot.val() );
    var thing = pathway.charAt(1);

    var path = "pathway" + thing + ".html";

    window.location.href= path;
    path = '';
    userID = 0;

  });



  //If userID not found (not in database), prompt user to register their tag

  //If userID found, parse for preferences

  //Based on preferences, redirect to correct Pathway


}
