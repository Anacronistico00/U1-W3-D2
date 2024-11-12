/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function () {
  const title = document.querySelector('h1');
  title.innerText = 'Ciao sono io';
};
changeTitle();

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */

const addClassToTitle = function () {
  const title = document.querySelector('h1');
  title.classList.add('myHeading');
};
addClassToTitle();

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */

const changePcontent = function () {
  const paragraphs = document.querySelectorAll('div p');
  paragraphs.forEach((element) => {
    element.innerText = 'Ecco il testo di tutti i p cambiato';
  });
};
changePcontent();

/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */

const changeUrls = function () {
  const links = document.querySelectorAll('a:not(footer a)');

  links.forEach((element) => {
    element.href = 'https://www.google.com';
  });
};

changeUrls();

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

const addToTheSecond = function () {
  const list2 = document.getElementById('secondList');
  const newLi = document.createElement('li');
  newLi.innerText = '4th element';
  list2.appendChild(newLi);
};
addToTheSecond();

/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */

const addParagraph = function () {
  const div1 = document.querySelectorAll('div')[0];
  const newP = document.createElement('p');
  newP.innerText = 'Ecco il nuovo p generato da JS';
  div1.appendChild(newP);
};

addParagraph();

/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const hideFirstUl = function () {
  const list1 = document.getElementById('firstList');
  list1.style.display = 'none';
};
hideFirstUl();

/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */

const paintItGreen = function () {
  const listbg = document.querySelectorAll('ul');
  listbg.forEach((element) => {
    element.style.backgroundColor = 'green';
  });
};
paintItGreen();

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

const makeItClickable = function () {
  const byeByeH1 = document.querySelector('h1');
  byeByeH1.addEventListener('click', function () {
    byeByeH1.textContent = byeByeH1.textContent.slice(0, -1);
  });
};

makeItClickable();

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */

const revealFooterLink = function () {
  const footerAlert = document.querySelector('footer');
  const footerLink = document.querySelector('footer a');
  footerAlert.addEventListener('click', function () {
    alert(footerLink.href);
  });
};

revealFooterLink();

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
const shoppingCart = [
  {
    image: 'https://m.media-amazon.com/images/I/81ymStt-9cL._AC_SX522_.jpg',
    name: 'MSI MAG B650 TOMAHAWK WIFI',
    quantity: 1,
    price: 199.98,
  },
  {
    image: 'https://m.media-amazon.com/images/I/71KltQ5kWsL._AC_SX679_.jpg',
    name: 'Phanteks XT Pro Ultra',
    quantity: 1,
    price: 79.99,
  },
  {
    image: 'https://m.media-amazon.com/images/I/71VQrQXksJL._AC_SX522_.jpg',
    name: 'ZOTAC RTX 4070 Super 12GB',
    quantity: 1,
    price: 599.87,
  },
  {
    image: 'https://m.media-amazon.com/images/I/51HqC0rU9HL._AC_SX679_.jpg',
    name: 'AMD Ryzen 7 7800X3D',
    quantity: 1,
    price: 520.04,
  },
  {
    image: 'https://m.media-amazon.com/images/I/612ptcpN5cL._SX522_.jpg',
    name: 'Thermalright AQUA ELITE 360 V3',
    quantity: 1,
    price: 79.93,
  },
];
const tBody = document.createElement('tbody');
const newTable = document.createElement('table');
newTable.setAttribute('border', '1px', 'solid', 'black');

const generateTable = function () {
  const table = document.getElementById('tableArea');

  const tHead = document.createElement('thead');
  const headTr = document.createElement('tr');

  const thHeaders = ['immagine', 'Nome prodotto', 'Quantità', 'Prezzo'];
  thHeaders.forEach((element) => {
    const headTh = document.createElement('th');
    headTh.innerText = element;
    headTr.appendChild(headTh);
  });
  tHead.appendChild(headTr);
  newTable.appendChild(tHead);
  table.appendChild(newTable);

  for (let i = 0; i < 5; i++) {
    const bodyTr = document.createElement('tr');
    const Td1 = document.createElement('td');
    const img = document.createElement('img');
    const Td2 = document.createElement('td');
    const Td3 = document.createElement('td');
    const Td4 = document.createElement('td');

    img.src = shoppingCart[i].image;
    img.alt = 'Product image';
    img.style.width = '50%';
    Td1.style.width = '10%';
    Td2.innerText = shoppingCart[i].name;
    Td3.innerText = shoppingCart[i].quantity;
    Td4.innerText = shoppingCart[i].price;

    bodyTr.appendChild(Td1);
    Td1.appendChild(img);
    bodyTr.appendChild(Td2);
    bodyTr.appendChild(Td3);
    bodyTr.appendChild(Td4);
    tBody.appendChild(bodyTr);
  }
  newTable.appendChild(tBody);
};
generateTable();

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const newobject = [
  {
    image: 'https://m.media-amazon.com/images/I/71B52QCcqEL._AC_SX522_.jpg',
    name: 'Lexar NM790 SSD Interno 1TB',
    quantity: 2,
    price: 97.99,
  },
];

const addRow = function () {
  const bodyTr = document.createElement('tr');
  const Td1 = document.createElement('td');
  const img = document.createElement('img');
  const Td2 = document.createElement('td');
  const Td3 = document.createElement('td');
  const Td4 = document.createElement('td');

  img.src = newobject[0].image;
  img.alt = 'Product image';
  img.style.width = '50%';
  img.style.height = '10%';
  Td1.style.width = '10%';
  Td2.innerText = newobject[0].name;
  Td3.innerText = newobject[0].quantity;
  Td4.innerText = newobject[0].price;

  bodyTr.appendChild(Td1);
  Td1.appendChild(img);
  bodyTr.appendChild(Td2);
  bodyTr.appendChild(Td3);
  bodyTr.appendChild(Td4);
  tBody.appendChild(bodyTr);
  newTable.appendChild(tBody);
};

addRow();
/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {
  const hideImg = document.querySelectorAll('img');

  hideImg.forEach((element) => {
    element.style.display = 'none';
  });
};

// hideAllImages();

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
console.log(getRandomColor());

const changeColorWithRandom = function () {
  const randomH2Color = document.getElementById('changeMyColor');

  randomH2Color.addEventListener('click', function () {
    const randomColor = getRandomColor();
    randomH2Color.style.color = randomColor;
  });
};
changeColorWithRandom();
/* EXTRA ESERCIZIO 16
      Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
    */

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'u'];

const deleteVowels = function () {
  const allElements = document.querySelectorAll('h1,h2,h3,p,li,th,td,a');

  allElements.forEach((element) => {
    if (element.tagName === 'TD' && element.querySelector('img')) {
      // Se sì, non modificare il testo in questo elemento
      return;
    }
    const toArray = Array.from(element.textContent);
    const filtered = toArray
      .filter((charElement) => !vowels.includes(charElement))
      .join('');
    element.textContent = filtered;
  });
};
deleteVowels();
