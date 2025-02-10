let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let finalMessage = document.getElementById("finalMessage");
let noClickCount = 0;

function growYes() {
    noClickCount++;

    // Add a "?" in front of "No" each time it's clicked
    noButton.textContent = "?".repeat(noClickCount) + " No";

    // Increase the size of the "Yes" button
    yesButton.style.fontSize = (parseFloat(window.getComputedStyle(yesButton).fontSize) + 10) + "px";
    yesButton.style.padding = (parseFloat(window.getComputedStyle(yesButton).padding) + 5) + "px";

    // Make the "No" button disappear after 15 clicks
    if (noClickCount >= 15) {
        noButton.style.display = "none";
    }
}

function showMessage() {
    finalMessage.style.display = "block";
    document.querySelector(".buttons").style.display = "none";
}
