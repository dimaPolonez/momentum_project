import playList from './playList.js';
import {weatherArrEng} from "./objLang.js";

const mediaPlay = document.querySelector('.play');
const mediaNext = document.querySelector('.play-next');
const mediaPrev = document.querySelector('.play-prev');
const notList = document.querySelector('.notList').style;


const ulList = document.querySelector('.play-list');
const playNow = document.querySelector('.play-now');
const progressDuration = document.querySelector('.progress-duration');
const progressCurrent = document.querySelector('.progress-current');
const progress = document.querySelector(".progress").style;
const timeline = document.querySelector(".timeline");
const progressBar = document.querySelector(".progress-bar");
const volumeBar = document.querySelector(".volume");
const player = document.querySelector(".player").style;

const progress2 = document.querySelector(".progress2").style;
const timeline2 = document.querySelector(".timeline2");

const volume = document.querySelector(".icon-vol");

let volNum = false;


playList.forEach((track) => {
    const li = document.createElement('li');
    li.textContent = track['title'];
    ulList.append(li);
})


timeline.addEventListener("click", e => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
}, false);

timeline2.addEventListener("click", e => {
    volNum = true;
    notVolume ();
    const volMove = window.getComputedStyle(timeline2).width;
    const newVolume = e.offsetX / parseInt(volMove);
    audio.volume = newVolume;
    progress2.width = newVolume * 100 + '%';
}, false);



function notVolume () {
    if (volNum === false) {
        volume.classList.add('icon-not-vol');
        audio.volume = 0;
        progress2.width = 0 + '%';
        volNum = true;
    } else if (volNum === true) {
        volume.classList.remove('icon-not-vol');
        volume.classList.add('icon-volume');
        audio.volume = 0.5;
        progress2.width = 50 + '%';
        volNum = false;
    }
}

volume.addEventListener('click', notVolume);


let playNum = 0;
let isPlay = false;
const audio = new Audio();
audio.currentTime = 0;
audio.src = playList[playNum].src;

export function playAudio() {
    if (isPlay === false) {
        setInterval(() => {
            progress.width = audio.currentTime / audio.duration * 100 + "%";
            progressCurrent.textContent = getTimeCodeFromNum(
                audio.currentTime
            ) + ' /' + '\u00A0';
            progressDuration.textContent = getTimeCodeFromNum(
                audio.duration
            );
            if (audio.currentTime === audio.duration) {
                nextAudio();
            }
        }, 1000);
        audio.play();
        ulList.style.display = 'block';
        timeline.style.display = 'block';
        progressBar.style.display = 'flex';
        volumeBar.style.display = 'flex';
        notList.opacity = '0.6';
        notList.background = 'black';
        playNow.textContent = weatherArrEng.mediaPlay + playList[playNum]['title'];
        mediaPlay.classList.add('pause');
        mediaNext.addEventListener('click', nextAudio);
        mediaPrev.addEventListener('click', prevAudio);
        isPlay = true;
    } else if (isPlay === true) {
        audio.pause();
        playNow.textContent = weatherArrEng.mediaPlay + playList[playNum]['title'];
        mediaPlay.classList.remove('pause');
        mediaPlay.classList.add('play');
        isPlay = false;
    }
}


function nextAudio() {
    if (Number(playNum) < 3) {
        playNum = Number(playNum) + 1;
        audio.src = playList[playNum].src;
        isPlay = false;
        playAudio();
    } else {
        playNum = 0;
        audio.src = playList[playNum].src;
        isPlay = false;
        playAudio();
    }
}

function prevAudio() {
    if (Number(playNum) > 0) {
        playNum = Number(playNum) - 1;
        audio.src = playList[playNum].src;
        isPlay = false;
        playAudio();
    } else {
        playNum = 3;
        audio.src = playList[playNum].src;
        isPlay = false;
        playAudio();
    }
}

mediaPlay.addEventListener('click', playAudio);


function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
        seconds % 60
    ).padStart(2, 0)}`;
}
