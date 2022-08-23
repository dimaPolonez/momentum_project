import {weatherArrEng} from "./objLang.js";
import {getWeather} from "./weather.js";
import {showDate} from "./time.js";
import {loadMeet} from "./greeting.js";
import {getTimeOfDay} from "./greeting.js";
import {getQuotes} from "./getQuotes.js";

const options = document.querySelector(".options-block").style;
const overlay = document.querySelector(".options-overlay");
const buttonOptions = document.querySelector(".icon-options");
const closeOptions = document.querySelector(".close-options");
const okOptions = document.querySelector(".ok-options");
const defaultOptions = document.querySelector(".reset-options");
const namePlace = document.querySelector('.name');

const langRu = document.querySelector(".lang-ru");
const langEng = document.querySelector(".lang-eng");

const time = document.querySelector(".switch-btn-time");
const date = document.querySelector(".switch-btn-date");
const meet = document.querySelector(".switch-btn-meet");
const quote = document.querySelector(".switch-btn-quote");
const weather = document.querySelector(".switch-btn-weather");
const media = document.querySelector(".switch-btn-media");

const blockTime = document.querySelector(".time").style;
const blockDate = document.querySelector(".date").style;
const blockMeet = document.querySelector(".greeting-container").style;
const blockQuote = document.querySelector(".blockQuote").style;
const blockWeather = document.querySelector(".weather").style;
const blockMedia = document.querySelector(".notList").style;

const hSelect = document.querySelector(".hSelect");
const hHide = document.querySelector(".hHide");

const timeT = document.querySelector(".opt-vis-time");
const dateT = document.querySelector(".opt-vis-date");
const meetT = document.querySelector(".opt-vis-meet");
const quoteT = document.querySelector(".opt-vis-quote");
const weatherT = document.querySelector(".opt-vis-weather");
const mediaT = document.querySelector(".opt-vis-media");

function ruOptions() {
  langRu.style.opacity = '1';
  langEng.style.opacity = '0.3';

  weatherArrEng.langWeather = 'ru';
  weatherArrEng.weatherWindT1 = 'Скорость ветра: ';
  weatherArrEng.weatherWindT2 = ' м/с';
  weatherArrEng.weatherHumT = 'Влажность: ';
  weatherArrEng.tWeatherCity = 'Минск';
  getWeather();



  weatherArrEng.timeDate = 'ru-RU';
  showDate();

  weatherArrEng.hoursM = 'Утра';
  weatherArrEng.hoursD = 'Дня';
  weatherArrEng.hoursE = 'Вечера';
  weatherArrEng.hoursN = 'Ночи';
  weatherArrEng.greetingT = 'Доброго ';
  weatherArrEng.greetingTR = 'Доброй ';
  weatherArrEng.errorCity = ' город не найден'
  namePlace.placeholder = '[Введите имя]';
  getTimeOfDay();

  loadMeet();

  weatherArrEng.quotesEn = './assets/js/data-ru.json';
  getQuotes();
  weatherArrEng.mediaPlay = 'Играет: ';

  hSelect.textContent = 'Выберите язык приложения';
  hHide.textContent = 'Скрыть блоки';
  timeT.textContent = 'Время';
  dateT.textContent = 'Дата';
  meetT.textContent = 'Приветствие';
  quoteT.textContent = 'Цитата дня';
  weatherT.textContent = 'Прогноз погоды';
  mediaT.textContent = 'Аудиоплеер';
  okOptions.textContent = 'Применить';
  defaultOptions.textContent = 'По умолчанию';

}

langRu.addEventListener("click", ruOptions);

