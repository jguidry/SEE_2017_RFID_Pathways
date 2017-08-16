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
  var registered = false;  //Scanned id was registered boolean

  var database = firebase.database();  //Firebase reference
  var userID = document.getElementById('RFID_ID').value;  //userID scanned

  //User validation checks
  if( userID.length != ID_LENGTH ){ //Correct ID length
    refocusInput();
  }
  else if( isNaN( userID ) ){       //ID scanned was numbers
    refocusInput();
  }
                                    //TODO possibly get more checks
  else{  //Valid input by scanner



    //Get a reference to the user fields in the database
    var pathwayRef = database.ref().child( "RFID/" + userID + "/pathway" );
    var langRef = database.ref().child( "RFID/" + userID + "/language");
    var levelRef = database.ref().child( "RFID/" + userID + "/level");

    var pathwayChar;
    var langChar;
    var levelChar;
    var pathLink;

    //Parse the language character for content generation
    langRef.on( 'value', function( snapshot ){

      //Check that the user's tag has been registered in database
      if( snapshot.val() === null){

        registered = false; //Not a registered tag
        //console.log( "Reg: " + registered );

        invalidPopup();   //Display popup error for invalid user
        refocusInput();   //Reset entry field for clean read and refocus

      }
      else{   //user tag is valid, get the language char

        registered = true;
        langChar = JSON.stringify( snapshot.val() ).charAt( 1 );


          //The ID entered was registered, so we can continue working with database
          if( registered ){

            //Parse the level number for content generation
            levelRef.on( 'value', function( snapshot ){

              levelChar = snapshot.val();

            });

            //Parse the pathway char for content generation and pathway link
            pathwayRef.on('value', function( snapshot ){

              pathwayChar = JSON.stringify( snapshot.val() ).charAt( 1 );

              //Build the pathway html link
              pathLink = "pathway" + pathwayChar + ".html";

              /**** Content population and pathway redirection ****/

              //Get qualifiers for content population
              var terminalNum = "T_1";
              var contentID = "content_" + pathwayChar;
              //TODO search for file name to pass in instead of getting extension
              var contentName = pathwayChar + langChar + levelChar + ".jpeg"; //TODO dynamically get extension

              window.alert( contentName );

              //Set contentName in local storage
              localStorage.setItem( "contentName", contentName );

              //Moving to onload pathways
              //Populate the pathway page with its content
              //populateContent( terminalNum, contentID );

              //Updating user statistics (total visitors)
              setVisitors( database );

              //Take user to correct pathway page
              window.location.href = pathLink;

              //Reset the text field on index.html
              document.getElementById('RFID_ID').value = '';

            }); //End pathwayChar



          } //End if registered block

      }
    });



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
