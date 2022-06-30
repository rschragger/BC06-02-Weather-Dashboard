on## Sample of Current

### Variable call - fullCurrentWeather.current

{
    "dt": 1656592676,
    "sunrise": 1656544655,
    "sunset": 1656580944,
    "temp": 284.11,
    "feels_like": 283.35,
    "pressure": 1031,
    "humidity": 80,
    "dew_point": 280.8,
    "uvi": 0,
    "clouds": 0,
    "visibility": 10000,
    "wind_speed": 3.6,
    "wind_deg": 130,
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }
    ]
}


## Notes
moment(1656592676,'X').format('ddd DD/MM/YY h:mm a')

fullCurrentWeather.current.weather[0].icon