var divText = `<div id="Day^^" class="fCast dayForecast">
<div class="fcastHeader" id="Day^^-header">
    <span class="day-info timeXfcast" id="dateDay^^"></span>
</div>
<div class="stdInfo">
    <div class="iconDesc">
        <div class="day-info degT" id="temp-minDay^^" data-key="min: "></div>
        <div class="day-info degT" id="temp-maxDay^^" data-key="max: "></div>
        <div class="day-info" id="weather-mainDay^^"></div>
        <div class="day-info iconDiv" id="weather-iconDay^^"></div>
        <span class="day-info" id="weather-descriptionDay^^"></span>
    </div>
    <div class="day-info spd" id="wind_speedDay^^" data-key="wind speed: "></div>
    <div class="day-info  deg" id="wind_degDay^^" data-key="wind direction: "></div>
    <div class="day-info perc" id="humidityDay^^" data-key="humidity: "></div>
    <div class="day-info uvi" id="uviDay^^" data-key="uv: "></div>
</div>
<hr class="fullWidth">
<div class="extraInfo" display="">
    <div class="day-info timeXhm" id="sunriseDay^^" data-key="sunrise: "></div>
    <div class="day-info timeXhm" id="sunsetDay^^" data-key="sunset: "></div>
    <div class="day-info presr" id="pressureDay^^" data-key="pressure: "></div>
    <div class="day-info perc" id="cloudsDay^^" data-key="clouds: "></div>
    <div class="day-info degT" id="dew_pointDay^^" data-key="dew point: "></div>  
</div>
</div>`
var parentDiv = document.getElementById('forecastPanel')
parentDiv.innerHTML  = '';
for(i=1;i<6;i++){
    var thisDivText = divText.replaceAll('^^',i)
    parentDiv.innerHTML += thisDivText;
}