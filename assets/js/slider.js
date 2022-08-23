import { getTimeOfDay } from "./greeting.js";

const backImage = document.querySelector('body').style;

export function getRandomNum() {
    return Math.floor(Math.random() * 20);
}

let randomNum = getRandomNum();

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');


export function getSlideNext() {
    if (Number(randomNum) < 20) {
        randomNum = Number(randomNum) + 1;
        setBg();
    } else {
        randomNum = 1;
        setBg();
    }
}

export function getSlidePrev() {
    if (Number(randomNum) > 1) {
        randomNum = Number(randomNum) - 1;
        setBg();
    } else {
        randomNum = 20;
        setBg();
    }
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);


export function setBg() {
    let timeOfDay = String(getTimeOfDay()).toLowerCase();
    const img = new Image();
    randomNum = String(randomNum).padStart(2, '0');

    if ((String(randomNum).length < 2) || (String(randomNum) === '00')) {
        randomNum = getRandomNum();
        setBg();
    }
        img.src = `https://raw.githubusercontent.com/dimaPolonez/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg`;
        img.onload = () => {      
            backImage.backgroundImage = `url(${img.src})`;
        }
}

setBg();

