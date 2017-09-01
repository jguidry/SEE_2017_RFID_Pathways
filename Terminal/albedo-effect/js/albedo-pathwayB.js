 var extension = ['png','jpeg','jpg','bmp','PNG','JPEG','JPG','BMP']; 
var videoExtension = ['mp4','gif','mov','avi','amv','wmv','MP4','MOV','AVI','AMV','WMV','GIF'];
 var firebaseKeys = [
     "albedo-biologist-right",
     "albedo-biologist-left",
     "albedo-biologist-top",
     "albedo-biologist-bottom",
     "albedo-biologist-middle"
];
    
var names={
    background: "albedo-biologist-background.png"
};

function getMiddle(){
    
    var theKey = firebaseKeys[4];
    var ref = firebase.database().ref("Terminals/T_1/Content");
    ref.once("value").then(function(snapshot) {
        var ext = snapshot.child(theKey).val();
        var bool = extension.indexOf(ext);
        if(bool != -1){
            if(theKey.search("middle") != -1){
                var str = theKey.concat(".")
                str = str.concat(ext);
                names.middle = str;
            }
        }
    }).then((error) =>{
        var name = "middle";
        var key = names[name];
        var folderRef = firebase.storage().ref().child( "T_1/" );
        var contentRef = folderRef.child(key);
        
        //Dynamically set the content
        contentRef.getDownloadURL().then(function( url ){
            document.getElementById(name).src = url;
        })
                
    });
    
}

function getRight(){
    var theKey = firebaseKeys[0];
    var ref = firebase.database().ref("Terminals/T_1/Content");
    ref.once("value").then(function(snapshot) {
        var ext = snapshot.child(theKey).val();
        var bool = extension.indexOf(ext);
        if(bool != -1){
            if(theKey.search("right") != -1){
                var str = theKey.concat(".")
                str = str.concat(ext);
                names.right = str;
            }
        }
    }).then((error) =>{
        var name = "right";
        var key = names[name];
        var folderRef = firebase.storage().ref().child( "T_1/" );
        var contentRef = folderRef.child(key);
        
        //Dynamically set the content
        contentRef.getDownloadURL().then(function( url ){
            document.getElementById(name).src = url;
        })
                
    });
}

function getLeft(){
    var theKey = firebaseKeys[1];
    var ref = firebase.database().ref("Terminals/T_1/Content");
    ref.once("value").then(function(snapshot) {
        var ext = snapshot.child(theKey).val();
        var bool = extension.indexOf(ext);
        if(bool != -1){
            if(theKey.search("left") != -1){
                var str = theKey.concat(".")
                str = str.concat(ext);
                names.left = str;
            }
        }
    }).then((error) =>{
        var name = "left";
        var key = names[name];
        var folderRef = firebase.storage().ref().child( "T_1/" );
        var contentRef = folderRef.child(key);
        
        //Dynamically set the content
        contentRef.getDownloadURL().then(function( url ){
            document.getElementById(name).src = url;
        })
                
    });
}

function getBottom(){
    var theKey = firebaseKeys[3];
    var ref = firebase.database().ref("Terminals/T_1/Content");
    ref.once("value").then(function(snapshot) {
        var ext = snapshot.child(theKey).val();
        var bool = extension.indexOf(ext);
        if(bool != -1){
            if(theKey.search("bottom") != -1){
                var str = theKey.concat(".")
                str = str.concat(ext);
                names.bottom = str;

            }
        }
    }).then((error) =>{
        var name = "bottom";
        var key = names[name];
        var folderRef = firebase.storage().ref().child( "T_1/" );
        var contentRef = folderRef.child(key);
        
        //Dynamically set the content
        contentRef.getDownloadURL().then(function( url ){
            document.getElementById(name).src = url;
        })         
    });
}

function getTop(){
    var theKey = firebaseKeys[2];
   
    var ref = firebase.database().ref("Terminals/T_1/Content");
    ref.once("value").then(function(snapshot) {
        var ext = snapshot.child(theKey).val();
         console.log("awegfawge");
        console.log(ext);
        var bool = extension.indexOf(ext);
        if(bool != -1){
            if(theKey.search("top") != -1){
                console.log(theKey)
                var str = theKey.concat(".")
                str = str.concat(ext);
                names.top = str;
            }
        }
    }).then((error) =>{
        var name = "top";
        var key = names[name];
        var folderRef = firebase.storage().ref().child( "T_1/" );
        var contentRef = folderRef.child(key);
        
        //Dynamically set the content
        contentRef.getDownloadURL().then(function( url ){
            document.getElementById(name).src = url;
        })
                
    })
    
}


function getVideoTop(){
    var videoTop = {};
    var theKey = firebaseKeys[2];
    var ref = firebase.database().ref("Terminals/T_1/Content/Video");
    ref.once("value").then(function(snapshot) {
        var ext = snapshot.child(theKey).val();
        console.log("extension is:" + ext);
        var bool = videoExtension.indexOf(ext);
        if(bool != -1){
            if(theKey.search("top") != -1){
                console.log(theKey)
                var str = theKey.concat(".")
                str = str.concat(ext);
                videoTop.top = str;
                console.log("stf is:" + str);
            }
        }
    }).then((error) =>{
        var name = "top";
        var key = videoTop[name];
        console.log(key);
        var folderRef = firebase.storage().ref().child( "T_1/" );
        var contentRef = folderRef.child(key);
        
        //Dynamically set the content
        contentRef.getDownloadURL().then(function( url ){
            document.getElementById("videoTop").src = url;
        })
                
    })

}

function populateContent(){    
     getTop();
     getMiddle();
     getRight();
     getBottom();
     getLeft();
     getVideoTop();
   
    /*
    var name = "background";
    var key=names[name];
        var folderRef = firebase.storage().ref().child( "T_1/" );
        var contentRef = folderRef.child("albedo-biologist-background.png");

        contentRef.getDownloadURL().then(function( url ){
        document.getElementById(name).src = url;

          }).catch( function( error ){
            //Hanlde errors TODO
            console.log( "Content download error..." + JSON.stringify( error ) );
          });
<<<<<<< HEAD
    });*/


    $(document).ready(function(){
      $(document.body).on("touchstart", ()=>{
        $("#swipe-box").hide();

      })

    });



}
