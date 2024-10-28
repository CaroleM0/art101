// Author: Kaiqing Mo
// Date:10/28/2024

function sortUserName() {
    // Prompt the user to enter their name
    let userName = window.prompt("Please enter your name:");
  
    // Check if user input is not empty or null
    if (userName) {
      // Convert the string into an array, sort it, and then join it back into a string
      let sortedName = userName.split('').sort().join('');
      return sortedName;
    } else {
      return "No name entered.";
    }
  }
  
  // Call the function and output the result using document.writeln()
  document.writeln("Your sorted name is: " + sortUserName());
  