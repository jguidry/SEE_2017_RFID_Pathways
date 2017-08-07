/*
* File Name: idleReset.js
* Description: This file contains the source code for the idle timed reset. If
* the user is determined to be idle for a specified amount of time, the system
* will automatically redirect to the deafult page.
* Date: 4 August 2017
* Author: James Guidry
*/

var session_timeout = 5000;   //45 seconds idle timeout

var reloadpage = "index.html";  //Page to reload / redirect to
var timeout = null;

//Get the entire page to put as scope for idle reset
var element = document.getElementById( "page" );

//Events that will restart the idle timer
element.addEventListener( "click", idleReset );
element.addEventListener( "mousemove", idleReset );
element.addEventListener( "keypress", idleReset );
element.addEventListener( "scroll", idleReset );
element.addEventListener( "drag", idleReset );
element.addEventListener( "dragend", idleReset );
element.addEventListener( "play", idleReset );


/*
* Function Name: idleReset
* Description: Redirects page to the 'reloadpage' var if user is determined to
* be idle.
*/

function idleReset(){
  if (timeout)
    clearTimeout(timeout);
    timeout = setTimeout("location.replace('" + reloadpage + "');", session_timeout);
}
