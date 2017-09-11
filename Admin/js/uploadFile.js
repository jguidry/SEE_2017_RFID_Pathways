/*
* File Name: uploadFile.js
* Author(s): Bryle Castro
* Description: Loads a file to firebase. Allows for 'drag and drop' functionality
*/

var obj = $("#drop-zone");
var storageRef = firebase.storage().ref(); //get reference to the storage

obj.on('dragenter', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).css('border', '2px solid #0B85A1');
});

obj.on('dragover', function (e) {
     e.stopPropagation();
     e.preventDefault();
});

obj.on('drop', function (e) {
     $(this).css('border', '2px dotted #0B85A1');
     e.preventDefault();
     var files = e.originalEvent.dataTransfer.files;

     //We need to send dropped files to firebase
     handleFileUpload(files,obj);
});

// automatically submit the form on file select
$('#drop-zone-file').on('change', function (e) {
    var files = $('#drop-zone-file')[0].files;
    handleFileUpload(files, obj);
});


/*
* Function Name: firebaseImageUpload
* Description: Puts file into firebase storage.
*
*/
function fireBaseImageUpload(parameters, callBackData) {

    // expected parameters to start storage upload
    var file = parameters.file;
    var path = parameters.path;
    var name;
    var uploader = document.getElementById("theUploader");

    //just some error check
    if (!file) { callBackData({error: 'file required to interact with Firebase storage'}); }
    if (!path) { callBackData({error: 'Node name required to interact with Firebase storage'}); }

    var metaData = {'contentType': file.type};
    var arr = file.name.split('.');
    var fileSize = formatBytes(file.size); // get clean file size (function below)
    var fileType = file.type;
    var n = file.name;

    // generate random string to identify each upload instance
    name = generateRandomString(12); //(location function below)

    //var fullPath = path + '/' + name + '.' + arr.slice(-1)[0];
    var fullPath = path + '/' + file.name;

    var uploadFile = storageRef.child(fullPath).put(file, metaData);



    // first instance identifier
    callBackData({id: name, fileSize: fileSize, fileType: fileType, fileName: n});

    uploadFile.on('state_changed', function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploader.value = progress;
        progress = Math.floor(progress);
        if(uploader.value === 100){
            document.getElementById("uploadComplete").innerHTML = "UPLOADING COMPLETE";
        }
        else if(uploader.value < 100){
             document.getElementById("uploadComplete").innerHTML = "UPLOADING ... ";
        }
        else{
              document.getElementById("uploadComplete").innerHTML = "";
        }

        callBackData({
             progress: progress,
             element: name,
             fileSize: fileSize,
             fileType: fileType,
             fileName: n});
    }, function (error) {
        callBackData({error: error});
    }, function () {
        var downloadURL = uploadFile.snapshot.downloadURL;
        callBackData({
              downloadURL: downloadURL,
              element: name,
              fileSize: fileSize,
              fileType: fileType,
              fileName: n});
    });
    document.getElementById("drop-zone-file").value = "";
}

/*
* Function Name: generateRandomString(length)
* Description: function to generate random string to use in what creating firebase storage instance
*
*/
function generateRandomString(length) {
    var chars = "abcdefghijklmnopqrstuvwxyz";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

function formatBytes(bytes, decimals) {
    if (bytes == 0) return '0 Byte';
    var k = 1000;
    var dm = decimals + 1 || 3;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}


 /*
* Function Name: handleFileUpload(length)
* Description: Handles parsing files to the correct location in firebase storage.
*              Also handles, the checking of filenames if the filenames follow
*              the correct naming scheme: "exhibit-pathway-location.extension"
*/
function handleFileUpload(files, obj) {
    for (var i = 0; i < files.length; i++) {
        var fd = new FormData();
        fd.append('file', files[i]);
        var sel = document.getElementById('exhibits');
        var optValue = getOptVal(sel);
        console.log(files[i].name);

        //Parse filename: the filname and its extension.
        var fileExt = files[i].name;
        var fileName = files[i].name;
        var newStr = optValue.substring(0, optValue.length-1);

        fileExt = fileExt.split('.').pop();
        fileName = fileName.substring(0, fileName.lastIndexOf('.'));
        console.log("Terminal is:" + newStr);
        console.log("The file extension is:" + fileExt);
        console.log("The file name is:" + fileName);

        var bool = checkFileName(fileName,fileExt);
        if(bool === -1){
            invalidPopup();
            document.getElementById("drop-zone-file").value = "";
            return;
        }

        var videoExtension = ['mp4','gif','mov','avi','amv','wmv','MP4','MOV','AVI','AMV','WMV','GIF'];
        if(videoExtension.indexOf(fileExt) != -1){
            var database = firebase.database();
          database.ref("Terminals/" + newStr + "/" + "Content/Video/"+ fileName).set(fileExt).catch((err)=>{
            alert("Permission Denied");
            window.location.href = "index.html"
                });
        }
        else{
            var database = firebase.database();
          database.ref("Terminals/" + newStr + "/" + "Content/"+ fileName).set(fileExt).catch((err)=>{
            alert("Permission Denied");
            window.location.href = "index.html"
                });

        }

        console.log(files[i]);
        fireBaseImageUpload({
            'file': files[i],
            'path': optValue //path_to_where_you_to_store_the_file
        }, function (data) {
            //console.log(data);
            if (!data.error) {
                if (data.progress) {
                    // progress update to view here
                }
                if (data.downloadURL) {
                    // update done
                    // download URL here "data.downloadURL"
                }
            } else {
                console.log(data.error + ' Firebase image upload error');
            }
        });
    }
};
