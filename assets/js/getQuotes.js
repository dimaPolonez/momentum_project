import {weatherArrEng} from "./objLang.js";

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

const buttonQuote = document.querySelector('.change-quote');

export function getRandomQuotes() {
    return Math.floor(Math.random() * 10);
}

export async function getQuotes() {  
    const quotes = weatherArrEng.quotesEn;
    const res = await fetch(quotes);
    const data = await res.json(); 
    let random = getRandomQuotes();

    quote.textContent =  data[random]['text'];
    author.textContent =  data[random]['author'];

  }
getQuotes();


buttonQuote.addEventListener('click', getQuotes);