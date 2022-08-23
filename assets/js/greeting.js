import {weatherArrEng} from "./objLang.js";

let result = '';

export function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();

    if ((hours >= 6) && (hours < 12)) {
        result = weatherArrEng.hoursM;
        return 'morning';
    }

    if ((hours >= 12) && (hours < 18)) {
        result = weatherArrEng.hoursD;
        return 'afternoon';
    }

    if ((hours >= 18) && (hours < 24)) {
        result = weatherArrEng.hoursE;
        return 'evening';
    }

    if ((hours >= 0) && (hours < 6)) {
        result = weatherArrEng.hoursN;
        return 'night';
    }

    setTimeout(getTimeOfDay, 1000);
}


export function loadMeet() {
    const greeting = document.querySelector('.greeting');

    if ((weatherArrEng.langWeather === 'ru') && (result === 'Ночи')) {
        greeting.textContent = `${weatherArrEng.greetingTR}${result}, `;
    } else {
        greeting.textContent = `${weatherArrEng.greetingT}${result}, `;
    }
        
}

loadMeet();


const name = document.querySelector('.name');

function getLocalStorage() {
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage);

function setLocalStorage() {
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage);