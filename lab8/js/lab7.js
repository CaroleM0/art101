// Author: Kaiqing Mo
// Date:10/28/2024

// sortUserName - a function that takes user inut and sort the letters
// of their name
function sortUserName() {
    var userName = window.prompt("Hi. Can I have your name?");
    console.log("userName =", userName);

    // split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);

    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameAarraysort =", nameArraySort);

    // join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    // Note that I chould have done the above lines as a single line:
    //   userName.toLower().split("").sort().join("")
    return nameSorted;
}


// ouput
document.writeln("Oh hey, your sortnname:",
        sortUserName(),"</br");