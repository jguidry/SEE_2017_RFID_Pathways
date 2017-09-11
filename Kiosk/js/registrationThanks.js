Pause();
function Pause() {
    window.setTimeout(Reset,6000);
}

function Reset() {
    console.log("resetting!");
    window.location.href = "../html/registrationSplash.html";
}
