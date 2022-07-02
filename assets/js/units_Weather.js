function init1() {
   localStorage.setItem("unitsData", unitsDataToStore);
}
var unitsDataToStore = JSON.stringify([
   
   {
      "id":{
         "Parameter":"id",
         "Description":"City identification",
         "Standard":"-",
         "Metric":"-",
         "Imperial":"-"
      }
   },
   {
      "dt":{
         "Parameter":"dt",
         "Description":"Data receiving time",
         "Standard":"unix, UTC",
         "Metric":"unix, UTC",
         "Imperial":"unix, UTC"
      }
   },
   {
      "name":{
         "Parameter":"name",
         "Description":"City name",
         "Standard":"-",
         "Metric":"-",
         "Imperial":"-"
      }
   },
   {
      "coord":{
         "Parameter":"coord",
         "Description":"",
         "Standard":"",
         "Metric":"",
         "Imperial":""
      }
   },
   {
      "lat":{
         "Parameter":"lat",
         "Description":"City geo location, latitude",
         "Standard":"-",
         "Metric":"-",
         "Imperial":"-"
      }
   },
   {
      "lon":{
         "Parameter":"lon",
         "Description":"City geo location, longitude",
         "Standard":"-",
         "Metric":"-",
         "Imperial":"-"
      }
   },
   {
      "sys":{
         "Parameter":"sys",
         "Description":"",
         "Standard":"",
         "Metric":"",
         "Imperial":""
      }
   },
   {
      "message":{
         "Parameter":"message",
         "Description":"System parameter, do not use it",
         "Standard":"-",
         "Metric":"-",
         "Imperial":"-"
      }
   },
   {
      "country":{
         "Parameter":"country",
         "Description":"Country code (GB, JP etc.)",
         "Standard":"-",
         "Metric":"-",
         "Imperial":"-"
      }
   },
   {
      "sunrise":{
         "Parameter":"sunrise",
         "Description":"Sunrise time",
         "Standard":"unix, UTC",
         "Metric":"unix, UTC",
         "Imperial":"unix, UTC"
      }
   },
   {
      "sunset":{
         "Parameter":"sunset",
         "Description":"Sunset time",
         "Standard":"unix, UTC",
         "Metric":"unix, UTC",
         "Imperial":"unix, UTC"
      }
   },
   {
      "main":{
         "Parameter":"main",
         "Description":"",
         "Standard":"",
         "Metric":"",
         "Imperial":""
      }
   },
   {
      "temp":{
         "Parameter":"temp",
         "Description":"Temperature",
         "Standard":"Kelvin",
         "Metric":"Celsius",
         "Imperial":"Fahrenheit"
      }
   },
   {
      "humidity":{
         "Parameter":"humidity",
         "Description":"Humidity",
         "Standard":"%",
         "Metric":"%",
         "Imperial":"%"
      }
   },
   {
      "temp_min":{
         "Parameter":"temp_min",
         "Description":"Minimum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally)",
         "Standard":"Kelvin",
         "Metric":"Celsius",
         "Imperial":"Fahrenheit"
      }
   },
   {
      "temp_max":{
         "Parameter":"temp_max",
         "Description":"Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally)",
         "Standard":"Kelvin",
         "Metric":"Celsius",
         "Imperial":"Fahrenheit"
      }
   },
   {
      "pressure":{
         "Parameter":"pressure",
         "Description":"Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data)",
         "Standard":"hPa",
         "Metric":"hPa",
         "Imperial":"hPa"
      }
   },
   {
      "sea_level":{
         "Parameter":"sea_level",
         "Description":"Atmospheric pressure on the sea level",
         "Standard":"hPa",
         "Metric":"hPa",
         "Imperial":"hPa"
      }
   },
   {
      "grnd_level":{
         "Parameter":"grnd_level",
         "Description":"Atmospheric pressure on the ground level",
         "Standard":"hPa",
         "Metric":"hPa",
         "Imperial":"hPa"
      }
   },
   {
      "wind":{
         "Parameter":"wind",
         "Description":"",
         "Standard":"",
         "Metric":"",
         "Imperial":""
      }
   },
   {
      "speed":{
         "Parameter":"speed",
         "Description":"Wind speed",
         "Standard":"meter/sec",
         "Metric":"meter/sec",
         "Imperial":"miles/hour"
      }
   },
   {
      "deg":{
         "Parameter":"deg",
         "Description":"Wind direction",
         "Standard":"degrees (meteorological)",
         "Metric":"degrees (meteorological)",
         "Imperial":"degrees (meteorological)"
      }
   },
   {
      "gust":{
         "Parameter":"gust",
         "Description":"Wind gust",
         "Standard":"meter/sec",
         "Metric":"meter/sec",
         "Imperial":"miles/hour"
      }
   },
   {
      "clouds":{
         "Parameter":"clouds",
         "Description":"",
         "Standard":"",
         "Metric":"",
         "Imperial":""
      }
   },
   {
      "all":{
         "Parameter":"all",
         "Description":"Cloudiness",
         "Standard":"%",
         "Metric":"%",
         "Imperial":"%"
      }
   },
   {
      "weather (more info Weather condition codes)":{
         "Parameter":"weather (more info Weather condition codes)",
         "Description":"",
         "Standard":"",
         "Metric":"",
         "Imperial":""
      }
   },
   {
      "id":{
         "Parameter":"id",
         "Description":"Weather condition id",
         "Standard":"-",
         "Metric":"-",
         "Imperial":"-"
      }
   },
   {
      "main":{
         "Parameter":"main",
         "Description":"Group of weather parameters (Rain, Snow, Extreme etc.)",
         "Standard":"-",
         "Metric":"-",
         "Imperial":"-"
      }
   },
   {
      "description":{
         "Parameter":"description",
         "Description":"Weather condition within the group",
         "Standard":"-",
         "Metric":"-",
         "Imperial":"-"
      }
   },
   {
      "icon":{
         "Parameter":"icon",
         "Description":"Weather icon id",
         "Standard":"-",
         "Metric":"-",
         "Imperial":"-"
      }
   },
   {
      "rain":{
         "Parameter":"rain",
         "Description":"",
         "Standard":"",
         "Metric":"",
         "Imperial":""
      }
   },
   {
      "1h":{
         "Parameter":"1h",
         "Description":"Precipitation volume for last hour",
         "Standard":"mm",
         "Metric":"mm",
         "Imperial":"mm"
      }
   },
   {
      "3h":{
         "Parameter":"3h",
         "Description":"Precipitation volume for last 3 hours",
         "Standard":"mm",
         "Metric":"mm",
         "Imperial":"mm"
      }
   },
   {
      "snow":{
         "Parameter":"snow",
         "Description":"",
         "Standard":"",
         "Metric":"",
         "Imperial":""
      }
   },
   {
      "1h":{
         "Parameter":"1h",
         "Description":"Snow volume for last hour",
         "Standard":"mm",
         "Metric":"mm",
         "Imperial":"mm"
      }
   },
   {
      "3h":{
         "Parameter":"3h",
         "Description":"Snow volume for last 3 hours",
         "Standard":"mm",
         "Metric":"mm",
         "Imperial":"mm"
      }
   },
   

]);

init1()