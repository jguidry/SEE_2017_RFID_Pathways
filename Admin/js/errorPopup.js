function invalidPopup() {

  //Get the popup
  var popup = document.getElementById('myPopup');

  //Make popup visable
  popup.style.display = "flex";

  //Close popup upon clicking outside the box
  window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  }

}
