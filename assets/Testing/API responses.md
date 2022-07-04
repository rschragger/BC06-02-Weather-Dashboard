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
###fullCurrentWeather.daily[0]
{dt: 1656900000, sunrise: 1656884165, sunset: 1656918749, moonrise: 1656896160, moonset: 1656935640, …}
clouds: 0
dew_point: 3.75
dt: 1656900000
feels_like: {day: 10.86, night: 7.55, eve: 11.33, morn: 4.97}
humidity: 57
moon_phase: 0.15
moonrise: 1656896160
moonset: 1656935640
pop: 0.01
pressure: 1027
sunrise: 1656884165
sunset: 1656918749
temp:
	day: 12.11
	eve: 12.18
	max: 12.73
	min: 7.07
	morn: 7.27
	night: 8.34
[[Prototype]]: Object
uvi: 1.94
weather: Array(1)
0: {id: 800, main: 'Clear', description: 'clear sky', icon: '01d'}
length: 1
[[Prototype]]: Array(0)
	wind_deg: 171
	wind_gust: 9.25
	wind_speed: 5.24


## Notes
moment(1656592676,'X').format('ddd DD/MM/YY h:mm a')

fullCurrentWeather.current.weather[0].icon