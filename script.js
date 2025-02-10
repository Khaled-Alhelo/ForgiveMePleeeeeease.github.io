let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let finalMessage = document.getElementById("finalMessage");

function growYes() {
    yesButton.style.fontSize = (parseFloat(window.getComputedStyle(yesButton).fontSize) + 10) + "px";
    yesButton.style.padding = (parseFloat(window.getComputedStyle(yesButton).padding) + 5) + "px";
}

function showMessage() {
    finalMessage.style.display = "block";
    document.querySelector(".buttons").style.display = "none";
}
