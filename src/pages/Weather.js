import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const API_KEY = '74d17d772d30884a000eaed8624e8309';

  const getWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await axios.get(url)
    .catch(function (error) {
      alert("City not found, please try again");
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    });
    
    setWeather(response.data);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeather();
  };

  return (
    <div className="weather-container">
      <h1>Enter the name of any major city to see the current weather</h1>
      <p>For this project, my goal was to test calling third party API's in React. To do this I call the GET API hosted by openweathermap.org and return the corresponding data to the window. I also added some exception handling to handle 404 and timeout errors from the weather API to ensure the user is aware of the failure.</p>
      <p>To see the code and learn how I design my solutions visit my github page here:</p>
      <a href="https://github.com/rbrassettCode/PortfolioReactApp/blob/main/src/pages/Weather.js" target="_blank" className='footer-text'>
        <i className="fab fa-github social-icon"></i>
         
      </a>
      <br/>
      <form className="form-container" onSubmit={handleSubmit}>
        <input className="city-input" type="text" value={city} onChange={handleCityChange} placeholder="Enter a city" />
        <p/>
        <button className="get-weather-button" type="submit">Get Weather</button>
      </form>
      {weather && (
        <div className="weather-data">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Feels like: {weather.main.feels_like}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
