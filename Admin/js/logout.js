function handleLogout(){

  //TODO Check Blank Email/Password
console.log("YAY")
firebase.auth().signOut().then(function() {
// Sign-out successful.
 window.location.href = "index.html";
}).catch(function(error) {
// An error happened.
});

}
