//mbta.js
//George Brown, Comp 20, 14 March 2014
//

var request = new XMLHttpRequest();

var lat = 0;
var longe = 0;
me = new google.maps.LatLng(lat, longe);
var mapOptions = {
    zoom: 11,
    center: me,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map;
var marker;
var infowindow = new google.maps.InfoWindow();
var places;
var parsed;

// Station objects contain all stops/locations for blue, orange, and red lines
var blueStations = new Object();
var orangeStations = new Object();
var redStations = new Object();

blueStations[6] = {"name":"Airport","lat":"42.374262","longe":"-71.030395"};
blueStations[8] = {"name":"Aquarium","lat":"42.359784","longe":"-71.051652"};
blueStations[2] = {"name":"Beachmont","lat":"42.39754234","longe":"-70.99231944"};
blueStations[11] = {"name":"Bowdoin","lat":"42.361365","longe":"-71.062037"};
blueStations[10] = {"name":"Government Center","lat":"42.359705","longe":"-71.059215"};
blueStations[7] = {"name":"Maverick","lat":"42.36911856","longe":"-71.03952958"};
blueStations[4] = {"name":"Orient Heights","lat":"42.386867","longe":"-71.004736"};
blueStations[1] = {"name":"Revere Beach","lat":"42.40784254","longe":"-70.99253321"};
blueStations[9] = {"name":"State Street","lat":"42.358978","longe":"-71.057598"};
blueStations[3] = {"name":"Suffolk Downs","lat":"42.39050067","longe":"-70.99712259"};
blueStations[0] = {"name":"Wonderland","lat":"42.41342","longe":"-70.991648"};
blueStations[5] = {"name":"Wood Island","lat":"42.3796403","longe":"-71.02286539"};

orangeStations[11] = {"name":"Back Bay","lat":"42.34735","longe":"-71.075727"};
orangeStations[9] = {"name":"Chinatown","lat":"42.352547","longe":"-71.062752"};
orangeStations[4] = {"name":"Community College","lat":"42.373622","longe":"-71.069533"};
orangeStations[8] = {"name":"Downtown Crossing","lat":"42.355518","longe":"-71.060225"};
orangeStations[18] = {"name":"Forest Hills","lat":"42.300523","longe":"-71.113686"};
orangeStations[17] = {"name":"Green Street","lat":"42.310525","longe":"-71.107414"};
orangeStations[6] = {"name":"Haymarket","lat":"42.363021","longe":"-71.05829"};
orangeStations[15] = {"name":"Jackson Square","lat":"42.323132","longe":"-71.099592"};
orangeStations[1] = {"name":"Malden Center","lat":"42.426632","longe":"-71.07411"};
orangeStations[12] = {"name":"Mass Ave","lat":"42.341512","longe":"-71.083423"};
orangeStations[5] = {"name":"North Station","lat":"42.365577","longe":"-71.06129"};
orangeStations[0] = {"name":"Oak Grove","lat":"42.43668","longe":"-71.071097"};
orangeStations[14] = {"name":"Roxbury Crossing","lat":"42.331397","longe":"-71.095451"};
orangeStations[13] = {"name":"Ruggles","lat":"42.336377","longe":"-71.088961"};
orangeStations[7] = {"name":"State Street","lat":"42.358978","longe":"-71.057598"};
orangeStations[16] = {"name":"Stony Brook","lat":"42.317062","longe":"-71.104248"};
orangeStations[3] = {"name":"Sullivan","lat":"42.383975","longe":"-71.076994"};
orangeStations[10] = {"name":"Tufts Medical","lat":"42.349662","longe":"-71.063917"};
orangeStations[2] = {"name":"Wellington","lat":"42.40237","longe":"-71.077082"};

//Split is for > 12 -- 13 is North Q
// Then skip to 18, savin hill
redStations[0] = {"name":"Alewife","lat":"42.395428","longe":"-71.142483"};
redStations[11] = {"name":"Andrew","lat":"42.330154","longe":"-71.057655"};
redStations[21] = {"name":"Ashmont","lat":"42.284652","longe":"-71.064489"};
redStations[17] = {"name":"Braintree","lat":"42.2078543","longe":"-71.0011385"};
redStations[10] = {"name":"Broadway","lat":"42.342622","longe":"-71.056967"};
redStations[4] = {"name":"Central Square","lat":"42.365486","longe":"-71.103802"};
redStations[6] = {"name":"Charles/MGH","lat":"42.361166","longe":"-71.070628"};
redStations[1] = {"name":"Davis","lat":"42.39674","longe":"-71.121815"};
redStations[8] = {"name":"Downtown Crossing","lat":"42.355518","longe":"-71.060225"};
redStations[19] = {"name":"Fields Corner","lat":"42.300093","longe":"-71.061667"};
redStations[3] = {"name":"Harvard Square","lat":"42.373362","longe":"-71.118956"};
redStations[12] = {"name":"JFK/UMass","lat":"42.320685","longe":"-71.052391"};
redStations[5] = {"name":"Kendall/MIT","lat":"42.36249079","longe":"-71.08617653"};
redStations[13] = {"name":"North Quincy","lat":"42.275275","longe":"-71.029583"};
redStations[7] = {"name":"Park Street","lat":"42.35639457","longe":"-71.0624242"};
redStations[2] = {"name":"Porter Square","lat":"42.3884","longe":"-71.119149"};
redStations[16] = {"name":"Quincy Adams","lat":"42.233391","longe":"-71.007153"};
redStations[15] = {"name":"Quincy Center","lat":"42.251809","longe":"-71.005409"};
redStations[18] = {"name":"Savin Hill","lat":"42.31129","longe":"-71.053331"};
redStations[20] = {"name":"Shawmut","lat":"42.29312583","longe":"-71.06573796"};
redStations[9] = {"name":"South Station","lat":"42.352271","longe":"-71.055242"};
redStations[14] = {"name":"Wollaston","lat":"42.2665139","longe":"-71.0203369"};

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
        
        parsed = JSON.parse(request.responseText);
        
        if (parsed.line) {
            getCurrentLocation();
        }
    
    } else if (request.status == 500) {
        var errorElem = document.getElementById("mbtamap");
        errorElem.innerHTML = "<h1>Could not load MBTA Map -- The T sucks!</h>";
    }
}

