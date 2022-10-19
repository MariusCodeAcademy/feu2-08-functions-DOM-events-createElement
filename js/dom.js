'use strict';
console.log('dom.js');

const nuorodaIApp = document.getElementById('app');

console.log('nuorodaIApp ===', nuorodaIApp);

nuorodaIApp.style.backgroundColor = 'tomato';

console.log('nuorodaIApp.children ===', nuorodaIApp.children);

const allLiEls = document.querySelectorAll('.listEl');

console.log('allLiEls ===', allLiEls);

// gauti tuos pacius list elementus su getElementsByClassName
