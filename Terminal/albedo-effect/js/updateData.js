/*
 * File Name: updateData.js
 * Author(s): James Guidry
 * Date: 28 August 2017
 * Description: This file contains the js functions to update the various user
 * statistics recorded in the User_Data child of the database for later use.
 */

/*
* Function Name: updateUses
* Description: Updates various statistics in the database.
*
* Parameters:
*   database: Reference to the database
*   pathLink: Where to redirect terminal
*   terminalNum: The active terminalNum
*   pathwayChar: Character that represents the pathway
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
