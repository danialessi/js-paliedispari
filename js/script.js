// Palindroma
// Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

// chiedo all'utente di inserire una parola 
var parolaUtente = prompt("Inserisci una parola");
console.log('parolautente: ', parolaUtente);

// scompongo la parola inserita dall'utente 
for (var i = 0; i < parolaUtente.length; i++) {
    var letteraParolaUtente = parolaUtente[i];
    console.log(letteraParolaUtente);
}

// ribalto la parola dell'utente 
for (var j = parolaUtente.length; j > 0; j--) {
    var parolaRibaltata = parolaUtente[j];
    console.log(parolaRibaltata);
}