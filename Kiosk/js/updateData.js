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
  var regRef = database.ref().child( 'User_Data' ).child(
    "Total_Registrations" );

    console.log( regRef );

  regRef.transaction( function( path ){
    return path + 1;
  });

}

/*
* Function Name: setPathwayReg
* Description: Increments the number of times a particular pathway has been
* selected by visitors.
* Parameters:
*   database: The firebase database reference that will be manipulated
*   pathwayChar: The first character of the pathway that the visitor chose
*                This will be the pathway that will be incremented.
*/

function setPathwayReg( database, pathwayChar ){

  //Refernece to the correct pathway chosen
  var pathwayRef = database.ref().child( 'User_Data' ).child( 'Pathway' +
    pathwayChar).child( "Registers" );


  pathwayRef.transaction( function( path ){
    return path + 1;
  }).then( function(){
    redirect();
  });

}
