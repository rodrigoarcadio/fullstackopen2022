import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

function Weather({ capital }) {
  const [weather, setWeather] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;

  const urlWeather = `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`;
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`
      )
      .then((response) => {
        const { temperature, weather_icons, wind_speed, wind_dir } =
          response.data.current;
        setWeather({
          temperature,
          weather_icons,
          wind_speed,
          wind_dir,
        });
      });
  }, [api_key, capital]);
  if (capital.length > 0)
    return (
      <div>
        <h2>Weather in {capital}</h2>
        <div>
          <strong>Temperature: </strong>
          {weather.temperature} Celsius
        </div>
        <img src={weather.weather_icons}></img>
        <div>
          <strong>wind: </strong>
          {weather.wind_speed} direction: {weather.wind_dir}
        </div>
      </div>
    );
}

export default Weather;
