/*
* File Name: refocusInput.js
* Author(s): James Guidry
* Date: 8 August 2017
* Description: Contains the refoucsInput() function for the index.html page
*/

/*
* Function Name: refocusInput
* Description: refocuses the page back to the text entry field for the index.html
* page. Implemented so that if a user touches the Default screen (index.html)
* the terminal doesnt break because the RFID reader will no longer have a place
* to read into
*/

function refocusInput(){
  document.getElementById("RFID_ID").value = '';
  document.getElementById("RFID_ID").focus();
}
