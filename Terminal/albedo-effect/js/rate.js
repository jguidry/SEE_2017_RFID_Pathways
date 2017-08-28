/*
* File Name: rate.js
* Author(s): James Guidry
* Date: 22 August 2017
* Description: provides rating functionality for the terminals
*/

/*
* Function Name: rate
* Description: Calculates the new average rating of a terminal and stores it
*              back into the database.
* Parameters:
*   rating: The rating given by the user
*   terminalNum: Which terminal was rated
*/

function rate( rating, terminalNum ){

    //Get the current rating reference
    var ratingRef = firebase.database().ref().child( "Terminals/" +
      terminalNum + "/rating" );

    //Get the current number of raters reference
    var ratersRef = firebase.database().ref().child( "Terminals/" +
      terminalNum + "/raters" );

    var numRaters;  //Current number of user who have rated the terminal

    //Get the number of raters
    ratersRef.transaction( function( raters ){
      numRaters = raters + 1;
      return raters + 1;        //Store new number of raters
    });

    //Calculate and store new average rating
    ratingRef.transaction( function( oldRating ){

      var newRating;

      //Calculate
      if( numRaters < 1 ){
          newRating = (( oldRating * numRaters) + rating) / numRaters;
      }
      else{
        newRating = (( oldRating * (numRaters-1)) + rating) / numRaters;
      }

      return newRating; //Store

    });

    //Show thankyou text
    document.getElementById( 'Thankyou' ).style.display = "block";

    //Slide the rating box back down
    setTimeout( function(){
      $("#mainSlideBox").slideToggle();
    }, 300 );

    //Hide the thankyou text
    setTimeout( function(){
      document.getElementById( 'Thankyou' ).style.display = "none";
    }, 1000 );
}

/*
* Function Name: rateMe()
* Description:
*/
function rateMe(){
console.log( "rating" );
  document.getElementById('mainSlideBox').stlye = "display: inline-block";
  $("#mainSlideBox").slideToggle();
  return false;

}
