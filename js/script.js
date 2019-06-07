/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/* Going for exceeds, but if it doesn't get it that's okay.
  however I'd like to know what I could've done better. 
  */

/***
  This is an array of objects that holds the quote, source, citation and tag
  which describe what kind of quote it is.
***/

let quotes = [
  {
    quote: "Don't cry because it's over, smile because it happened.",
    source: " ― Dr. Seuss",
    citation: "Book",
    tags: "Inspirational"
  },
  {
    quote:
      "My style is unique and random. But I think it's important that it still makes sense.",
    source: " ― Jess Glynne",
    tags: "Unique"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    source: " ― Oscar Wilde",
    citation: "Book",
    tags: "Motivational"
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: " ― Albert Einstein",
    year: 1946,
    tags: "Educational"
  },
  {
    quote: "So many books, so little time.",
    source: " ― Frank Zappa",
    tags: "Humor"
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    source: " ― Bernard M. Baruch",
    tags: "Motivational"
  },
  {
    quote: "A room without books is like a body without a soul.",
    source: " ― Marcus Tullius Cicero",
    citation: "Ancient Rome",
    tags: "Historical"
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    source: " ― Dr. Seuss",
    citation: "Book",
    tags: "Inspirational"
  }
];
console.log(quotes);

/// Function that creates and random number between 1 and the length of the quotes array

function getRandomQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  let randomNum = quotes[random];

  return randomNum;
}

console.log(getRandomQuote());

/* stores the getQuote function to use in the Print quote Function
  prints the quote inside the div in the html to display the random quote
*/

function printQuote() {
  let getQuote = getRandomQuote();

  let html = "";
  html += '<p class="quote"> ' + getQuote.quote + "</p>";
  html += '<p class="source"> ' + getQuote.source;
  ("</p>");
  html += '<p class="tag"> ' + getQuote.tags;

  if (getQuote.citation) {
    html += '<span class="citation">' + getQuote.citation + "</span>";
  }
  if (getQuote.year) {
    html += '<span class="year">' + getQuote.year + "</span>";
  }
  html += "</p>";
  let div = document.getElementById("quote-box");
  div.innerHTML = html;
  console.log(html);
}

/* When the "Show another quote" button is clicked, the event listener
below will be triggered, and it will call, or "invoke", the `printQuote`
function.
*/

function randomBackgroundColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);

  let rgbColor = "rgb(" + x + "," + y + "," + z + ")";

  return (document.body.style.background = rgbColor);
}

/* this function wraps the printQuote and the
    randomBackgroundColor function and allows you to call both
    at the same time which can be placed anywhere you like.
*/
function changeItAll() {
  randomBackgroundColor();
  printQuote();
}

// button allows you to click to change color and change quote randomly.
let buttonClick = document.getElementById("loadQuote");
buttonClick.addEventListener("click", changeItAll, false);

// Interval is set at 2500ms, it changes color and quote randomly without the use of a button

let interval = window.setInterval(changeItAll, 2500);
