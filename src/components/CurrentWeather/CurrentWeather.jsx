import { useEffect, useState } from "react"
import dateFormat, { masks } from "dateformat"
import getWeatherIcon from "../../weatherCodes"
import "./CurrentWeather.css"

export default function CurrentWeather({ weather, location }) {
  const current = weather.current
  const currentUnits = weather.current_units
  const weatherIcon = getWeatherIcon(current.weather_code, current.is_day)

  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearTimeout(timerId)
    }
  }, [date])

  masks.hammerTime = "HH:MM - ddd, mmmm d"
  const time = dateFormat(date, "hammerTime")

  return (
    <section id="current">
      <div className="degree">
        {Math.round(current.temperature_2m)}
        {currentUnits.temperature_2m}
      </div>
      <div className="city">{location.city}</div>
      <div className="time">{time}</div>
      <div className="status">
        <i className={`fa-solid fa-${weatherIcon.iconText}`}></i>
      </div>
    </section>
  )
}
