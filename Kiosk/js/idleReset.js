/*
* File Name: idleReset.js
* Description: This file contains the source code for the idle timed reset. If
* the user is determined to be idle for a specified amount of time, the system
* will automatically redirect to the deafult page.
* Date: 4 August 2017
* Author(s): James Guidry
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

function attachListeners() {

  //Events that will restart the idle timer
  window.addEventListener("click", function() {
    idleReset();
  });
  window.addEventListener("mousemove", function() {
    idleReset();
  });
  window.addEventListener("keypress", function() {
    idleReset();
  });
  window.addEventListener("scroll", function() {
    idleReset();
  });
  window.addEventListener("drag", function() {
    idleReset();
  });
  window.addEventListener("dragend", function() {
    idleReset();
  });
  window.addEventListener("play", function() {
    idleReset();
  });
  window.addEventListener("touchend", function() {
    idleReset();
  });
  window.addEventListener("touchmove", function() {
    idleReset();
  });
  window.addEventListener("touchstart", function() {
    idleReset();
  });

  //Begin the idle timer
  idleBegin();

}

/*
* Function Name: idleBegin
* Description: Begins the count down before the page is considered 'idle,' in
*   which the terminal will reset itself back to the default page, and update
*   the interaction time.
*/

function idleBegin() {

  var session_timeout = 40000; //Amount for seconds idle timeout

  //Set the average interaction time and send back to index page
  timeout = setTimeout(function() {
    window.location.href = "registrationSplash.html";
  }, session_timeout);
}

/*
* Function Name: idleReset
* Description: Resets the setTimeout function while the page is still deemed to
*   be active. It then calls idleBegin again to make sure the timeout is
*   restarted.
*/

function idleReset() {

  //Reset the timeout
  console.log("reset");
  clearTimeout(timeout);

  idleBegin();

}
