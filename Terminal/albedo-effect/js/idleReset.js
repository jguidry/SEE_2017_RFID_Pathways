
/*
* File Name: idleReset.js
* Description: This file contains the source code for the idle timed reset. If
* the user is determined to be idle for a specified amount of time, the system
* will automatically redirect to the deafult page.
* Date: 4 August 2017
* Author(s): James Guidry
*/

/*
* Function Name: attachListeners
* Description: Attaches listeners dynamically to page loaded by the system
* after it redirects user to Pathway page. It then calls idleReset() to begin
* the idle timer.
* Parameters:
*   page: The page that the system was redirected to and needs the listeners
*   terminalNum: The terminal that is active
*/

function attachListeners( page, terminalNum ){

  //The page the system was redirected to
  var element = document.getElementById( page );

  //Events that will restart the idle timer
  element.addEventListener( "click", idleReset );
  element.addEventListener( "mousemove", idleReset );
  element.addEventListener( "keypress", idleReset );
  element.addEventListener( "scroll", idleReset );
  element.addEventListener( "drag", idleReset );
  element.addEventListener( "dragend", idleReset );
  element.addEventListener( "play", idleReset );

  console.log( terminalNum );

  //Begin the idle reset
  idleReset( terminalNum );

}

/*
* Function Name: idleReset
* Description: Redirects page to the 'reloadpage' var if user is determined to
* be idle.
* Parameters:
*   terminalNum: The terminal that is active
*/

function idleReset( terminalNum ){

  var session_timeout = 40000;   //Amount of for seconds idle timeout
  var reloadpage = "index.html";  //Page to reload / redirect to
  var timeout = null;

  if (timeout)
    clearTimeout(timeout);

    //Set the average interaction time and send back to index page
    timeout = setTimeout(function(){calcTime( true, terminalNum)}, session_timeout);
}
