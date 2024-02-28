/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/



document.querySelector('button').addEventListener('click', function () {
    
    document.querySelector('button').remove()

    for(let i= 1; i<=100; i++){
        document.getElementById('container').insertAdjacentHTML('beforeend', `<div class="box">${i}</div>`)
        
    }

    let boxElements= document.getElementsByClassName('box')
    //console.log(boxElements);
    
    for(let i=0; i<boxElements.length ; i++){
        let boxElement =boxElements[i];
        console.log(boxElement);
        
        boxElement.addEventListener('click', function () {
            boxElement.classList.toggle('green')
            
            console.log(i+1);
            
        })
    }
    

})

