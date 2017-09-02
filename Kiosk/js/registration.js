/* Authors: Proud, Joyce, Bryon, Brianna */


/********** variables used throughout entire file **********/

    // Avatar choice
var avatarText = "";

//Pathway choice
var pathwayChoice = ""
var selected = false;

// rfid input text
var rfidText = window.localStorage.getItem('userID');


/********** application configuration **********/
var config = {
    apiKey: "AIzaSyAJi4sI7b5M9IkhEfLvn9OJ7TbRkNv-RE8",
    authDomain: "birchaquarium-fd036.firebaseapp.com",
    databaseURL: "https://birchaquarium-fd036.firebaseio.com/",
    storageBucket: "birchaquarium-fd036.appspot.com"
};
//initialize application
firebase.initializeApp(config);
// Get a reference to the database service
var database = firebase.database();


//console logs
console.log(rfidText);

/********** avatar field **********/
function setAvatar(avatarName) {
    avatarText = avatarName;
    console.log(avatarText);

    showBorder( avatarName );

}

/* Write an object to the Firebase database under the database RFID tree
 * with the key idInput and the values idInput, nameInput, and ageGroupInput.
 * Example: writeToFirebase(42, 'Dale', 'Elementary school')
 * will store under key 42 an object containing id 42, name 'Dale', and
 * ageGroup 'Elementary school'
 * This object is then stored at https://birchaquarium-fd036.firebaseio.com/42
 */
/********** create user object and put in database **********/
function writeToFirebase(rfidInput, languageInput, avatarInput, nameInput, ageGroupInput, pathwayInput, emailInput) {

    // Write the object under the database root "users"
    // Database schema: RFID tree-->user object that contains links id with name and age group
    //database.ref("RFID/" + idInput).set({
    //bri's changes
    database.ref("RFID/" + rfidText).set({
        id: rfidInput,
        language: languageInput,
        avatar: avatarInput,
        name: nameInput,
        ageGroup: ageGroupInput,
        pathway: pathwayInput,
        email: emailInput,
    });

    //Update number of registered users
    updateData( database );
}

/********** upon pressing "submit" form gets saved and database gets updated **********/
function update() {

    //var valid = false;

    //Get values from the text boxes. value of rfidText is already saved
    var languageText = document.getElementById("languageInput").value;
    var nameText = document.getElementById("nameInput").value;
    var ageGroupText = document.getElementById("ageGroupInput").value;
    var pathwayText = pathwayChoice;
    var emailText = document.getElementById("emailInput").value;


    //TODO TODO TODO parse these inputs for malicious stuff TODO TODO TODO

    //Email verification
    /*try{
      //Email RegExp
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      alert( mailformat );

      if( !( emailText.value.match(mailformat)) ) {
        alert("You have entered an invalid email address!");
        valid = false;
      }
      else{
        console.log( "valid email" );
        valid = true;
      }
    }catch( err ){

      alert( "Error..." + err );
      valid = false;

    } //End catch block*/


    //if( valid ){
      // Write user object to Firebase under the key rfidText
      writeToFirebase(rfidText, languageText, avatarText, nameText,
        ageGroupText, pathwayText, emailText );
    //}
    // For debugging: Set the paragraph element with the id "testTextDisplay" to contain the text that was inputted
    //document.getElementById("testTextDisplay").innerHTML = "RFID: " + rfidText + ", Name: " + nameText + ", Age group: " + ageGroupText;
}

function redirect(){
    alert( "redirecting!" );
    window.location.href = "../html/registrationSplash.html"
}
window.addEventListener("keydown", function(e) {
  // space and arrow keys
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    console.log("PUSH")
      e.preventDefault();
  }
}, false);
$(document).ready(()=>{
$(".error-box").hide();
  $(".pathway-box").click((e)=>{
    var id = e.target.id;
    pathwayChoice = id;
    // console.log(this);
    // if ($("#Engineer").css("background-color", "#9C9C9C")){
    //
    // }
    // if ( $('#myElem').hasClass('blue') ) {
      //it has the .blue class!
      $('.pathway-box').each(function(i){
        if (this.id == id ) {
            if($(this).hasClass('selected')){
              $(this).removeClass('selected');
              selected = false;
            } else {
              $(this).addClass('selected');
              selected = true;
            }


        }
        else if ($(this).hasClass('selected')) {
          $(this).removeClass('selected')
        }


      });

    // $("#"+id).addClass('selected')

    // window.location.href = "#firstPage/2";
  });
  $("#first-button").click(()=>{
    if($("#nameInput").val()==""){
      console.log("hey");
            $("#error-1").show()
      setTimeout(()=>{
        $("#error-1").hide()
      }, 1200)


    }
    else window.location.href="#firstPage/1"
  });
  $("#second-button").click(()=>{
    if(!selected){

        $("#error-2").show()
      setTimeout(()=>{
        $("#error-2").hide()
      }, 1200)


    }
    else window.location.href="#firstPage/2"
  });


});
