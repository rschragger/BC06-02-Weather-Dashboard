function init1() {
   localStorage.setItem("unitsData", unitsDataToStore);
}
var unitsDataToStore = JSON.stringify([
   
         {
            "Parameter":"id",
            "Description":"City identification",
            "Standard":"-",
            "Metric":"-",
            "Imperial":"-"
         },
         {
            "Parameter":"dt",
            "Description":"Data receiving time",
            "Standard":"unix, UTC",
            "Metric":"unix, UTC",
            "Imperial":"unix, UTC"
         },
         {
            "Parameter":"name",
            "Description":"City name",
            "Standard":"-",
            "Metric":"-",
            "Imperial":"-"
         },
         {
            "Parameter":"coord",
            "Description":"",
            "Standard":"",
            "Metric":"",
            "Imperial":""
         },
         {
            "Parameter":"lat",
            "Description":"City geo location, latitude",
            "Standard":"-",
            "Metric":"-",
            "Imperial":"-"
         },
         {
            "Parameter":"lon",
            "Description":"City geo location, longitude",
            "Standard":"-",
            "Metric":"-",
            "Imperial":"-"
         },
         {
            "Parameter":"sys",
            "Description":"",
            "Standard":"",
            "Metric":"",
            "Imperial":""
         },
         {
            "Parameter":"message",
            "Description":"System parameter, do not use it",
            "Standard":"-",
            "Metric":"-",
            "Imperial":"-"
         },
         {
            "Parameter":"country",
            "Description":"Country code (GB, JP etc.)",
            "Standard":"-",
            "Metric":"-",
            "Imperial":"-"
         },
         {
            "Parameter":"sunrise",
            "Description":"Sunrise time",
            "Standard":"unix, UTC",
            "Metric":"unix, UTC",
            "Imperial":"unix, UTC"
         },
         {
            "Parameter":"sunset",
            "Description":"Sunset time",
            "Standard":"unix, UTC",
            "Metric":"unix, UTC",
            "Imperial":"unix, UTC"
         },
         {
            "Parameter":"main",
            "Description":"",
            "Standard":"",
            "Metric":"",
            "Imperial":""
         },
         {
            "Parameter":"temp",
            "Description":"Temperature",
            "Standard":"Kelvin",
            "Metric":"Celsius",
            "Imperial":"Fahrenheit"
         },
         {
            "Parameter":"humidity",
            "Description":"Humidity",
            "Standard":"%",
            "Metric":"%",
            "Imperial":"%"
         },
         {
            "Parameter":"temp_min",
            "Description":"Minimum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally)",
            "Standard":"Kelvin",
            "Metric":"Celsius",
            "Imperial":"Fahrenheit"
         },
         {
            "Parameter":"temp_max",
            "Description":"Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally)",
            "Standard":"Kelvin",
            "Metric":"Celsius",
            "Imperial":"Fahrenheit"
         },
         {
            "Parameter":"pressure",
            "Description":"Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data)",
            "Standard":"hPa",
            "Metric":"hPa",
            "Imperial":"hPa"
         },
         {
            "Parameter":"sea_level",
            "Description":"Atmospheric pressure on the sea level",
            "Standard":"hPa",
            "Metric":"hPa",
            "Imperial":"hPa"
         },
         {
            "Parameter":"grnd_level",
            "Description":"Atmospheric pressure on the ground level",
            "Standard":"hPa",
            "Metric":"hPa",
            "Imperial":"hPa"
         },
         {
            "Parameter":"wind",
            "Description":"",
            "Standard":"",
            "Metric":"",
            "Imperial":""
         },
         {
            "Parameter":"speed",
            "Description":"Wind speed",
            "Standard":"meter/sec",
            "Metric":"meter/sec",
            "Imperial":"miles/hour"
         },
         {
            "Parameter":"deg",
            "Description":"Wind direction",
            "Standard":"degrees (meteorological)",
            "Metric":"degrees (meteorological)",
            "Imperial":"degrees (meteorological)"
         },
         {
            "Parameter":"gust",
            "Description":"Wind gust",
            "Standard":"meter/sec",
            "Metric":"meter/sec",
            "Imperial":"miles/hour"
         },
         {
            "Parameter":"clouds",
            "Description":"",
            "Standard":"",
            "Metric":"",
            "Imperial":""
         },
         {
            "Parameter":"all",
            "Description":"Cloudiness",
            "Standard":"%",
            "Metric":"%",
            "Imperial":"%"
         },
         {
            "Parameter":"weather (more info Weather condition codes)",
            "Description":"",
            "Standard":"",
            "Metric":"",
            "Imperial":""
         },
         {
            "Parameter":"id",
            "Description":"Weather condition id",
            "Standard":"-",
            "Metric":"-",
            "Imperial":"-"
         },
         {
            "Parameter":"main",
            "Description":"Group of weather parameters (Rain, Snow, Extreme etc.)",
            "Standard":"-",
            "Metric":"-",
            "Imperial":"-"
         },
         {
            "Parameter":"description",
            "Description":"Weather condition within the group",
            "Standard":"-",
            "Metric":"-",
            "Imperial":"-"
         },
         {
            "Parameter":"icon",
            "Description":"Weather icon id",
            "Standard":"-",
            "Metric":"-",
            "Imperial":"-"
         },
         {
            "Parameter":"rain",
            "Description":"",
            "Standard":"",
            "Metric":"",
            "Imperial":""
         },
         {
            "Parameter":"1h",
            "Description":"Precipitation volume for last hour",
            "Standard":"mm",
            "Metric":"mm",
            "Imperial":"mm"
         },
         {
            "Parameter":"3h",
            "Description":"Precipitation volume for last 3 hours",
            "Standard":"mm",
            "Metric":"mm",
            "Imperial":"mm"
         },
         {
            "Parameter":"snow",
            "Description":"",
            "Standard":"",
            "Metric":"",
            "Imperial":""
         },
         {
            "Parameter":"1h",
            "Description":"Snow volume for last hour",
            "Standard":"mm",
            "Metric":"mm",
            "Imperial":"mm"
         },
         {
            "Parameter":"3h",
            "Description":"Snow volume for last 3 hours",
            "Standard":"mm",
            "Metric":"mm",
            "Imperial":"mm"
         }
      
   

]);

init1()