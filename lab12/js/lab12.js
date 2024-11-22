/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Kaiqing Mo
   Date: 11/14/2024
*/

function sortingHat(str) {
    // Count the number of letters in the input string
    let length = str.length;

    // Calculate the remainder when divided by 4
    let mod = length % 4;

    // Determine the house based on the mod value
    if (mod === 0) {
        return "Gryffindor";
    } else if (mod === 1) {
        return "Hufflepuff";
    } else if (mod === 2) {
        return "Ravenclaw";
    } else {
        return "Slytherin";
    }
}

// Add an event listener for the button
document.getElementById("button").addEventListener("click", function () {
    // Get the value of the input field
    let name = document.getElementById("input").value;

    // Run the sortingHat function and store the result
    let house = sortingHat(name);

    // Create a new styled paragraph with the result
    let output = document.getElementById("output");
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "The Sorting Hat has sorted you into " + house + "!";
    newParagraph.style.color = "blue"; // Optional: Style the paragraph
    newParagraph.style.fontWeight = "bold";

    // Append the new paragraph to the output div
    output.innerHTML = ""; // Clear previous output
    output.appendChild(newParagraph);
});
