//Used to check the image file extensions.
var extension = ['png','jpeg','jpg','bmp','PNG','JPEG','JPG','BMP'];

//Used to check and compare of the video file extensions that should be pulled
var videoExtension = ['mp4','gif','mov','avi','amv','wmv','MP4','MOV','AVI','AMV','WMV','GIF'];

var defaultName={
};

function populateContent(){
    
    var theKey = "albedo-default-middle";
    var ref = firebase.database().ref("Terminals/T_1/Content");
    ref.once("value").then(function(snapshot) {
        var ext = snapshot.child(theKey).val();
        var bool = extension.indexOf(ext);
        if(bool != -1){
            if(theKey.search("middle") != -1){
                var str = theKey.concat(".")
                str = str.concat(ext);
                console.log("default extension is:"+str);
                defaultName.pic = str;
            }
        }
    }).then((error) =>{
        var name = "pic";
        var key = defaultName[name];
        var folderRef = firebase.storage().ref().child( "T_1/" );
        var contentRef = folderRef.child(key);

        //Dynamically set the content
        contentRef.getDownloadURL().then(function( url ){
            document.getElementById(name).src = url;
        })

    });


}




//TODO are we using this file? if not delete
