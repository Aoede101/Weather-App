import "./DayWeather.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTemperatureThreeQuarters,
  faTemperatureQuarter,
  faDroplet,
  faWind,
  faCloud,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons"
import getWeatherIcon from "../../weatherCodes"
import "../../mediaQueries.css"


export default function DayWeather({ weather }) {
  const dailyWeather = weather.daily
  const dailyUnitsWeather = weather.daily_units

  const forecastsArr = []

  for (let i = 0; i < dailyWeather.time.length; i++) {
    const { description, iconText } = getWeatherIcon(
      dailyWeather.weather_code[i],
      "day"
    )
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]

    forecastsArr.push(
      <div className="forecast-item" key={i}>
        <i className={`fa-solid fa-${iconText}`}></i>
        <div className="middle-col">
          <div className="day">
            {weekday[new Date(dailyWeather.time[i]).getDay()].substring(0,3)}
          </div>
          <div className="status">{description}</div>
        </div>
        <div className="temps">
          <div className="max-temp">
            Max : {Math.round(dailyWeather.temperature_2m_max[i])}{" "}
            {dailyUnitsWeather.temperature_2m_max}
          </div>
          <div className="min-temp">
            Min : {Math.round(dailyWeather.temperature_2m_min[i])}{" "}
            {dailyUnitsWeather.temperature_2m_min}
          </div>
        </div>
      </div>
    )
  }
  return (
    <section id="day">
      <div className="line"></div>
      <div className="day-container">
        <h3>Weather Details ..</h3>
        <h2>
          {
            getWeatherIcon(weather.current.weather_code, weather.current.is_day)
              .description
          }
        </h2>
        <div className=" day-item">
          <h4>Temp max</h4>
          <p>
            {Math.round(dailyWeather.temperature_2m_max[1])}
            {dailyUnitsWeather.temperature_2m_max}
          </p>
          <FontAwesomeIcon
            icon={faTemperatureThreeQuarters}
            style={{ color: "#DFA1A1" }}
          />
        </div>
        <div className=" day-item">
          <h4>Temp min</h4>
          <p>
            {Math.round(dailyWeather.temperature_2m_min[1])}
            {dailyUnitsWeather.temperature_2m_min}
          </p>
          <FontAwesomeIcon
            icon={faTemperatureQuarter}
            style={{ color: "#6D97CA" }}
          />
        </div>
        <div className=" day-item">
          <h4>Rain sum</h4>
          <p>
            {Math.round(dailyWeather.rain_sum[1])} {dailyUnitsWeather.rain_sum}
          </p>
          <FontAwesomeIcon icon={faDroplet} />
        </div>
        <div className=" day-item">
          <h4>Cloudy</h4>
          <p>
            {Math.round(weather.current.cloud_cover)}{" "}
            {weather.current_units.cloud_cover}
          </p>
          <FontAwesomeIcon icon={faCloud} />
        </div>
        <div className=" day-item">
          <h4>Wind</h4>
          <p>
            {Math.round(weather.current.wind_speed_10m)}{" "}
            {weather.current_units.wind_speed_10m}
          </p>
          <FontAwesomeIcon icon={faWind} />
        </div>
      </div>
      <div className="sep-line"></div>
      <div className="forecast-container">
        <h3>Weather Forecast...</h3>
        {forecastsArr}
      </div>
    </section>
  )
}
