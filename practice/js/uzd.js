'use strict';
console.log('uzd.js');

/*  
// prisideti elementam id, class, ir pan pagal poreiki
// panaudoti tiek getElementById tiek querySelector() ar querySelectorAll()

1. pakeisti h1 tektso spalva i tomato <h1>Welcome</h1>

2. padaryti kad fonto storis butu normalus  <h2>Some title</h2>

3. <p>Lorem ipsum dolor si. Irasyti i ji teksta "man pavyko dinamiskai atnaujinti teksta"

4. <li>two</li> padidinti srifto dyti iki 34px

5. paspaudus mygtuka <button>click me</button> pakeisti h1 teksta i 'Pakeiciau su mygtuku'

6. <p class="time">12:45</p> elementui pakeisti teksta i dabartini laika pvz '13:50' ir padaryti pastorinta srifta

7. <li>one</li> istrinti

8. paspaudus <button>make article dark</button> padaryti <article> fona juoda, o teksta balta

9. paspaudus <button>delete first li from list</button> istrinti pirma li el is <ol>

// sunkesnis tiems kas norit extra
10. susikurti masyva su spalvomis red, green, blue, violet, pink, black
10.1 sugeneruoti li elementu stringa is masyvo
10.2 i <ol> elemento vidu ideti ta stringa (olEl.innerHTML = generatedString)
10.3 padaryti kad kiekvienas elementas turetu fono spalva tokia kokia yra irasyta tarp li tagu.

11. <button>change h1 color to blue</button> paspaudus daro tai kas parasyta

12. gauti ir iskonsolinti kiek elementu yra ol saraso elemente. 

13. su js padidinti visu ol li elementu teksto raides i upperCase

14. prie esamos  <h3 class="blog__title">Hello people</h3> prideti teksta '--Naujiena--'

15. prie esamos  <p class="blog__text">Sveiki cia James.</p> prideti "as esu is Londono"

16.  <button>light</button> padaro <article class="blog"> fona juoda o teksta balta

17.  <button>dark</button> padaro <article class="blog"> texta juoda o fona balta

18 <button>destroy</button> istrina <article class="blog">

19. <div class="box-container"></div> i vidu ikelti paragrafa su tekstu "i am dynamic" (innerHTML)

20.  <button>add paragraph</button> paspaudus ivyksta 19ta uzduotis

21. <button>Turn <span>dark</span> mode on</button> paspaudus pakeiciam teksta dark i light

22. <button>Turn <span>dark</span> mode on</button> kiekviena karta paspaudus keiciam teksta dark i light ir atvirksciai
*/

// 4. <li>two</li> padidinti srifto dyti iki 34px
const secondEl = document.getElementById('secondLi');
console.log('secondEl ===', secondEl);
secondEl.style.fontSize = '34px';

// 5. paspaudus mygtuka <button>click me</button> pakeisti h1 teksta i 'Pakeiciau su mygtuku'

const h1El = document.querySelector('h1');
const btn1 = document.getElementById('btn1');

function changeH1Text() {
  h1El.textContent = 'Pakeiciau su mygtuku ';
  // h1El.textContent = h1El.textContent + new Date().toLocaleString('Lt-lt', { timeStyle: 'medium' });
  // h1El.textContent += new Date().toLocaleString('Lt-lt', { timeStyle: 'medium' });
}
// kai paspausiu pelyte and btn1El, ivyks changeH1Text funkcija
btn1.addEventListener('click', changeH1Text);
h1El.addEventListener('click', changeH1Text);

// 13. su js padidinti visu ol li elementu teksto raides i upperCase

// nusitaikyti i visus elementus, gausiu kolekcija arba node list
const numElementsArr = document.querySelectorAll('.numerList > li');
console.log('numElementsArr ===', numElementsArr);
// sukti cikla per visus el
for (let liEl of numElementsArr) {
  //// paimti reiksme, padidinti case , irasyti atgal i elementa
  // console.log(liEl.textContent.toUpperCase());
  liEl.textContent = liEl.textContent.toUpperCase();
}

// for i ciklas
for (let i = 0; i < numElementsArr.length; i++) {
  // let liEl = numElementsArr[i];
  // numElementsArr[i].textContent = numElementsArr[i].textContent.toUpperCase();
}

// 19. <div class="box-container"></div> i vidu ikelti paragrafa su tekstu "i am dynamic" (innerHTML)

const boxContainerEl = document.querySelector('.box-container');
console.log('boxContainerEl ===', boxContainerEl);
const pElHtml = '<p>I am dynamic, Yeeee!!!</p>';

// <elementas i kuri dedam>.innerHTML = <html stringas>
// createAndAddP();

// 20.  <button>add paragraph</button> paspaudus ivyksta 19ta uzduotis
// nusitaikyti i <button>add paragraph</button>
const addBtnEl = document.getElementById('add');
// uzdeti paspaudimo pasiklausyma
addBtnEl.addEventListener('click', createAndAddP);
// paspaudus mes norim prideti nauja p elementa i html
function createAndAddP() {
  // boxContainerEl.innerHTML = boxContainerEl.innerHTML + pElHtml;
  boxContainerEl.innerHTML += pElHtml;
}
// 21. <button>Turn <span>dark</span> mode on</button> paspaudus pakeiciam teksta dark i light

// hoisting -
// 1 ciklas - nuskaitomas visas failas ir ieskoma funckiju deklaravimo
// jei randam jos perkeliamos i failo virsu
// 2 ciklas kodas skaitomas is virsaus i apacia
