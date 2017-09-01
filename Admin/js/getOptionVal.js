/*Author: Bryle Castro*/ 

/*
* Function Name: getOptVal
* Parameters: sel - the select tag id
* Description: Gets the value of the selected option 
*       
*/
function getOptVal(sel){
     for(var i = 0, len = sel.options.length; i < len; i++){
        var opt = sel.options[i];
        if(opt.selected === true){
            console.log(opt.value);
            console.log(opt.selected);
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
function getOptText(sel){
     for(var i = 0, len = sel.options.length; i < len; i++){
        var opt = sel.options[i];
        if(opt.selected === true){
            console.log(opt.value);
            console.log(opt.selected);
            return opt.text;
        }
           
     }
 }