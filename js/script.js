const container = document.getElementById("container_square");

const play = document.getElementById("play_button");


// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// play.addEventListener("click", 
//     function () {
//     gridGenerateSquare(1,100);
                
       
//     }   
// );


play.addEventListener("click", gridGenerateSquare);




// FUNZIONI
// funzione che permette di generare una griglia con gli .square
function gridGenerateSquare(num1, num2) {


    // Ogni cella ha un numero progressivo, da 1 a 100.
    // Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    for ( let i = num1; i <= num2; i++) {

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