function engOptions() {
  langEng.style.opacity = '1';
  langRu.style.opacity = '0.3';

  weatherArrEng.langWeather = 'en';
  weatherArrEng.weatherWindT1 = 'Wind speed: ';
  weatherArrEng.weatherWindT2 = ' m/s';
  weatherArrEng.weatherHumT = 'Humidity: ';
  weatherArrEng.tWeatherCity = 'Minsk';
  getWeather();
  

  weatherArrEng.timeDate = 'en-US';
  showDate();

  weatherArrEng.hoursM = 'Morning';
  weatherArrEng.hoursD = 'Day';
  weatherArrEng.hoursE = 'Evening';
  weatherArrEng.hoursN = 'Night';
  weatherArrEng.greetingT = 'Good ';
  weatherArrEng.greetingTR = 'Good ';
  weatherArrEng.errorCity = 'city is not found';
  namePlace.placeholder = '[Enter name]';
  getTimeOfDay();
  loadMeet();

  weatherArrEng.quotesEn = './assets/js/data.json';
  getQuotes();
  weatherArrEng.mediaPlay = 'Playing: ';

  hSelect.textContent = 'Select the application language';
  hHide.textContent = 'Hide Blocks';
  timeT.textContent = 'Time';
  dateT.textContent = 'Date';
  meetT.textContent = 'Greeting';
  quoteT.textContent = 'Quote of the day';
  weatherT.textContent = 'Weather forecast';
  mediaT.textContent = 'Audio Player';
  okOptions.textContent = 'Apply';
  defaultOptions.textContent = 'By default';

}

langEng.addEventListener("click", engOptions);




export function onOptions() {
  options.visibility = 'visible';
  options.top = 5 + '%';
  overlay.style.visibility = 'visible';

}

export function offOptions() {
  options.visibility = 'hidden';
  options.top = -115 + '%';
  overlay.style.visibility = 'hidden';


}


buttonOptions.addEventListener("click", onOptions);

overlay.addEventListener("click", offOptions);

closeOptions.addEventListener("click", offOptions);

let btnObject = {
  time: false,
  date: false,
  meet: false,
  quote: false,
  weather: false,
  media: false,
}


function hideElement(element, object, block) {

  if (btnObject[object] === false) {
    element.classList.add('switch-on');
    block.visibility = 'hidden';
    btnObject[object] = true;

  } else if (btnObject[object] === true) {
    element.classList.remove('switch-on');
    block.visibility = 'visible';
    btnObject[object] = false;
  }

}


time.addEventListener("click", () => {
  hideElement(time, 'time', blockTime);
});

date.addEventListener("click", () => {
  hideElement(date, 'date', blockDate);
});

meet.addEventListener("click", () => {
  hideElement(meet, 'meet', blockMeet);
});

quote.addEventListener("click", () => {
  hideElement(quote, 'quote', blockQuote);
});

weather.addEventListener("click", () => {
  hideElement(weather, 'weather', blockWeather);
});

media.addEventListener("click", () => {
  hideElement(media, 'media', blockMedia);
});





function resetOptions() {
  btnObject = {
    time: true,
    date: true,
    meet: true,
    quote: true,
    weather: true,
    media: true,
  }
  langEng.click();
  time.click();
  date.click();
  meet.click();
  quote.click();
  weather.click();
  media.click();
}

defaultOptions.addEventListener("click", resetOptions);

function setLocalStorageOptions() {
  let arrayOptions = JSON.stringify(btnObject);
  let langV = weatherArrEng.langWeather;
  localStorage.setItem('options', arrayOptions);
  localStorage.setItem('lang', langV);
  closeOptions.click();
}

okOptions.addEventListener("click", setLocalStorageOptions);

function getLocalStorageOptions() {
  if (localStorage.getItem('options')) {
    btnObject = JSON.parse(localStorage.getItem("options", options.value));
    time.click();
    time.click();
    date.click();
    date.click();
    meet.click();
    meet.click();
    quote.click();
    quote.click();
    weather.click();
    weather.click();
    media.click();
    media.click();
  }
  if (localStorage.getItem('lang') === 'ru') {
    langRu.click();
  } else if (localStorage.getItem('lang') === 'en') {
    langEng.click();
  }
}
window.addEventListener('load', getLocalStorageOptions);





