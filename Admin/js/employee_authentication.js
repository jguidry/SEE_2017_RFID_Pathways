/*
* File Name: analytics.js
* Author(s): Matthew Rice
* Date: 4 September 2017
* Description: This file ensures that the user is signed in to access the page
*/
$(document).ready(() => {
  var signOut = false;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
      alert("You are not signed in");
      //Redirects to login page
      window.location.href = "index.html"
    }
  });

});