function getCurrentLocation() {

    // If navigator.geolocation object is supported by your browser
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            longe = position.coords.longitude;
            renderMap();
        });
    }

    else {
        alert("Geolocation is not supported by your web browser.");
    }
}

function renderMap() {
    me = new google.maps.LatLng(lat, longe);
    map = new google.maps.Map(document.getElementById("mbtamap"), mapOptions);
 
    map.panTo(me);

    marker = new google.maps.Marker({
        position: me,
        title: "You are here",
        icon: "http://maps.google.com/mapfiles/kml/shapes/arrow.png"
    });

    marker.setMap(map);
    
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent("You are here");
        infowindow.open(map, marker);
    });

    addStationMarkers();
}

function addStationMarkers()
{
    if (parsed.line == "blue") {
        for (var i = 0; i < 12; i++) {
            createMarker(blueStations[i]);
        }
    } else if (parsed.line == "red") {
        for (var i = 0; i < 22; i++) {
            createMarker(redStations[i]);
        }
    } else {
        for (var i = 0; i < 19; i++) {
            createMarker(orangeStations[i]);
        }
    }
}

function createMarker(station){
    var stationLoc = new google.maps.LatLng(station.lat, station.longe);
    var iconSource = "http://maps.google.com/mapfiles/kml/";
    
    if (parsed.line == "blue") {
        iconSource += "paddle/blu-circle-lv.png";
    } else if (parsed.line == "red") {
        iconSource += "paddle/red-circle-lv.png";
    } else {
        iconSource += "shapes/sunny.png";
    }

    var stationMarker = new google.maps.Marker({
        map: map,
        position: stationLoc,
        icon: iconSource
    });

    google.maps.event.addListener(stationMarker, 'click', function() {
        infowindow.close();
        infowindow.setContent(station.name);
        infowindow.open(map, this);
    });
}



//display marker info 

//addString = "<tr><td>" + line + "</td></tr>"






