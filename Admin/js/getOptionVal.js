/*Author: Bryle Castro 9/10/2017
*
* Filename: getOptionVal.js
* Description: Handles the functionality for obtaining
* the option and text of a selection option when choosing
* which terminal should media be sent to.
*/


/*
* Function Name: getOptVal
* Parameters: sel - the select tag id
* Description: Gets the value of the selected option.
*
*/
function getOptVal(sel) {
  for (var i = 0, len = sel.options.length; i < len; i++) {
    var opt = sel.options[i];
    if (opt.selected === true) {
      return opt.value;
    }

  }
}

/*
* Function Name: getOptText()
* Parameters: sel - the select tag id
* Description: Gets the text of the selected option
*
*/
function getOptText(sel) {
  for (var i = 0, len = sel.options.length; i < len; i++) {
    var opt = sel.options[i];
    if (opt.selected === true) {
      return opt.text;
    }

  }
}
