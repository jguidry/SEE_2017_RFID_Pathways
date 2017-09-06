/*Author: Bryle Castro*/
//
// /*
// * Function Name: getUsername
// * Description: Gets the admin username from firebase
// *
// */
// function getUsername(){
//     firebase.database().ref('/ADMIN/username' ).once('value').then(function (snapshot) {
//
//         var username = snapshot.val();
//         return username;
//
//     });
// }
//
// /*
// * Function Name: getPassword
// * Description: Gets the admin password from firebase
// *
// */
// function getPassword(){
//     firebase.database().ref('/ADMIN/password' ).once('value').then(function (snapshot) {
//
//         var password = snapshot.val();
//         return password;
//
//     });
// }
$(document).ready(()=>{
  console.log("hiii")
  var signOut = false;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("HII")
    } else {
      // No user is signed in.
      alert("You are not signed in");
      window.location.href = "index.html"
    }
  });

});
