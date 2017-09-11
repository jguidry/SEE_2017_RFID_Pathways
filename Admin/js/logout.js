/*
* File Name: logout.js
* Author(s): Matthew Rice
* Date: 1 September 2017
* Description: This file sign the user out of the admin portal using firebase's
* signOut functino
*/

function handleLogout() {

  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    window.location.href = "index.html";
  }).catch(function(error) {
    // An error happened.
  });

}
