var idleTime = 0;
function idleReset() {

    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 6000); // 1 minute

    //Zero the idle timer on mouse movement.
    mousemove(function (e) {
        idleTime = 0;
    });
    keypress(function (e) {
        idleTime = 0;
    });
}

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > .6 ) { //6 seconds
        window.location.replace( 'index.html');
    }
}
