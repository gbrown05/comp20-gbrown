//mbta.js
//George Brown, Comp 20, 14 March 2014
//

var request = new XMLHttpRequest();

function initialize() {
    // Set up the request
    request.open("GET", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true);

    // Execute the request
    request.send(null);

    // Handle the request
    request.onreadystatechange = callback;
}

// Handle the request
function callback() {
    
    if (request.readyState == 4 && request.status == 200) {
        var parsed = json.parse(request.responseText);
    
    }
}

function stationData() {
    blueStations = new Object();
    orangeStations = new Object();
    redStations = new Object();

    blueStations["Airport"] = {"lat":"42.374262","longe":"-71.030395"};
    blueStations["Aquarium"] = {"lat":"42.359784","longe":"-71.051652"};
    blueStations["Beachmont"] = {"lat":"42.39754234","longe":"-70.99231944"};
    blueStations["Bowdoin"] = {"lat":"42.361365","longe":"-71.062037"};
    blueStations["Government Center"] = {"lat":"42.359705","longe":"-71.059215"};
    blueStations["Maverick"] = {"lat":"42.36911856","longe":"-71.03952958"};
    blueStations["Orient Heights"] = {"lat":"42.386867","longe":"-71.004736"};
    blueStations["Revere Beach"] = {"lat":"42.40784254","longe":"-70.99253321"};
    blueStations["State Street"] = {"lat":"42.358978","longe":"-71.057598"};
    blueStations["Suffolk Downs"] = {"lat":"42.39050067","longe":"-70.99712259"};
    blueStations["Wonderland"] = {"lat":"42.41342","longe":"-70.991648"};
    blueStations["Wood Island"] = {"lat":"42.3796403","longe":"-71.02286539"};

    orangeStations["Back Bay"] = {"lat":"42.34735","longe":"-71.075727"};
    orangeStations["Chinatown"] = {"lat":"42.352547","longe":"-71.062752"};
    orangeStations["Community College"] = {"lat":"42.373622","longe":"-71.069533"};
    orangeStations["Downtown Crossing"] = {"lat":"42.355518","longe":"-71.060225"};
    orangeStations["Forest Hills"] = {"lat":"42.300523","longe":"-71.113686"};
    orangeStations["Green Street"] = {"lat":"42.310525","longe":"-71.107414"};
    orangeStations["Haymarket"] = {"lat":"42.363021","longe":"-71.05829"};
    orangeStations["Jackson Square"] = {"lat":"42.323132","longe":"-71.099592"};
    orangeStations["Malden Center"] = {"lat":"42.426632","longe":"-71.07411"};
    orangeStations["Mass Ave"] = {"lat":"42.341512","longe":"-71.083423"};
    orangeStations["North Station"] = {"lat":"42.365577","longe":"-71.06129"};
    orangeStations["Oak Grove"] = {"lat":"42.43668","longe":"-71.071097"};
    orangeStations["Roxbury Crossing"] = {"lat":"42.331397","longe":"-71.095451"};
    orangeStations["Ruggles"] = {"lat":"42.336377","longe":"-71.088961"};
    orangeStations["State Street"] = {"lat":"42.358978","longe":"-71.057598"};
    orangeStations["Stony Brook"] = {"lat":"42.317062","longe":"-71.104248"};
    orangeStations["Sullivan"] = {"lat":"42.383975","longe":"-71.076994"};
    orangeStations["Tufts Medical"] = {"lat":"42.349662","longe":"-71.063917"};
    orangeStations["Wellington"] = {"lat":"42.40237","longe":"-71.077082"};
    
    redStations["Alewife"] = {"lat":"42.395428","longe":"-71.142483"};
    redStations["Andrew"] = {"lat":"42.330154","longe":"-71.057655"};
    redStations["Ashmont"] = {"lat":"42.284652","longe":"-71.064489"};
    redStations["Braintree"] = {"lat":"42.2078543","longe":"-71.0011385"};
    redStations["Broadway"] = {"lat":"42.342622","longe":"-71.056967"};
    redStations["Central Square"] = {"lat":"42.365486","longe":"-71.103802"};
    redStations["Charles/MGH"] = {"lat":"42.361166","longe":"-71.070628"};
    redStations["Davis"] = {"lat":"42.39674","longe":"-71.121815"};
    redStations["Downtown Crossing"] = {"lat":"42.355518","longe":"-71.060225"};
    redStations["Fields Corner"] = {"lat":"42.300093","longe":"-71.061667"};
    redStations["Harvard Square"] = {"lat":"42.373362","longe":"-71.118956"};
    redStations["JFK/UMass"] = {"lat":"42.320685","longe":"-71.052391"};
    redStations["Kendall/MIT"] = {"lat":"42.36249079","longe":"-71.08617653"};
    redStations["North Quincy"] = {"lat":"42.275275","longe":"-71.029583"};
    redStations["Park Street"] = {"lat":"42.35639457","longe":"-71.0624242"};
    redStations["Porter Square"] = {"lat":"42.3884","longe":"-71.119149"};
    redStations["Quincy Adams"] = {"lat":"42.233391","longe":"-71.007153"};
    redStations["Quincy Center"] = {"lat":"42.251809","longe":"-71.005409"};
    redStations["Savin Hill"] = {"lat":"42.31129","longe":"-71.053331"};
    redStations["Shawmut"] = {"lat":"42.29312583","longe":"-71.06573796"};
    redStations["South Station"] = {"lat":"42.352271","longe":"-71.055242"};
    redStations["Wollaston"] = {"lat":"42.2665139","longe":"-71.0203369"};
}

function getCurrentLocation() {
    lat = 0;
    longe = 0;
    elem = document.getElementById("loc");

    if (navigator.geolocation) {
        
        // Navigator.geolocation object is supported by your browser
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            longe = position.coords.longitude;
            elem.innerHTML = "<h1>You are in " + lat + ", " + lng + "</h1>";
        });
    }

    else {
        alert("Geolocation is not supported by your web browser.  What a shame!");
    }
}