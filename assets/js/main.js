/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


*/
/**in base alla scelta della difficolta, stampa una griglia
 * 
 * @param {string} difficult 
 */
function difficultChooser(difficult) {

    if (difficult === "easy") {
        //document.getElementById('level').remove()
        //document.querySelector('button').remove()
        document.getElementById('container').innerHTML = ''
        document.getElementById('title').innerHTML = "Facile"
        for (let i = 1; i <= 100; i++) {

            document.getElementById('container').insertAdjacentHTML('beforeend', `<div class="box easy">${i}</div>`)

        }

    } else if (difficult === "medium") {
        //document.getElementById('level').remove()
        //document.querySelector('button').remove()
        document.getElementById('container').innerHTML = ''
        document.getElementById('title').innerHTML = "Medio"
        for (let i = 1; i <= 81; i++) {
            document.getElementById('container').insertAdjacentHTML('beforeend', `<div class="box medium">${i}</div>`)

        }
    } else if ((difficult === "difficult")) {
        //document.getElementById('level').remove()
        //document.querySelector('button').remove()
        document.getElementById('container').innerHTML = ''
        document.getElementById('title').innerHTML = "Difficile"
        for (let i = 1; i <= 49; i++) {
            document.getElementById('container').insertAdjacentHTML('beforeend', `<div class="box difficult">${i}</div>`)

        }
    }
}

document.querySelector('button').addEventListener('click', function () {

    let userChoose = document.getElementById('level').value

    if (userChoose === "easy") {


        difficultChooser("easy")

    } else if (userChoose === "medium") {
        difficultChooser("medium")

    } else if ((userChoose === "difficult")) {
        difficultChooser("difficult")

    } else {
        alert('Scegli una difficoltà')
    }


    let boxElements = document.getElementsByClassName('box')
    //console.log(boxElements);

    for (let i = 0; i < boxElements.length; i++) {
        let boxElement = boxElements[i];
        //console.log(boxElement);

        boxElement.addEventListener('click', function () {
            boxElement.classList.toggle('green')

            console.log(i + 1);

        })
    }
})


/*Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: i funghi magici.
Attenzione: nella stessa cella può essere posizionato al massimo un fungo, perciò nell’array dei funghi non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
- abbiamo calpestato una fungo
- la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una fungo o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono funghi).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una fungo.
*/

function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  //Il computer deve generare 16 numeri casuali

  
 

  function mushroomsGenerator(cellNumber) {
    let mushroomsArray=[]

  while (mushroomsArray.length<16 ) {
    
    let randomNumber=getRndNumber(1, cellNumber)

    if (!mushroomsArray.includes(randomNumber)) {
        mushroomsArray.push(randomNumber)
    }
    
  }
  return mushroomsArray
  }

console.log(mushroomsGenerator(81));