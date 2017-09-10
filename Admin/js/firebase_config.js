/*
* File Name: firebase_config.js
* Author(s): Matt Rice
* Description: Contains the firebase config key and initializes the db
* Date: 30 August 2017
*/

/*
* Description: Allows access to firebase database and firebase storage      
*/
var config = {
  apiKey: "AIzaSyAJi4sI7b5M9IkhEfLvn9OJ7TbRkNv-RE8",
  authDomain: "birchaquarium-fd036.firebaseapp.com",
  databaseURL: "https://birchaquarium-fd036.firebaseio.com",
  projectId: "birchaquarium-fd036",
  storageBucket: "birchaquarium-fd036.appspot.com",
  messagingSenderId: "33111057118"
};
firebase.initializeApp(config);

// var email = "matthewrice11@yahoo.com";
// var password = "matnap11"
//
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//
// console.log(errorMessage);
//   // ...
// });
