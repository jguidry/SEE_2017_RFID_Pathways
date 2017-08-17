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