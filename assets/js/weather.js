import {weatherArrEng} from "./objLang.js";

const weatherIcon = document.querySelector('.weather-icon');
const weatherTemp = document.querySelector('.temperature');
const weatherDeskr = document.querySelector('.weather-description');

const weatherCity = document.querySelector('.city');

const weatherWind = document.querySelector('.wind');
const weatherHum = document.querySelector('.humidity');

export async function getWeather() {
  try {
    if ((String(weatherCity.value) === 0) || (weatherCity.value === 'Minsk') || (weatherCity.value === 'Минск')){
      weatherCity.value = weatherArrEng.tWeatherCity;
    }
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity.value}&lang=${weatherArrEng.langWeather}&appid=f38a6ce37ed453eb180ee76b6c7c491c&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    weatherTemp.textContent = `${Math.ceil(data.main.temp)}°C`;
    weatherDeskr.textContent = data.weather[0].description;
    weatherWind.textContent = `${weatherArrEng.weatherWindT1}${Math.floor(data.wind.speed)}${weatherArrEng.weatherWindT2}`;
    weatherHum.textContent = `${weatherArrEng.weatherHumT}${Math.floor(data.main.humidity)}%`;
  } catch {
    alert(`${weatherCity.value} ${weatherArrEng.errorCity}`);
    weatherCity.value = weatherArrEng.tWeatherCity;
    getWeather();

  }
}


weatherCity.addEventListener('change', getWeather);

  function getLocalStorageWeather() {
    if (localStorage.getItem('weatherCity')) {
      weatherCity.value = localStorage.getItem('weatherCity');
      getWeather();
    }
  }
  window.addEventListener('load', getLocalStorageWeather);
  
  function setLocalStorageWeather() {
    localStorage.setItem('weatherCity', weatherCity.value);
  }
  window.addEventListener('beforeunload', setLocalStorageWeather);