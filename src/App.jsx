import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import CurrentWeather from "./components/CurrentWeather/CurrentWeather"
import DayWeather from "./components/DayWeather/DayWeather"
import { useState, useEffect } from "react"
import { CirclesWithBar } from "react-loader-spinner"

function App() {
  const [location, setLocation] = useState({})
  const [weather, setWeather] = useState({
    timezone: "",
  })

  async function getLocation() {
    const response = await fetch("https://ipapi.co/json/")
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`
      throw new Error(message)
    }
    const data = await response.json()
    setLocation({
      city: data.city,
      lat: data.latitude,
      lon: data.longitude,
      timezone: data.timezone,
    })
  }
  async function getWeather() {
    const timezone = location.timezone.split("/")
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lat}&current=temperature_2m,relative_humidity_2m,is_day,rain,weather_code,cloud_cover,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,rain_sum&timezone=${timezone[0]}%2F${timezone[1]}&past_days=1&forecast_days=4`
    )
    const data = await response.json()
    setWeather(data)
  }

  useEffect(() => {
    getLocation()
  }, [])

  useEffect(() => {
    if (location.city) getWeather()
  }, [location])


  return weather.timezone ? (
    <>
      <NavBar />
      <main>
        <CurrentWeather weather={weather} location={location} />
        <DayWeather weather={weather} />
      </main>
    </>
  ) : (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        translate: "-50% -50%",
      }}
    >
      <CirclesWithBar
        height="150"
        width="150"
        color="#fff"
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  )
}

export default App
