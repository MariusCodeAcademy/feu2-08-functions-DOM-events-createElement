'use strict';
console.log('domPr.js');

// 1. pakeisti h1 antrastes texta 'Dynamic Heading' (.textContent = )

const h1El = document.querySelector('#mainHeading');
console.log('h1El ===', h1El);
h1El.textContent = 'Dynamic Heading';

// 2. nustatyti h1 fonto dydi i 57px (style.fontSize = )

// 3. <p id="art__text">Lorem ipsum dolor</p> gauti ir atspausdinti konsolelje sito elemento teksta

// 4. atvaizduoti konsoleje kolekcija arba nodelist is <ul id="colors" class="list"> elemento li elementu.

// 5. nusitaikyti ir pakeisti teksta <p id="art__date">Date</p> i 2022-10-19

// 6. pakeisti paskutinio <ul id="colors" class="list"> elemento spalva i tomato
