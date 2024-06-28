import { fetchWeatherApi } from 'openmeteo';

export default async function getLocation() {
  const response = await fetch("http://ip-api.com/json/")
  const data = await response.json()
  return (data.value)
}
async function getWeather() {
  const params = {
    "latitude": location.lad,
    "longitude": location.lon,
    "current": ["temperature_2m", "relative_humidity_2m", "rain", "weather_code", "cloud_cover", "wind_speed_10m"],
    "daily": ["weather_code", "temperature_2m_max", "temperature_2m_min"],
    "timezone": location.timezone,
    "past_days": 1
  };
  console.log(`weather is called and params are :`)
  console.log(params)
  return params
}


export async function getWeatherData() {
  const location = await getLocation()
  const weatherData = await getWeather(location)
  console.log(location)
  console.log(weatherData)
}