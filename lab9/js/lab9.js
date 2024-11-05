/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Kaiqing Mo
   Date: 11/04/2024
*/

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problem").append("<button id='button-problem'>Make Special</button>");
$("#result").append("<button id='button-result'>Make Special</button>");

// add a click listener to the challenge button
$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

// add a click listener to the problem button
$("button-problem").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problem").toggleClass("special");
});

// add a click listener to the result button
$("button-result").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#result").toggleClass("special");
});