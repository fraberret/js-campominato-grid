/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

let markup=`<div class="box"></div>`

document.querySelector('button').addEventListener('click', function () {
    for(let i= 0; i<=100; i++){
        document.getElementById('container').insertAdjacentHTML('beforeend', markup + i)
    }
})