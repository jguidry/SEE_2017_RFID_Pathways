
/*
* File Name: idleReset.js
* Author(s): James Guidry
* Date: 4 August 2017
* Description: This file contains the source code for the idle timed reset. If
* the user is determined to be idle for a specified amount of time, the system
* will automatically redirect to the default page.
*/

//Global variable needed for the setTimeout and clearTimeout functions
var timeout;

/*
* Function Name: attachListeners
* Description: Attaches listeners dynamically to page loaded by the system
* after it redirects user to Pathway page. It then calls idleReset() to begin
* the idle timer.
* Parameters:
*   page: The page that the system was redirected to and needs the listeners
*   terminalNum: The terminal that is active
*/

function attachListeners( terminalNum ){

  //Events that will restart the idle timer
  window.addEventListener( "click", function(){ idleReset( terminalNum ); });
  window.addEventListener( "mousemove", function(){ idleReset( terminalNum ); });
  window.addEventListener( "keypress", function(){ idleReset( terminalNum ); });
  window.addEventListener( "scroll", function(){ idleReset( terminalNum ); });
  window.addEventListener( "drag", function(){ idleReset( terminalNum ); });
  window.addEventListener( "dragend", function(){ idleReset( terminalNum ); });
  window.addEventListener( "touchend", function(){ idleReset( terminalNum ); });
  window.addEventListener( "touchmove", function(){ idleReset( terminalNum ); });
  window.addEventListener( "touchstart", function(){ idleReset( terminalNum ); });

  //Begin the idle timer
  idleBegin( terminalNum );

}

function videoListeners( terminalNum ) {

  console.log("video listeners attached...");
  var video = document.getElementById('videoTop');

  //Video listeners
  video.addEventListener( "pause", function(){ idleReset( terminalNum ); });
  video.addEventListener( "playing", function(){ checkVideo( terminalNum, video ); });



}


/*
* Function Name: idleBegin
* Description: Begins the count down before the page is considered 'idle,' in
*   which the terminal will reset itself back to the default page, and update
*   the interaction time.
* Parameters:
*   terminalNum: Active terminal
*/

function idleBegin( terminalNum ){

  var session_timeout = 40 * 1000;   //Amount for idle timeout (seconds)

  //Set the average interaction time and send back to index page
  timeout = setTimeout(function(){calcTime( true, terminalNum, 'index.html');},
    session_timeout);
}


/*
* Function Name: idleReset
* Description: Resets the setTimeout function while the page is still deemed to
*   be active. It then calls idleBegin again to make sure the timeout is
*   restarted.
* Parameters:
*   terminalNum: The terminal that is active
*/

function idleReset( terminalNum ){

  //Reset the timeout
  console.log('reset');
  clearTimeout( timeout );

  idleBegin( terminalNum );

}

/*
* Function Name: checkVideo
* Description: Stops / starts the idle timer based on the status of the video so
*   that the user won't be reset while watching.
* Parameters:
*   terminalNum: The active terminal
*   video: Video element to check
*/

function checkVideo( terminalNum, video ){

  console.log( "checking videos...");

  //The video is playing --> stop the timer
  if( (video.currentTime != 0) || !(video.paused) || !(video.ended) ){
    console.log( 'playing' );
    clearTimeout( timeout );
  }
  else{ //The video is not playing --> start the timer
    console.log('video stopped');
    idleBegin(terminalNum);
  }

}
