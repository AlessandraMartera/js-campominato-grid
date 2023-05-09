const container = document.getElementById("container_square");

const play = document.getElementById("play_button");

const mode = document.getElementById("difficulty").value;

// let num1 = 1;
// let num2 = 100;

// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
play.addEventListener('click', gridGenerateSquare);


// play.addEventListener("click", gridGenerateSquare);




// FUNZIONI
// funzione che permette di generare una griglia con gli .square
function gridGenerateSquare() {
const mode = document.getElementById("difficulty").value;
let num;
    if ( mode === "normal" ) {
        num = 100;

    } else if ( mode === "hard" ){
        num = 81;
    }
    else {
        num = 49;
    }
    
    console.log("num");
    // Ogni cella ha un numero progressivo, da 1 a 100.
    // Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    for ( let i = 1; i <= num; i++) {

        const newSquare = document.createElement("div");
        newSquare.classList.add("square");
        
        newSquare.addEventListener("click",
        function() {
            this.classList.add("active");
        }
        );

        newSquare.append(i);
        container.append(newSquare);

        
    }
}



// attivare la singola cella con il numero e stampare nella console il numero della cella selezionata
