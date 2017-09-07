/*
* File Name: Timer.js
* Author(s): James Guidry
* Description: Contains functionality for calculating the time spent on a page
*   for user Interaction Analytics.
* Date: 29 August 2017
*/

/*
* Function Name: startTimer
* Description: Sets the starting time of when the page first loads. Used in the
*   calculation of average interactivity with the terminal.
*/

function startTimer(){
  var start = new Date();
  var startTime = start.getTime(); //Get the current time (ms)
  localStorage.setItem( "startTime", startTime );
}

/*
* Function Name: calcTime
* Description: Calculates the total time spent on the page, and updates the
*   average time spent at the terminal in the db.
*   Calculation done in such an order so that all the needed information is
*   retrieved from the database before used, and redirects back to default
*   only after the new average time has been stored back into the database (db).
*
*   Conceptual Progression of the .then() and .transaction() functions:
*     1. Get the total time
*     2. Get the total uses
*     3. Store back the updated total time (sessionTime + totalTime)
*     4. Calculate average time
*     5. Store new average time
*     6. Redirect terminal to default page.
*
* Parameters:
*   idle: Bool flag for if the page ended due to inactivity or not.
*   terminalNum: Which terminal is being used.
*   link: What page to redirect to
*/

function calcTime( idle, terminalNum, link ){

  var ROUND_FACTOR = 100;           //Used for rounding average time
  var MS_FACTOR = 1000;             //Milliseconds conversion factor
  var IDLE_FACTOR = 30 * MS_FACTOR; //35 seconds

  //Database references
  var database = firebase.database();

  var totalTimeRef = database.ref().child('Terminals').child(   //Total_Time
    terminalNum).child('Interaction').child('Total_Time');

  var totalUsesRef = database.ref().child( 'Terminals' ).child( //Total_Uses
    terminalNum ).child('Interaction').child( 'Total_Uses');

  var avgTimeRef = database.ref().child('Terminals').child(     //Avg_Time
    terminalNum).child('Interaction').child('Avg_Time');

  //Hold the data from database references and used for calculations
  var totalTime = 0;
  var totalUses = 0;
  var avgTime = 0;

  //Timing variables to calculate time spent on page
  var end = new Date();
  var endTime = end.getTime();
  var startTime = localStorage.getItem( "startTime" );

  var sessionTime = 0;  //Time of current 'session'

  //Calculate sessionTime
  if( !idle ){ //User clicked Finish button
    sessionTime = Math.round( (endTime - startTime) / MS_FACTOR );
  }
  else{ //User timed out due to inactivity
    sessionTime = Math.round( (endTime - IDLE_FACTOR - startTime  ) /
      MS_FACTOR );
  }

  //Calculate new average time spent, store into db and redirect to default page
  return totalTimeRef.once('value').then( function(snapshot){

    //Get the total time spent at this terminal
    totalTime = sessionTime + snapshot.val();

    //Get the total times this terminal has been used
    return totalUsesRef.once( 'value' ).then( function( snapshot ){
      totalUses = snapshot.val();
    });

  }).then( function(){     //Update the total time spent at the terminal

    totalTimeRef.transaction( function( time ){
      return time + sessionTime;
    });

  }).then( function(){  //Calculate new average time and store into db

    avgTime = Math.round( ((totalTime/totalUses)*ROUND_FACTOR) / ROUND_FACTOR );

    avgTimeRef.transaction( function( time ){

      return avgTime;

    }).then( function(){  //Redirect back to default page
      window.location.href = link;
    });

  });

} //End function
