/*
 *Author: Kaiqing Mo
 *Date: 11/25/2024
 */

// Define the API URL
const apiURL = "https://yesno.wtf/#api";

// Wait until the document is ready
$(document).ready(function () {
    // Add click event listener to the button
    $("#fetchFact").click(function () {
        // Fetch data from the API
        $.ajax({
            url: apiURL,
            method: "GET",
            success: function (data) {
                // Insert the API response into the output div
                $("#output").html(`<p>${data}</p>`);
            },
            error: function () {
                // Handle errors
                $("#output").html("<p>Error fetching data from the API.</p>");
            },
        });
    });
});

 