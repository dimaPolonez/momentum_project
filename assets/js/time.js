import {weatherArrEng} from "./objLang.js";

export function showTime() {
    const time = document.querySelector('.time');
    const options = {hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric'};
    const date = new Date();
    time.textContent = date.toLocaleTimeString(weatherArrEng.timeDate, options);
    setTimeout(showTime, 1000);
    showDate();
}

showTime();


export function showDate() {
    const date = document.querySelector('.date');
    const dateFunc = new Date();
    const options = {weekday: 'long', month: 'long', day: '2-digit'};
    date.textContent = dateFunc.toLocaleDateString(weatherArrEng.timeDate, options);
}

















