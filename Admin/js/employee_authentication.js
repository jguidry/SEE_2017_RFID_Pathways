/*Author: Bryle Castro*/

function getUsername(){
    firebase.database().ref('/ADMIN/username' ).once('value').then(function (snapshot) {

        var username = snapshot.val();
        return username;

    });
}


function getPassword(){
    firebase.database().ref('/ADMIN/password' ).once('value').then(function (snapshot) {

        var password = snapshot.val();
        return password;

    });
}

