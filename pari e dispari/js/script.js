// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// Faccio scegliere l'utente (pari o dispari)
var pariDispari = prompt("Pari o dispari");
console.log("scelta utente: ", pariDispari);


// Faccio scegliere l'utente (numero da 1 a 5)
var numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(numeroUtente);

// Definisco la funzione per scegliere un numero random
function randomNumber(min, max) {
    return Math.floor(Math.random() * 5) + 1;
}

var numeroRandom = randomNumber(1, 5);
console.log(numeroRandom);

//  somma dei numeri 
 var somma = numeroRandom + numeroUtente;
//  console.log(somma);

//  Funzione per stabilire se la somma è pari o dispari 
function verifica(dato1) {
    if (somma == (somma % 2 ==0)) {
        console.log("pari");
    } else {
        console.log("dispari")
    }

    return risultato;
}