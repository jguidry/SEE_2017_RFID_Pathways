/*
* File Name: closebox.js
* Author(s):
* Date:
* Description:
*/

window.onload = function(){
    document.getElementById('close').onclick = function(){
        this.parentNode.parentNode.parentNode
        .removeChild(this.parentNode.parentNode);
        return false;
    };
};
