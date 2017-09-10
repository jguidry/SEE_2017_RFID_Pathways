
/*
* File Name: logout.js
* Author(s): Matt Rice
* Description: Handles logout functionality for the admin portal.
* Date: 30 August 2017
*/

function handleLogout(){

  //TODO Check Blank Email/Password

firebase.auth().signOut().then(function() {
// Sign-out successful.
 window.location.href = "index.html";
}).catch(function(error) {
// An error happened.
});

}
