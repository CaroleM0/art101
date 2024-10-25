// index.js - purpose and description here
// Author: Kaiqing Mo
// Date:10/24/2024

// Define variables  
MYtRANSPORT = ["Toyota Corolla", "bike", "ride fromends", "Bus"];

// Create an object for my main ride
myMainRide = {
  make: "Toyota",
  model: "Corolla",
  color: "rusty",
  year: 2011,
  age: function () {
      return 2024 - this.year;
  }
}

// output
document.writeln("kinds of transportion I use: ", myTransport, "</br>");
// this little trick allow us to write an obect to the document
document.writeln("My Main RIde: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");