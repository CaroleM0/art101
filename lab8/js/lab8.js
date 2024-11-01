// Author: Kaiqing Mo
// Date:10/31/2024

function isEven(x){
    return (x % 2 == 0);
}

// test function
console.log("Is 1 even?", isEven(1));
console.log("Is 2 even?", isEven(2));

array = [100, 81, 4, 16, 42, 144, 10000]
console.log("My array", array);

var result = array.map(isEven);
// should return [ture, false, ture, true, ture, ture]
console.log("Test of evenness of array:", result);

var result = array.map(function(x){
    return x ** 0.5;
})
// should return [10, 9, 2, 4, 6.48074069840786, 12, 100]
console.log("Squareroot of array:", result);

// Your map results data
var mapResults = 10, 9, 2, 4, 6.48074069840786, 12, 100;

// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);