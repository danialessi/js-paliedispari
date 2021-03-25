// Palindroma
// Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

// chiedo all'utente di inserire una parola 
var parolaUtente = prompt("Inserisci una parola");
console.log('parolautente: ', parolaUtente);

// scompongo la parola inserita dall'utente 
// for (var i = 0; i < parolaUtente.length; i++) {
//     var letteraParolaUtente = parolaUtente[i];
//     console.log(letteraParolaUtente);
// }

// ribalto la parola dell'utente
var parolaRibaltata;

for (var j = parolaUtente.length - 1; j >= 0; j--) {
    parolaRibaltata = parolaUtente[j];
    console.log(parolaRibaltata);
}

// creo funzione per confrontare la parola dell'utente con quella ribaltata 
function verificaPalindromo (dato1, dato2) {
    if (parolaUtente = parolaRibaltata) {
        console.log("è palindromo")
    } else {
        console.log("non è palindromo")
    }

    return risultato;
}

var output = verificaPalindromo(parolaUtente, parolaRibaltata);
console.log(output);