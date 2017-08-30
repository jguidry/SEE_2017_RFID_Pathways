/*
 * File Name: updateData.js
 * Author(s): James Guidry
 * Date: 7 August 2017
 * Description: This file contains the js functions to update the various user
 * statistics recorded in the User_Data child of the database for later use.
 */

/*
* Function Name: setVisitors
* Description: Increments the number of times a particular pathway has been
* selected by visitors.
* Parameters:
*   database: The firebase database reference that will be manipulated
*   pathwayChar: The first character of the pathway that the visitor chose
*                This will be the pathway that will be incremented.
*/
//TODO maybe reformat the data entry away from PathwayX to 'pathway name'
function setPathway( database, pathwayChar ){

  //Refernece to the correct pathway chosen
  var pathwayRef = database.ref().child( 'User_Data' ).child( 'Pathway' +
    pathwayChar );

  pathwayRef.transaction( function( path ){
    return path + 1;
  });
}
