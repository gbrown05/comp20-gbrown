//mbta.js
//George Brown, Comp 20, 14 March 2014
//
/*
var request = new XMLHttpRequest();

function initialize() {
    // Set up the request
    request.open("GET", "http://messagehub.herokuapp.com/a3.json", true);

    // Execute the request
    request.send(null);

    // Handle the request (however you want)
    request.onreadystatechange = callback;
}

// Handle the request
function callback() {
    
    if (request.readyState == 4 && request.status == 200) {
        document.getElementById("results").innerHTML = "<h1>Done!</h1>";
        alert(request.responseText);
    }
}
*/
function getCurrentLocation() {
    lat = 0;
    lng = 0;
    elem = document.getElementById("loc");

    if (navigator.geolocation) {
        
        // Navigator.geolocation object is supported by your browser
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            lng = position.coords.longitude;
            elem.innerHTML = "<h1>You are in " + lat + ", " + lng + "</h1>";
        });
        elem.innerHTML = "Getting your location...";
    }

    else {
        alert("Geolocation is not supported by your web browser.  What a shame!");
    }
}