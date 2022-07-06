//Create variables ---------------------------------------------------------
//var IDs
//default prefs

var rootVar = document.querySelector(':root'); // Get the root element
var unitsPref = 'metric'; // allow toggle 'imperial'
var alertsPref = 'on'; // allow toggle 'off'
var testingVal = {};

//Other Variables required
var apiKey = '37572b676fcac9bf15842774f3087088'
//geolocation variables
var locationData = {}; //this is an object 
var limitGeoNo = 1; //how many results for geolocation

//Weather API variables
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
    var windowModal = document.getElementById("windowModal");
    var closeSpan = document.getElementsByClassName("closeSpan")[0];
    //Error modal functions
    // Open error modal
    function showWindowModal(message) {
        var errorPElement = document.getElementById('errorMessage');
        errorPElement.textContent = message;
        windowModal.style.display = "block";
    }
    //close error modal
    // When the user clicks on <span> (x), close the modal
    closeSpan.onclick = function () {
        windowModal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == windowModal) {
            windowModal.style.display = "none";
        }
    }
} //End windowModal

// Functions ---------------------------------------------------------
//Preferences

// var element = document.querySelector(' … ');
// var styles = window.getComputedStyle(element,':after')
// var content = styles['content'];


var prefsBtn = document.getElementById('prefsPanel');
// mouseenter 
prefsBtn.addEventListener('mouseenter', function (event) {
    event.stopPropagation();
    var prefChoice = document.getElementById('pref-choice');
    prefChoice.setAttribute('style', "display:block");
    // var thisButton = event.target;
    // var thisSearchTerm = thisButton.getAttribute("data-search-term");
    //  console.log(thisButton)
});
// Click
prefsBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    //Initiate by ensuring all choices are hidden
    var hideAllDivClass = document.getElementsByClassName('pref-choice-modal');
    hideAllDivClass.style = "display:none";
    var thisButton = event.target;
    // console.log(thisButton.textContent)
    var useDivId = 'pref-choice-' + thisButton.textContent;
    var prefsDiv = document.getElementById(useDivId);
    prefsDiv.setAttribute('style', "display:block");
    showWindowModal('');

    //get response from modal
    var modalPrefsBtn = document.getElementById('prefsPanelModal');
    modalPrefsBtn.addEventListener('click', function (event) {
        var thisPrefButton = event.target;
        console.log(thisPrefButton.textContent);
        var prefText = thisPrefButton.textContent;
        var evalPrefVar = thisButton.textContent + `Pref = '` + prefText + `'`;
        console.log(evalPrefVar);
        eval(evalPrefVar);
        console.log(evalPrefVar + '\nUnitsPref:' + unitsPref + '  alertPref:' + alertsPref)
        prefsDiv.setAttribute('style', "display:none");
        windowModal.style.display = "none";
        unitSuffix_set(unitsPref)

    });
});
// mouseleave
prefsBtn.addEventListener('mouseleave', function (event) {
    event.stopPropagation();
    var prefChoice = document.getElementById('pref-choice');
    prefChoice.setAttribute('style', "display:none");
});


