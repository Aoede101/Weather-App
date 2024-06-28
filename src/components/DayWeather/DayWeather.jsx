import { useEffect, useState } from "react"
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


export default function DayWeather({ weather }) {
  const forcast = weather.forecast
  const today = forcast[1]  
  return (
    <section id="day">
      <div className="line"></div>
      <div className="day-container">
        <h3>Weather Details ..</h3>
        <h2>thunderstorm with light drizzle</h2>
        <div className=" day-item">
          <h4>Temp max</h4>
          <p>19°</p>
          <FontAwesomeIcon
            icon={faTemperatureThreeQuarters}
            style={{ color: "#DFA1A1" }}
          />
        </div>
        <div className=" day-item">
          <h4>Temp min</h4>
          <p>19°</p>
          <FontAwesomeIcon
            icon={faTemperatureQuarter}
            style={{ color: "#6D97CA" }}
          />
        </div>
        <div className=" day-item">
          <h4>Humaidity</h4>
          <p>19°</p>
          <FontAwesomeIcon icon={faDroplet} />
        </div>
        <div className=" day-item">
          <h4>Cloudy</h4>
          <p>19°</p>
          <FontAwesomeIcon icon={faCloud} />
        </div>
        <div className=" day-item">
          <h4>Wind</h4>
          <p>19°</p>
          <FontAwesomeIcon icon={faWind} />
        </div>
      </div>
      <div className="sep-line"></div>
      <div className="forecast-container">
        <h3>Weather Forecast...</h3>
        <div className="forecast-item">
          <FontAwesomeIcon icon={faSnowflake} />
          <div className="middle-col">
            <div className="day">Thu</div>
            <div className="status">Snow</div>
          </div>
          <div className="temps">
            <div className="max-temp">Max : 19°</div>
            <div className="min-temp">Min : 19°</div>
          </div>
        </div>
        <div className="forecast-item">
          <FontAwesomeIcon icon={faSnowflake} />
          <div className="middle-col">
            <div className="day">Thu</div>
            <div className="status">Snow</div>
          </div>
          <div className="temps">
            <div className="max-temp">Max : 19°</div>
            <div className="min-temp">Min : 19°</div>
          </div>
        </div>
        <div className="forecast-item">
          <FontAwesomeIcon icon={faSnowflake} />
          <div className="middle-col">
            <div className="day">Thu</div>
            <div className="status">Snow</div>
          </div>
          <div className="temps">
            <div className="max-temp">Max : 19°</div>
            <div className="min-temp">Min : 19°</div>
          </div>
        </div>
        <div className="forecast-item">
          <FontAwesomeIcon icon={faSnowflake} />
          <div className="middle-col">
            <div className="day">Thu</div>
            <div className="status">Snow</div>
          </div>
          <div className="temps">
            <div className="max-temp">Max : 19°</div>
            <div className="min-temp">Min : 19°</div>
          </div>
        </div>
        <div className="forecast-item">
          <FontAwesomeIcon icon={faSnowflake} />
          <div className="middle-col">
            <div className="day">Thu</div>
            <div className="status">Snow</div>
          </div>
          <div className="temps">
            <div className="max-temp">Max : 19°</div>
            <div className="min-temp">Min : 19°</div>
          </div>
        </div>
      </div>
    </section>
  )
}
