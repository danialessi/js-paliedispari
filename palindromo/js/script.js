// Palindroma
// Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

// chiedo all'utente di inserire una parola 
var parolaUtente = prompt("Inserisci una parola");
console.log('parolautente: ', parolaUtente);

// verifica funzione sottostante 
verificaPalindromo(parolaUtente);

// creo funzione per confrontare la parola dell'utente con quella ribaltata 
function verificaPalindromo(dato1) {
    
    var parolaRibaltata = "";
    var risultato = "";

    // ribalto la parola 
    for (var j = parolaUtente.length - 1; j >= 0; j--) {
        parolaRibaltata = parolaUtente[j];
        // console.log(parolaRibaltata);
   }
    
    // confronto le parole 

    if (parolaUtente == parolaRibaltata) {
        risultato = "è un palindromo"
        console.log(risultato);
    } else {
        risultato = "non è un palindromo"
        console.log(risultato);
    }

    return risultato;
}
