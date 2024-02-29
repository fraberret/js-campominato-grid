/*Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: i funghi magici.
Attenzione: nella stessa cella può essere posizionato al massimo un fungo, perciò nell’array dei funghi non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
- abbiamo calpestato una fungo
- la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una fungo o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono funghi).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una fungo.



### Milestone 1

// Generare massimo 16 funghi in questi range relativi al livello scelto
// 100 -> min: 1 max: 100 | Totale funghi 16
// 81 -> min: 1 max: 81 |  Totale funghi 16
// 49 -> min: 1 max: 49 |  Totale funghi 16

### Milestone 2

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una fungo - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.



### Milestone 3

La partita termina quando il giocatore clicca su una fungo o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono funghi).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una fungo.

**Steps**

- keep the count of the clicked cells
- end the game
  - quando il numbero di celle cliccate é uguale al numero di celle totali meno il numero dei funghi hai vinto il gioco.
  - prevent the user from clicking again after the game is over
 */

/** genera un numero casuale tra i valori indicati
* 
* @param {number} min 
* @param {number} max 
* @returns {number}
*/
function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//### Milestone 1
/** genera una lista di 16 numeri fino al massimo valore indicato
 * 
 * @param {number} cellNumber 
 * @returns {Array}
 */
function mushroomsGenerator(cellNumber) {
    let mushroomsArray = []

    while (mushroomsArray.length < 16) {

        let randomNumber = getRndNumber(1, cellNumber)

        if (!mushroomsArray.includes(randomNumber)) {
            mushroomsArray.push(randomNumber)
        }

    }
    return mushroomsArray
}

/**in base alla scelta della difficolta, stampa una griglia
 * 
 * @param {string} difficult 
 */
function difficultChooser(difficult) {

    if (difficult === "easy") {
        document.getElementById('container').innerHTML = ''
        document.getElementById('title').innerHTML = "Facile"
        for (let i = 1; i <= 100; i++) {
            document.getElementById('container').insertAdjacentHTML('beforeend', `<div class="box easy">${i}</div>`)
        }

    } else if (difficult === "medium") {
        document.getElementById('container').innerHTML = ''
        document.getElementById('title').innerHTML = "Medio"
        for (let i = 1; i <= 81; i++) {
            document.getElementById('container').insertAdjacentHTML('beforeend', `<div class="box medium">${i}</div>`)
        }
    } else if ((difficult === "difficult")) {
        document.getElementById('container').innerHTML = ''
        document.getElementById('title').innerHTML = "Difficile"
        for (let i = 1; i <= 49; i++) {
            document.getElementById('container').insertAdjacentHTML('beforeend', `<div class="box difficult">${i}</div>`)
        }
    }
}



let counter=0

//al click si genera una griglia in base alla difficoltà scelta
document.querySelector('button').addEventListener('click', function () {

    let userChoose = document.getElementById('level').value

    if (userChoose === "easy") {
        difficultChooser("easy")
        let mushrooms = (mushroomsGenerator(100));
        let boxElements = document.getElementsByClassName('box')
        console.log(mushrooms);
       
        
        for (let i = 0; i < boxElements.length; i++) {
            let boxElement = boxElements[i];
            //console.log(boxElement);
            
            //al click della cella, si colora
            boxElement.addEventListener('click', function () {
                boxElement.classList.toggle('green')
                
                if (!this.clicked  ) {
                    counter++;
                    this.clicked = true; // Imposta il flag a true per indicare che è già stato cliccato
                }
                
                if (counter==100-16) {
                    alert('hai vinto')
                }


                let cellNumber = i + 1
                console.log(cellNumber);
                if (mushrooms.includes(cellNumber)) {
                    boxElement.innerHTML =`<i class="fa-solid fa-poo"></i>`
                    boxElement.classList.remove('green')
                    boxElement.classList.add('wrong')
                    alert(`Hai fatto un totale di ${counter -1} punti`)
                }
                
                console.log(counter);
            })
            
        }
    }
    else if (userChoose === "medium") {
        difficultChooser("medium")
        let mushrooms = (mushroomsGenerator(81));
        let boxElements = document.getElementsByClassName('box')
        
        
        console.log(mushrooms);
        
        for (let i = 0; i < boxElements.length; i++) {
            let boxElement = boxElements[i];
            //console.log(boxElement);
            
            //al click della cella, si colora
            boxElement.addEventListener('click', function click() {
                boxElement.classList.toggle('green')

                let cellNumber = i + 1
                console.log(cellNumber);
                if (mushrooms.includes(cellNumber)) {
                    boxElement.innerHTML =`<i class="fa-solid fa-poo"></i>`
                    boxElement.classList.remove('green')
                    boxElement.classList.add('wrong')
                    
                }
            })
        }
    }
    else if ((userChoose === "difficult")) {
        difficultChooser("difficult")
        let mushrooms = (mushroomsGenerator(81));
        let boxElements = document.getElementsByClassName('box')
        
        
        console.log(mushrooms);
        
        for (let i = 0; i < boxElements.length; i++) {
            let boxElement = boxElements[i];
            //console.log(boxElement);
            
            //al click della cella, si colora
            boxElement.addEventListener('click', function click() {
                boxElement.classList.toggle('green')

                let cellNumber = i + 1
                console.log(cellNumber);
                if (mushrooms.includes(cellNumber)) {
                    boxElement.innerHTML =`<i class="fa-solid fa-poo"></i>`
                    boxElement.classList.remove('green')
                    boxElement.classList.add('wrong')
                    
                }
            })
        }

    }
    else {
        alert('Scegli una difficoltà')
    }


})






