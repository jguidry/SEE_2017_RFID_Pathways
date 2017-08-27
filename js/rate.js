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

    //thankyou popup
/*
    var TIME_LENGTH = 3000; //Time before automatic close (3 seconds)
    //Get the popup
    var popup = document.getElementById( 'thankPop' );

    //Make popup visable
    popup.style.display = "block";
    //Automatically close
    setTimeout( function(){
      popup.style.display = "none";



      //Hide ratings

    }, TIME_LENGTH ); */

    document.getElementById( 'Thankyou.p' ).style.display = "block";

    setTimeout( function(){
      $("#mainSlideBox").slideToggle();
    }, 250 );
}

/*
* Function Name: rateMe()
* Description:
*/
function rateMe(){

  document.getElementById('mainSlideBox').stlye = "display: inline-block";
  $("#mainSlideBox").slideToggle();
  return false;

}
