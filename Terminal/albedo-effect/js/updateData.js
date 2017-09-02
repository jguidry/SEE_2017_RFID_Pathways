/*
 * File Name: updateData.js
 * Author(s): James Guidry
 * Date: 28 August 2017
 * Description: This file contains the js functions to update the various user
 * statistics recorded in the User_Data child of the database for later use.
 */


function updateUses( database, pathLink, terminalNum, pathwayChar ){

  //Reference to the Total_Uses child for the specific terminal
  var usesRef = database.ref().child( 'Terminals' ).child(
    terminalNum ).child('Interaction').child( 'Total_Uses');

    //Refernece to the correct pathway chosen
    var pathwayRef = database.ref().child( 'User_Data' ).child( 'Pathway' +
      pathwayChar ).child( "Uses" );

    //Update the total number of visitors
    usesRef.transaction( function( uses ){

      return uses + 1;

    }).then( function(){

      //Update the times the pathway was used
      pathwayRef.transaction( function( path ){

        return path + 1;

      }).then( function(){
        //Reset the text field for ID entry
        document.getElementById('RFID_ID').value = '';

        window.location.href = pathLink;

      });

    });

}


 /*
 * Function Name: setTerminalUses
 * Description: increments the total number of visitors in the database.
 * Parameters:
 *   database: The firebase database reference that will be manipulated.
 *   terminalNum: Which terminal is being used.
 */

 function setTerminalUses( database, terminalNum ){

   //Reference to the Total_Uses child for the specific terminal
   var usesRef = database.ref().child( 'Terminals' ).child(
     terminalNum ).child('Interaction').child( 'Total_Uses');

     console.log( "Terminals usesRef: " + usesRef );

  //Update the total number of visitors
  usesRef.transaction( function( uses ){
    return uses + 1;
  });

}

/*
* Function Name: setPathwayUses
* Description: Increments the number of times a particular pathway has been
* interacted with by visitors.
* Parameters:
*   database: The firebase database reference that will be manipulated.
*   pathwayChar: The first character of the pathway that the visitor chose
*                This will be the pathway that will be incremented.
*/

function setPathwayUses( database, pathwayChar ){

  //Refernece to the correct pathway chosen
  var pathwayRef = database.ref().child( 'User_Data' ).child( 'Pathway' +
    pathwayChar ).child( "Uses" );

    console.log( "Pathways pathwayRef: " + pathwayRef );


  pathwayRef.transaction( function( path ){
    //alert( "path uses" );
    console.log( "path uses set" );
    return path + 1;
  });

}
