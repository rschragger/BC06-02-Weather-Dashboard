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

//Search 
var locationsList = [{ name: null }];
var searchButton = document.getElementById('searchBtn');
var searchTerm = '';
searchButton.addEventListener('click', function () {
    //event.preventDefault();
    var searchInput = document.getElementById('cityInput');
    searchTerm = searchInput.value;
    searchInput.value = '';
    locationAPI(searchTerm);
});

//Error modal
{
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
} //End errorModal

// Functions ---------------------------------------------------------
function locationAPI(searchTerm) {
    //  https://api.openweathermap.org/geo/1.0/direct?q=melbourne&limit=5&appid=37572b676fcac9bf15842774f3087088

    var requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + searchTerm + '&limit=' + limitGeoNo + '&appid=' + apiKey;
    window.locationData = {};
    fetch(requestUrl)
        .then(function (response) {
            if (response.status != 200) {
                showErrorModal('Error: ' + response.status)
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
                showErrorModal('No result was found for that search term, please try again');
            } else {
                locationData = {
                    'name': data[0].name,
                    'state': data[0].state,
                    'country': data[0].country,
                    'lat': data[0].lat,
                    'lon': data[0].lon,
                };
                addLocationToLocal(JSON.stringify(locationData));
                weatherAPI(locationData.lat, locationData.lon, exclusions, apiKey);
            }
        });
}

function addLocationToLocal(locData) {
    locData = JSON.parse(locData);
    if (localStorage.getItem('locationsList') == undefined) {
        localStorage.setItem('locationsList', JSON.stringify(locationsList))
            ;
    }
    locationsList = JSON.parse(localStorage.getItem('locationsList'));
    var locListLength = locationsList.length;
    if (!locListLength) { locListLength = [locData] }
    //replace if existing
    var thisName = locData.name;
    var thisCountry = locData.country;


    for (let index in locationsList) {
        if (locationsList[index].name == thisName && locationsList[index].country == thisCountry) {
            //delete this object as it will be added below

            locListLength = index; //this sets up a replace at same spot
            // locationsList.splice(locListLength, 1);
        }


    };
    locationsList.splice(locListLength, 1, locData);
    if (locationsList[0].name == null) { locationsList.splice(0, 1) };
    console.log('loc list:' + JSON.stringify(locationsList))
    localStorage.setItem('locationsList', JSON.stringify(locationsList));
    locationsList = {};

}
//location buttons
var locationButtons = document.getElementById('locationButtons');

//function resetLocationButtonEventListener(){
locationButtons.addEventListener('click', function (event) {
    //event.stopPropagation();
    var thisButton = event.target;
    var thisSearchTerm = thisButton.getAttribute("data-search-term");
    // console.log(searchTerm)
    alert(thisSearchTerm);
    event.stopPropagation();
    locationAPI(thisSearchTerm);
});
//}

function createOneLocationButton(name, searchTerm) {
    //use locationButtons global
    //<button class="btn btnCity" data-search-term="melbourne,victoria,AU" >Melbourne</button>
    var newButton = document.createElement('button');
    newButton.setAttribute('class', "btn btnCity");
    newButton.setAttribute("data-search-term", searchTerm );
    newButton.textContent = name;

    locationButtons.appendChild(newButton)

}

function makeLocationButtons() {
    var locationsListData = JSON.parse(localStorage.getItem('locationsList'))
    if (locationsListData == undefined) {
        return "No button data"
    }
    for (var i = 0; i < locationsListData.length; i++) {
        var thisLocationName = locationsListData[i].name;
        var thisLocationSearchTerm =
            locationsListData[i].name + ',' + locationsListData[i].state + ',' + locationsListData[i].country;

        createOneLocationButton(thisLocationName, thisLocationSearchTerm)
    }
    //resetLocationButtonEventListener()
}

function weatherAPI(lat, lon, exclude, apiKey) {
    //https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=' + exclude + '&units=' + useUnits + '&appid=' + apiKey;
    // window.locationData = {};
    fetch(requestUrl)
        .then(function (response) {
            if (response.status != 200) {
                showErrorModal('Error: ' + response.status)
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


//init ---------------------------------------
function init() {
    //showErrorModal('test message is written here')

    //console.log('final result:' + locationAPI('perth'));

    //console.log(fullCurrentWeather);

}

init()