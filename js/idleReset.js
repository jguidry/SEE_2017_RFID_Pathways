/*
* File Name: idleReset.js
* Description: This file contains the source code for the idle timed reset. If
* the user is determined to be idle for a specified amount of time, the system
* will automatically redirect to the deafult page.
* Date: 4 August 2017
* Author: James Guidry
*/

var session_timeout = 5000;   //XXX seconds idle timeout

var reloadpage = "index.html";  //Page to reload / redirect to
var timeout = null;




//XXX figure out linking this to the different pathways, gets error right now
//Get the entire page to put as scope for idle reset
var element1 = document.getElementById('page1');
//var element2 = document.getElementById('page2');

//Events that will restart the idle timer
element1.addEventListener( "click", idleReset );
element1.addEventListener( "mousemove", idleReset );
element1.addEventListener( "keypress", idleReset );
element1.addEventListener( "scroll", idleReset );
element1.addEventListener( "drag", idleReset );
element1.addEventListener( "dragend", idleReset );
element1.addEventListener( "play", idleReset );

/*
element2.addEventListener( "click", idleReset );
element2.addEventListener( "mousemove", idleReset );
element2.addEventListener( "keypress", idleReset );
element2.addEventListener( "scroll", idleReset );
element2.addEventListener( "drag", idleReset );
element2.addEventListener( "dragend", idleReset );
element2.addEventListener( "play", idleReset );
*/

/*
* Function Name: idleReset
* Description: Redirects page to the 'reloadpage' var if user is determined to
* be idle.
*/

function idleReset(){
  console.log( "reset" );
  if (timeout)
    clearTimeout(timeout);
    timeout = setTimeout("location.replace('" + reloadpage + "');", session_timeout);
}
