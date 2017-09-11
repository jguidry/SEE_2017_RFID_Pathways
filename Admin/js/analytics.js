/*
* File Name: analytics.js
* Author(s): Matthew Rice
* Date: 1 September 2017
* Description: This file will pull the analytics data from the database and display
based on the selected input. For example, if the user selects "albedo" (albedo exhibit)
they will be shown the number of users interacting with it, and the average rating.
*/
var database = firebase.database();

/* Maps displayed text(terminals/pathways) to its database equivalent */
var terminalMap = {
  'Albedo': "T_1",
  'Sally Ride': "T_2"
}

var pathwayMap = {
  'Biologist': "PathwayB",
  'Engineer': "PathwayE",
  'Climatologist': "PathwayC"
}

/* Toggles the dropdown box on click */
function drop1() {
  $(".analytics-link1").toggle();
  $(".analytics-link2").hide();
}

function drop2() {
  $(".analytics-link2").toggle();
  $(".analytics-link1").hide();
}

$(document).ready(() => {
  $(".analytics-link1").hide();
  $(".analytics-link2").hide();

  /* On load grabs total registrations */
  var grandTotalUsersRef = database.ref('User_Data/Total_Registrations');

  grandTotalUsersRef.once('value', function(snapshot) {
    document.getElementById("grand-total").innerHTML = snapshot.val();
  });

  /* Grabs Interaction and Rating info from database on terminal selection */
  $(".analytics-link1").click((e) => {
    var id = e.target.id;
    var texts = document.getElementById(id).innerHTML;
    var terminal = terminalMap[texts];
    var usersRef = database.ref('Terminals/' + terminal + '/Interaction/Total_Uses');
    usersRef.on('value', function(snapshot) {
      document.getElementById("uses").innerHTML = "Total Uses: " + snapshot.val();
    });
    var timeRef = database.ref('Terminals/' + terminal + '/Interaction/Avg_Time');
    timeRef.on('value', function(snapshot) {
      var time = snapshot.val();
      var roundedTime = Number(Math.round(time / 60 + 'e' + 2) + 'e-' + 2);
      document.getElementById("time").innerHTML = "Average Time: " + roundedTime + " minutes";
    });
    var ratingRef = database.ref('Terminals/' + terminal + '/Rating_Sys/rating');
    ratingRef.on('value', function(snapshot) {
      var rating = snapshot.val();
      var roundedRating = Number(Math.round(rating + 'e' + 2) + 'e-' + 2);
      document.getElementById("rating").innerHTML = "Average Rating: " + roundedRating + "/5 stars";
    });
    var ratersRef = database.ref('Terminals/' + terminal + '/Rating_Sys/raters');
    ratersRef.on('value', function(snapshot) {
      document.getElementById("raters").innerHTML = "Raters: " + snapshot.val();
    });

    $("#dropbtn1").text(texts); //Changes the dropdown button to display the selection

    /* Animations of content */
    $('.analytics-link1').hide();
    $("#info1").hide();
    $("#info2").hide();
    $("#info1").slideDown();
    $("#info2").slideDown();

  });

  /* Grabs Registrations and Uses info from database on pathway selection */
  $(".analytics-link2").click((e) => {
    var id = e.target.id;
    var texts = document.getElementById(id).innerHTML
    var pathway = pathwayMap[texts];
    var registrationsRef = database.ref('User_Data/' + pathway + '/Registers');
    registrationsRef.on('value', function(snapshot) {
      document.getElementById("registrations").innerHTML = snapshot.val();
    });
    var usersRef = database.ref('User_Data/' + pathway + '/Uses');
    usersRef.on('value', function(snapshot) {
      document.getElementById("total-uses").innerHTML = snapshot.val();
    });

    $("#dropbtn2").text(texts); //Changes the dropdown button to display the selection

    /* Animations of content */
    $('.analytics-link2').hide();
    $("#info3").hide();
    $("#info4").hide();
    $("#info3").slideDown();
    $("#info4").slideDown();

  });
});
