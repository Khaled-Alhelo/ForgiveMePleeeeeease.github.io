let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let finalMessage = document.getElementById("finalMessage");
let popupImage = document.getElementById("popupImage");
let noClickCount = 0;

function growYes() {
    noClickCount++;
    noButton.textContent = "?".repeat(noClickCount) + " No";
    yesButton.style.fontSize = (parseFloat(window.getComputedStyle(yesButton).fontSize) + 10) + "px";
    yesButton.style.padding = (parseFloat(window.getComputedStyle(yesButton).padding) + 5) + "px";

    if (noClickCount >= 15) {
        noButton.style.display = "none";
    }
}

function showMessage() {
    finalMessage.style.display = "block";
    document.querySelector(".buttons").style.display = "none";
    popupImage.style.display = "block"; // Show the image
}
