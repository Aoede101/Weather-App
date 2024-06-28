import { useEffect, useState } from "react"
import dateFormat, { masks } from "dateformat"

export default function CurrentWeather({ weather }) {
  const [date, setDate] = useState(new Date())
  /*  useEffect(() => {
    const timerId = setTimeout(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearTimeout(timerId)
    }
  }, [date]) */

  masks.hammerTime = "HH:MM - ddd, mmmm d"
  const time = dateFormat(date, "hammerTime")
  const tempCel = weather.current.temperature
  return (
    <section id="current">
      <div className="degree">{tempCel}°</div>
      <div className="city">{weather.location.name.split(",")[0]}</div>
      <div className="time">{time}</div>
      <div className="status">
        <i className="fa-solid fa-cloud"></i>
      </div>
    </section>
  )
}
