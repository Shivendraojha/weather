import React, { useState } from 'react';
import './App.css';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = () => {
    // Mock weather data based on the city entered by the user
    const mockWeatherData = {
      name: city,
      weather: [{ description: 'Partly Cloudy' }],
      main: { temp: 25, humidity: 60 },
    };

    // Set the mock weather data to the state
    setWeather(mockWeatherData);
    setError(null);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeatherData}>Get Weather</button>
      </div>
      {error && <div className="error-message">{error}</div>}
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
