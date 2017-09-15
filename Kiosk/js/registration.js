/*
* File Name: registration.js
* Author(s): James Guidry, Matt Rice
* Date: 1 September 2017
* Description: Has the source functions used during the registration process
*/


/********** variables used throughout entire file **********/

    // Avatar choice
var avatarText = "";
// rfid input text
var rfidText = window.localStorage.getItem('userID');


// Get a reference to the database service
var database = firebase.database();

//console logs
console.log(rfidText);

/*
* Function Name: checkEmail
* Description: Uses a regular expression to vheck that an email entered is of
*   valid format
*/

function checkEmail() {
  var emailText = document.getElementsByClassName("emailInput")[0].value;
  var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  var result = reg.test(emailText);
  return result;
}

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

}

/********** upon pressing "submit" form gets saved and database gets updated **********/
function update() {

    //Get values from the text boxes. value of rfidText is already saved
    var languageText = document.getElementById("languageInput").value;
    var nameText = document.getElementsByClassName("nameInput")[0].value;
    console.log(nameText);
    var ageGroupText = document.getElementById("ageGroupInput").value;
    //var pathwayText = document.getElementById(pathwayChoice).value;
    var emailText = document.getElementsByClassName("emailInput")[0].value;
    var pathwayChar = pathwayChoice.slice( 0,1 );

    //TODO TODO TODO parse these inputs for malicious stuff TODO TODO TODO

    //Update number of pathway registrations
    //var pathwayChar = pathwayText.slice( 0,1 );
    setPathwayReg( database, pathwayChar );

    // Write user object to Firebase under the key rfidText
    writeToFirebase(rfidText, languageText, avatarText, nameText,
        ageGroupText, pathwayChoice, emailText );


  // window.location.replace = "registrationThanks.html";

    // For debugging: Set the paragraph element with the id "testTextDisplay" to contain the text that was inputted
    //document.getElementById("testTextDisplay").innerHTML = "RFID: " + rfidText + ", Name: " + nameText + ", Age group: " + ageGroupText;
}

function redirect(){
    //alert( "redirecting!" );
    console.log( "going" );

    window.location.replace("./registrationThanks.html");
}



window.addEventListener("keydown", function(e) {
  // space and arrow keys
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    console.log("PUSH")
      e.preventDefault();
  }
}, false);

$(document).ready(()=>{
  var id;
  var selected;

$(".error-box").hide();
  $("#Engineer").click(()=>{
    id="Engineer";
    pathwayChoice = id;

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
        $(this).removeClass('selected');
      }


    });

  });

  $("#Biologist").click(()=>{
    id="Biologist";
    pathwayChoice = id;

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
        $(this).removeClass('selected');
      }


    });

  });

  $("#Climatologist").click(()=>{
    id="Climatologist";
    pathwayChoice = id;

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
        $(this).removeClass('selected');
      }


    });

  });

  /*
  Display Error Modals if input is not supplied
  */
  $("#first-button").click(()=>{
    if($(".nameInput").val()==""){
        $("#error-1").show();
      setTimeout(()=>{
        $("#error-1").hide();
      }, 1200);
    } else if(!checkEmail()){
        $("#error-2").show();
      setTimeout(()=>{
        $("#error-2").hide();
      }, 1200);
      } else {
      window.location.href="#firstPage/1";
    }
  });
  $("#second-button").click(()=>{
    if(!selected){

      $("#error-3").show();

      setTimeout(()=>{
        $("#error-3").hide();
        //$("#second-button").removeClass("selected");
      }, 1200);

    } else {
      window.location.href="#firstPage/2";
    }
  });


});
