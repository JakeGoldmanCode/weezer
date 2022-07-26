function hideDumbthing() {
    document.getElementById("backButton").style.display = "none";
}

function showDumbthing() {
    document.getElementById("backButton").style.display = "block";
}

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
    showDumbthing();
}

function dumbthingDoesSomething() {
    document.getElementById("text").style.display = "block";
    document.getElementById("description").style.display = "block";
    document.getElementById("images").style.display = "block";
    document.getElementById("buttons").style.diplay = "block";
    hideDumbthing();
}