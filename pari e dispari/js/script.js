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
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var numeroRandom = randomNumber(1, 5);
console.log(numeroRandom);

//  somma dei numeri 
 var somma = numeroRandom + numeroUtente;
//  console.log(somma);

// stabilire se la somma è pari o dispari 
var sommaPariODispari == verificaPariDispari(somma);

//  Funzione per stabilire se la somma è pari o dispari 
// mi serve un numero da valutare 
// deve tornare una stringa "pari" se è pari, "dispari" se è dispari 
function verificaPariDispari(numeroDaValutare) {

    var risultato;

    if (numeroDaValutare % 2 == 0) {
        risultato = "pari"
    } else {
        risultato = "dispari"
    }

    return risultato;
}