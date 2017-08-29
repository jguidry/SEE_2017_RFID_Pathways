/*
* Function Name: invalidPopup
* Description: Displays a popup for a specified amount of time that asks
* the user to register their RFID tag.
*/

function invalidPopup(){

  //Get the popup
  var popup = document.getElementById( 'myPopup' );

  //Make popup visable
  popup.style.display = "block";
    
  window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
  }

}