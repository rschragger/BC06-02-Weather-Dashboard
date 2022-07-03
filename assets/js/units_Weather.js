function init1() {
   localStorage.setItem("unitsData", unitsDataToStore);
}
var unitsDataToStore = JSON.stringify(
   {
      "obj":{
         "id":{
            "parameter":"id",
            "description":"City identification",
            "standard":"",
            "metric":"",
            "imperial":""
         },
         "dt":{
            "parameter":"dt",
            "description":"Data receiving time",
            "standard":"unix, UTC",
            "metric":"unix, UTC",
            "imperial":"unix, UTC"
         },
         "name":{
            "parameter":"name",
            "description":"City name",
            "standard":"",
            "metric":"",
            "imperial":""
         },
         "coord":{
            "parameter":"coord",
            "description":"",
            "standard":"",
            "metric":"",
            "imperial":""
         },
         "lat":{
            "parameter":"lat",
            "description":"City geo location, latitude",
            "standard":"",
            "metric":"",
            "imperial":""
         },
         "lon":{
            "parameter":"lon",
            "description":"City geo location, longitude",
            "standard":"",
            "metric":"",
            "imperial":""
         },
         "sys":{
            "parameter":"sys",
            "description":"",
            "standard":"",
            "metric":"",
            "imperial":""
         },
         "message":{
            "parameter":"message",
            "description":"System parameter, do not use it",
            "standard":"",
            "metric":"",
            "imperial":""
         },
         "country":{
            "parameter":"country",
            "description":"Country code (GB, JP etc.)",
            "standard":"",
            "metric":"",
            "imperial":""
         },
         "sunrise":{
            "parameter":"sunrise",
            "description":"Sunrise time",
            "standard":"unix, UTC",
            "metric":"unix, UTC",
            "imperial":"unix, UTC"
         },
         "sunset":{
            "parameter":"sunset",
            "description":"Sunset time",
            "standard":"unix, UTC",
            "metric":"unix, UTC",
            "imperial":"unix, UTC"
         },
         "main":{
            "parameter":"main",
            "description":"",
            "standard":"",
            "metric":"",
            "imperial":""
         },
         "temp":{
            "parameter":"temp",
            "description":"Temperature",
            "standard":"Kelvin",
            "metric":"Celsius",
            "imperial":"Fahrenheit"
         },
         "humidity":{
            "parameter":"humidity",
            "description":"Humidity",
            "standard":"%",
            "metric":"%",
            "imperial":"%"
         },
         "temp_min":{
            "parameter":"temp_min",
            "description":"Minimum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally)",
            "standard":"Kelvin",
            "metric":"Celsius",
            "imperial":"Fahrenheit"
         },
         "temp_max":{
            "parameter":"temp_max",
            "description":"Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally)",
            "standard":"Kelvin",
            "metric":"Celsius",
            "imperial":"Fahrenheit"
         },
         "pressure":{
            "parameter":"pressure",
            "description":"Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data)",
            "standard":"hPa",
            "metric":"hPa",
            "imperial":"hPa"
         },
         "sea_level":{
            "parameter":"sea_level",
            "description":"Atmospheric pressure on the sea level",
            "standard":"hPa",
            "metric":"hPa",
            "imperial":"hPa"
         },
         "grnd_level":{
            "parameter":"grnd_level",
            "description":"Atmospheric pressure on the ground level",
            "standard":"hPa",
            "metric":"hPa",
            "imperial":"hPa"
         },
         "wind":{
            "parameter":"wind",
            "description":"",
            "standard":"",
            "metric":"",
            "imperial":""
         },
         "speed":{
            "parameter":"speed",
            "description":"Wind speed",
            "standard":"meter/sec",
            "metric":"meter/sec",
            "imperial":"miles/hour"
         },
         "deg":{
            "parameter":"deg",
            "description":"Wind direction",
            "standard":"degrees (meteorological)",
            "metric":"degrees (meteorological)",
            "imperial":"degrees (meteorological)"
         },
         "gust":{
            "parameter":"gust",
            "description":"Wind gust",
            "standard":"meter/sec",
            "metric":"meter/sec",
            "imperial":"miles/hour"
         },
         "clouds":{
            "parameter":"clouds",
            "description":"",
            "standard":"",
            "metric":"",
            "imperial":""
         },
         "all":{
            "parameter":"all",
            "description":"Cloudiness",
            "standard":"%",
            "metric":"%",
            "imperial":"%"
         },
         "weather(more info Weather condition codes)":{
            "parameter":"weather (more info Weather condition codes)",
            "description":"",
            "standard":"",
            "metric":"",
            "imperial":""
         },
         "id":{
            "parameter":"id",
            "description":"Weather condition id",
            "standard":"",
            "metric":"",
            "imperial":""
         },
         "main":{
            "parameter":"main",
            "description":"Group of weather parameters (Rain, Snow, Extreme etc.)",
            "standard":"",
            "metric":"",
            "imperial":""
         },
         "description":{
            "parameter":"description",
            "description":"Weather condition within the group",
            "standard":"",
            "metric":"",
            "imperial":""
         },
         "icon":{
            "parameter":"icon",
            "description":"Weather icon id",
            "standard":"",
            "metric":"",
            "imperial":""
         },
         "rain":{
            "parameter":"rain",
            "description":"",
            "standard":"",
            "metric":"",
            "imperial":""
         },
         "1h":{
            "parameter":"1h",
            "description":"Precipitation volume for last hour",
            "standard":"mm",
            "metric":"mm",
            "imperial":"mm"
         },
         "3h":{
            "parameter":"3h",
            "description":"Precipitation volume for last 3 hours",
            "standard":"mm",
            "metric":"mm",
            "imperial":"mm"
         },
         "snow":{
            "parameter":"snow",
            "description":"",
            "standard":"",
            "metric":"",
            "imperial":""
         },
         "1h":{
            "parameter":"1h",
            "description":"Snow volume for last hour",
            "standard":"mm",
            "metric":"mm",
            "imperial":"mm"
         },
         "3h":{
            "parameter":"3h",
            "description":"Snow volume for last 3 hours",
            "standard":"mm",
            "metric":"mm",
            "imperial":"mm"
         }
      }
   }
);

init1()