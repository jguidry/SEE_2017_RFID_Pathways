/*
* File Name: updateData.js
* Author(s): James Guidry
* Description: Contains functions to record user statistics and data.
* Date: 29 August 2017
*/

/*
* Function Name: setRegistrations
* Description: Keeps track of the total number of users that registered their
*              tag.
* Parameters:
*   database: The firebase database reference that will be manipulated.
*/

function setRegistrations( database ){

  //Refernece to the correct pathway chosen
  var pathwayRef = database.ref().child( 'User_Data' ).child(
    "Total_Registrations" );

  pathwayRef.transaction( function( path ){
    return path + 1;
  });
}
