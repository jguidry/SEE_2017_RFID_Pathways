/*
* Filename: sallyride-pathwayC.js
* Author(s): Matthew Rice, Bryle Castro
* Description: This file contains the source javascript that handles the population
* of content on the sallyride exhibit terminal.
* Date: 31 August 2017
*/

 //Used to check the image file extensions.
var extension = ['png','jpeg','jpg','bmp','PNG','JPEG','JPG','BMP'];

//Used to check and compare of the video file extensions that should be pulled
var videoExtension = ['mp4','gif','mov','avi','amv','wmv','MP4','MOV','AVI','AMV','WMV','GIF'];

//The different image names that we will look for in firebase database.
var firebaseKeys = [
     "sallyride-climatologist-right",
     "sallyride-climatologist-left",
     "sallyride-climatologist-top",
     "sallyride-climatologist-bottom",
     "sallyride-climatologist-middle"
];

//The different image names that we will look for in firebase storage.
var names={
    background: "sallyride-climatologist-background.png"
};



/*
* Function Name: getMiddle
* This function handles populating the background image
* of the center page of the page. The content is pulled from firebase storage.
*/
function getMiddle(){

    var theKey = firebaseKeys[4];
    var ref = firebase.database().ref("Terminals/T_2/Content");
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
        var folderRef = firebase.storage().ref().child( "T_2/" );
        var contentRef = folderRef.child(key);

        //Dynamically set the content
        contentRef.getDownloadURL().then(function( url ){
            document.getElementById(name).src = url;
        })

    });

}


/*
* Function Name: getRight
* This function handles populating the background image
* of the right most page.  The content is pulled from firebase storage.
*/
function getRight(){
    var theKey = firebaseKeys[0];
    var ref = firebase.database().ref("Terminals/T_2/Content");
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
        var folderRef = firebase.storage().ref().child( "T_2/" );
        var contentRef = folderRef.child(key);

        //Dynamically set the content
        contentRef.getDownloadURL().then(function( url ){
            document.getElementById(name).src = url;
        })

    });
}

/*
* Function Name: getLeft
* This function handles populating the background image
* of the left most page.  The content is pulled from firebase storage.
*/
function getLeft(){
    var theKey = firebaseKeys[1];
    var ref = firebase.database().ref("Terminals/T_2/Content");
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
        var folderRef = firebase.storage().ref().child( "T_2/" );
        var contentRef = folderRef.child(key);

        //Dynamically set the content
        contentRef.getDownloadURL().then(function( url ){
            document.getElementById(name).src = url;
        })

    });
}


/*
* Function Name: getBottom
* This function handles populating the background image
* of the bottom most page.  The content is pulled from firebase storage.
*/
function getBottom(){
    var theKey = firebaseKeys[3];
    var ref = firebase.database().ref("Terminals/T_2/Content");
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
        var folderRef = firebase.storage().ref().child( "T_2/" );
        var contentRef = folderRef.child(key);

        //Dynamically set the content
        contentRef.getDownloadURL().then(function( url ){
            document.getElementById(name).src = url;
        })
    });
}

/*
* Function Name: getTop
* This function handles populating the background image
* of the top most page. The content is pulled from firebase storage.
*/
function getTop(){
    var theKey = firebaseKeys[2];

    var ref = firebase.database().ref("Terminals/T_2/Content");
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
        var folderRef = firebase.storage().ref().child( "T_2/" );
        var contentRef = folderRef.child(key);

        //Dynamically set the content
        contentRef.getDownloadURL().then(function( url ){
            document.getElementById(name).src = url;
        })

    })

}


/*
* Function Name: getVideoTop
* This function handles populating the top most page with
* a video that is pulled from firebase storage.
*/
function getVideoTop(){
    var videoTop = {};
    var theKey = firebaseKeys[2];
    var ref = firebase.database().ref("Terminals/T_2/Content/Video");
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
        var folderRef = firebase.storage().ref().child( "T_2/" );
        var contentRef = folderRef.child(key);

        //Dynamically set the content
        contentRef.getDownloadURL().then(function( url ){
            document.getElementById("videoTop").src = url;
        })

    })

}

function getName() {
  var id = localStorage.getItem("user_id");
  var ref = firebase.database().ref(`RFID/${id}`);
  ref.once("value").then(function(snapshot) {
    var name = snapshot.child("name").val();
    name = (name === "") ? "No Name" : name;
    document.getElementById("user_name").innerHTML =  `Hi ${name}!`;

  });

}

/*
* Function Name: populateContent
* This function calls all other functions that handle the
* population of content.
*/
function populateContent(){
     getTop();
     getMiddle();
     getRight();
     getBottom();
     getLeft();
     getVideoTop();
     getName();

    /*
    var name = "background";
    var key=names[name];
        var folderRef = firebase.storage().ref().child( "T_2/" );
        var contentRef = folderRef.child("sallyride-climatologist-background.png");

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
