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

var pathwayChar;
var langChar;
var levelChar;

function pathway_redirect() {

  //Firebase reference
  var database = firebase.database();
  var ID_LENGTH = 8;

  //Get the userID scanned in
  var userID = document.getElementById('RFID_ID').value;

  //User validation
  if( userID.length != ID_LENGTH ){
    refocusInput();
  }
  else if( isNaN( userID ) ){
    refocusInput();
  }
  //TODO possibly get more checks
  else{


    //Get a reference to the Pathway field of the user in the db
    var pathwayRef = database.ref().child( "RFID/" + userID + "/pathway" );

    //Get a ref to language
    var langRef = database.ref().child( "RFID/" + userID + "/Language");

    //Get a ref to education level
    var levelRef = database.ref().child( "RFID/" + userID + "/Level");


    //Add the pathway to the url to go to
    pathwayRef.on('value', function( snapshot ){

      //Check that the user's tag has been registered in database
      if( snapshot.val() === null){
        //Display popup error for invalid user
        invalidPopup();

        //Reset entry field for clean read and refocus
        refocusInput();
      }

      else{ //user tag is valid

        //Get the pathway character
        var pathway = JSON.stringify( snapshot.val() );
        var pathChar = pathway.charAt(1);
        pathwayChar = pathChar;


        //Updating user statistics  TODO TODO none of this sheet works
      /*  var updates = {};
        var newDataVal = updateData( database );
        window.alert( newDataVal );
        updates[ 'Total_Visitors' + newDataVal ];
        database.ref().child( 'User_Data/' ).update( updates );

        window.alert( "Setting to: " + newDataVal );
        database.ref().child( 'User_Data/Total_Visitors' ).set( newDataVal );*/

        //Build the pathway html link
        var path = "pathway" + pathChar + ".html";

        //TODO put this at then end after everything is built
        //Take user to correct pathway page
        window.location.href = path;

        //Reset the text field on index.html
        document.getElementById('RFID_ID').value = '';
      }
    });
  }
}


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
