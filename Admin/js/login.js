/*
* File Name: login.js
* Author(s): Matt Rice
* Description: Handles login functionality for the admin portal.
* Date: 30 August 2017
*/

function handleLogin(){
  var email = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //TODO Check Blank Email/Password
console.log("YAY")
firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
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
 // .then((err)=>{
 //   window.location.href = "exhibitPage.html";
 // });
