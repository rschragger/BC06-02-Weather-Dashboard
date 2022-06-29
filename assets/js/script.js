//Create variables ---------------------------------------------------------
//var IDs
//defaults
var defaultVals = {
}
var testingVal = {};

//Other Variables required
var apiKey = '37572b676fcac9bf15842774f3087088'
//geolocation variables
var locationData = {}; //this is an object 
var limitGeoNo = 1; //how many results for geolocation

//Weather API variables
var useUnits = 'metric'; // allow choose 'imperial'
var exclusions = 'minutely' // allow for 'current,minutely,hourly,daily,alerts'
var fullCurrentWeather = {};

//Error modal
var errorModal = document.getElementById("errorModal");
var closeSpan = document.getElementsByClassName("closeSpan")[0];
//Error modal functions
// Open error modal
function showErrorModal(message) {
    var errorPElement = document.getElementById('errorMessage');
    errorPElement.textContent = message;
    errorModal.style.display = "block";
}
//close error modal
// When the user clicks on <span> (x), close the modal
closeSpan.onclick = function () {
    errorModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == errorModal) {
        errorModal.style.display = "none";
    }
}


// Functions ---------------------------------------------------------
function locationAPI(searchTerm) {
    //  https://api.openweathermap.org/geo/1.0/direct?q=melbourne&limit=5&appid=37572b676fcac9bf15842774f3087088

    var requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + searchTerm + '&limit=' + limitGeoNo + '&appid=' + apiKey;
    window.locationData = {};
    fetch(requestUrl)
        .then(function (response) {
            if (response.status != 200) {
                alert('Error: ' + response.status)
            }
            console.log(response)
            return response.json();

        })
        .then(function (data) {
            // console.log(data.results);
            console.log('location data:');
            console.log(data);
            // testingVal=data;
            if (data.length < 1) {
                alert('Nothing found');
            } else {
                locationData = {
                    'name': data[0].name,
                    'state': data[0].state,
                    'country': data[0].country,
                    'lat': data[0].lat,
                    'lon': data[0].lon,
                };
                weatherAPI(locationData.lat, locationData.lon, exclusions, apiKey);
            }
        });
}

function weatherAPI(lat, lon, exclude, apiKey) {
    //https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=' + exclude + '&units=' + useUnits + '&appid=' + apiKey;
    window.locationData = {};
    fetch(requestUrl)
        .then(function (response) {
            if (response.status != 200) {
                alert('Error: ' + response.status)
            }
            console.log(response)
            return response.json();

        })
        .then(function (data) {
            // console.log(data.results);
            console.log(data);
            fullCurrentWeather = data;
        });
}

function init() {
    //showErrorModal('test message is written here')

    console.log('final result:' + locationAPI('perth'));

    console.log(locationData);

}

init()