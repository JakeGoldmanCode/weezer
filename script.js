function hiddenButton() {
    document.getElementById("back").style.display = "none";
}

window.onload = hiddenButton;

function stupidButton() {
    alert("weezing time lol");
    window.open("https://www.youtube.com/watch?v=cQzMHhRCTYw");
}
function notSoStupidButtonHidden() {
    alert("wow you found the special button!!!");
    document.getElementById("text").style.display = "none";
    document.getElementById("description").style.display = "none";
    document.getElementById("images").style.display = "none";
    document.getElementById("buttons").style.diplay = "none";
    document.getElementById("back").style.display = "block";
}