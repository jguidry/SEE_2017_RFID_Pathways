/*
* File Name: pageDefault.js
* Author(s): James Guidry
* Date: 6 August 2017
* Description: This file contains the source functions to determine the
* functionality / display of the website based off of online connection
* (on or offline).
*/

/*
* Function Name: offlineDefault
* Description: This function acts as the redundancy measure in the case of no
* wifi/internet connection and will execute a task desired by the Staff that will
* act as a default use of the terminal. TODO finsih when functional
*/

function offlineDefault(){

  console.log( "System lost connection at: " + Date() );

  window.location.replace( "offlineDefault.html" );

}

/*
* Function Name: onlineDefault
* Description: This function is called when there is a wifi/internet connection
* and determines what the website will then do. TODO finish this when functional
*/

function onlineDefault(){

  //Log reconnetion
  console.log( "System ONLINE at: " + Date() );

  window.location.replace( 'index.html' );
}