function locationAPI(searchTerm) {
    //  https://api.openweathermap.org/geo/1.0/direct?q=melbourne&limit=5&appid=37572b676fcac9bf15842774f3087088

    var requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + searchTerm + '&limit=' + limitGeoNo + '&appid=' + apiKey;
    window.locationData = {};
    fetch(requestUrl)
        .then(function (response) {
            if (response.status != 200) {
                showWindowModal('Search term not found - Error: ' + response.status)
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
                showWindowModal('No result was found for that search term, please try again');
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
    makeLocationButtons();

}
//location buttons
var locationButtons = document.getElementById('locationButtons');

//function resetLocationButtonEventListener(){
locationButtons.addEventListener('click', function (event) {
    event.stopPropagation();
    var thisButton = event.target;
    var thisSearchTerm = thisButton.getAttribute("data-search-term");
    // console.log(searchTerm)
    locationAPI(thisSearchTerm);

});


function createOneLocationButton(name, searchTerm) {
    //use locationButtons global
    //<button class="btn btnCity" data-search-term="melbourne,victoria,AU" >Melbourne</button>
    var newButton = document.createElement('button');
    newButton.setAttribute('class', "btn btnCity");
    newButton.setAttribute("data-search-term", searchTerm);
    newButton.textContent = name;

    locationButtons.appendChild(newButton)

}

function makeLocationButtons() {
    // reset locationButtons 
    window.locationButtons.innerHTML = '';

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

    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=' + exclude + '&units=' + unitsPref + '&appid=' + apiKey;
    // window.locationData = {};
    fetch(requestUrl)
        .then(function (response) {
            if (response.status != 200) {
                showWindowModal('Error: ' + response.status)
            }
            console.log(response)
            return response.json();

        })
        .then(function (data) {
            // console.log(data.results);
            console.log(data);
            fullCurrentWeather = data;
            createAllPanels()
        });
}




// Create a function for setting variable values for metric/imperial units
function unitSuffix_set(type) {
    if (type == 'imperial') { //imperial
        // Set the value of variable - note the " need to be in the final
        rootVar.style.setProperty('--degT', `'°F'`);
        rootVar.style.setProperty('--speed', `'mph'`);
        rootVar.style.setProperty('--length', `'miles'`);
    } else { //metric
        rootVar.style.setProperty('--degT', `'°C'`);
        rootVar.style.setProperty('--speed', `'km/h'`);
        rootVar.style.setProperty('--length', `'km'`);
    }
}
function makeTimeByClass(thisID,thisDetailVal) {
    if (thisID.className.includes('timeXhm')){
        thisDetailVal = moment(thisDetailVal, 'X').format("hh:mma")
    }else if(thisID.className.includes('timeXfull')){
        thisDetailVal = moment(thisDetailVal,'X').format("dddd Do MMMM yyy hh:mma")

    }
return thisDetailVal
}

//functions to create the panels
function createAllPanels() {
    makeCurrentPanel()
    makeForecastPanels()
}

function makeCurrentPanel() {
    var currentWeatherLoc = fullCurrentWeather.current;
    var currentDivs = document.querySelector('#todayWeather').children;
    var replaceIdText = 'Today'

    for (i = 0; i < currentDivs.length; i++) {
        var detailNameId = currentDivs[i].id;
        var detailName = detailNameId.replace(replaceIdText, '');
        // var thisDetailVal = eval('currentWeatherLoc.' + detailName);
        var thisDetailVal = currentWeatherLoc[detailName];
        var thisID = document.getElementById(detailNameId);
        if (thisID) {
            //check for time
            if (thisID.className.includes('timeX')) {
                
                thisDetailVal = makeTimeByClass(thisID,thisDetailVal)
            }
            thisID.textContent = thisDetailVal
        }
    }
}

function makeForecastPanels() {
    var forecastWeatherLoc = fullCurrentWeather.daily;

    for (d = 0; d < 5; d++) { //6 days=current day + 5 forecast days
        var currentPanel = document.querySelector('#forecastPanel').children[d];
        var currentDivs = currentPanel.children;
        
        var replaceIdText = 'Day' + (d+1)

        for (i = 0; i < currentDivs.length; i++) {
            var detailNameId = currentDivs[i].id;
            var detailName = detailNameId.replace(replaceIdText, '');
            var thisDetailVal = forecastWeatherLoc[i][detailName] //could be an array { day: 10.11, min: 5.96, max: 15.32, night: 8.44, eve: 11.27 }
         if(typeof thisDetailVal === 'object'){
var childDivs = currentDivs[i].children
for (cd = 0 ; cd < childDivs.length;cd++){
    var ChildDetailNameId = childDivs[cd].id;
    var ChildDetailName = ChildDetailNameId.replace(replaceIdText, '');
    var ChildDetailVal = thisDetailVal[ChildDetailName];
    var thisID = document.getElementById(ChildDetailNameId);
    if (thisID) {
        //check for time
        if (thisID.className.includes('timeX')) {
            
            ChildDetailVal = makeTimeByClass(thisID,ChildDetailVal)
        }
        thisID.textContent = ChildDetailVal
    }
}
         }else{
            var thisID = document.getElementById(detailNameId);
            if (thisID) {
                //check for time
                if (thisID.className.includes('timeX')) {
                    
                    thisDetailVal = makeTimeByClass(thisID,thisDetailVal)
                }
                thisID.textContent = thisDetailVal
            }
        }
    }}
}


//init ---------------------------------------
function init() {
    makeLocationButtons();


    //testing below
    //showWindowModal('test message is written here')

    //console.log('final result:' + locationAPI('perth'));

    //console.log(fullCurrentWeather);

}

init()