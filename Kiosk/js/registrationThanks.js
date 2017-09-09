//TODO:
// After a timeout of x seconds,
// Redirect user to registration splash screen
Pause();
function Pause() {
    window.setTimeout(Reset,6000);
}

function Reset() {
    console.log("resetting!");
    window.location.href = "../html/registrationSplash.html";
}
