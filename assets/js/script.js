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
  const div1 = document.querySelector('div');
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
  list1.innerText = '';
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

const generateTable = function () {
  const table = document.getElementById('tableArea');

  const newTable = document.createElement('table');
  newTable.setAttribute('border', '1px', 'solid', 'black');
  const tHead = document.createElement('thead');
  const headTr = document.createElement('tr');
  const tBody = document.createElement('tbody');

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
    const bodyTd1 = document.createElement('td');
    const img = document.createElement('img');
    const bodyTd2 = document.createElement('td');
    const bodyTd3 = document.createElement('td');
    const bodyTd4 = document.createElement('td');

    img.src =
      'https://media.istockphoto.com/id/1222357475/it/vettoriale/icona-di-anteprima-dellimmagine-segnaposto-immagine-per-la-progettazione-di-siti-web-o.jpg?s=612x612&w=0&k=20&c=Fq_GEHrjqNWyG1N_JQbA1WtVGeeE5UCvgpwNv_u_MPk=';
    img.alt = 'Product image';
    img.style.width = '50%';
    bodyTd1.style.width = '20%';
    bodyTd2.innerText = 'nome del prodotto';
    bodyTd3.innerText = 'quantità del prodotto';
    bodyTd4.innerText = 'prezzo del prodotto';

    bodyTr.appendChild(bodyTd1);
    bodyTd1.appendChild(img);
    bodyTr.appendChild(bodyTd2);
    bodyTr.appendChild(bodyTd3);
    bodyTr.appendChild(bodyTd4);
    tBody.appendChild(bodyTr);
  }
  newTable.appendChild(tBody);
};
generateTable();

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function () {};

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {};
