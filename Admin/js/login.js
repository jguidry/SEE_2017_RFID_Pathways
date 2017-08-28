
function handleLogin(){
  var email = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //TODO Check Blank Email/Password
console.log("YAY")
  firebase.auth().signInWithEmailAndPassword(email, password)
 .catch(function(err) {

   // Handle errors
   var errorCode = err.code;
   var errorMessage = err.message;
   if (errorCode === 'auth/wrong-password') {
   alert('Wrong password.');
 } else {
   alert(errorMessage);
 }
 console.log(error);
 }).then((err)=>{
   window.location.href = "exhibitPage.html";
 });

}
