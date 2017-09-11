/*
* File Name: login.js
* Author(s): Matthew Rice
* Date: 1 September 2017
* Description: This file sign the user into the admin portal using firebase's
* login with email/password
*/

function handleLogin() {
  var email = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    console.log("hi")
    window.location.href = "exhibitPage.html";
  }).catch(function(err) {

    // Handle errors
    var errorCode = err.code;
    var errorMessage = err.message;

    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
  });

};
