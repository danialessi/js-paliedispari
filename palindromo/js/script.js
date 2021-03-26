// Palindroma
// Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

// chiedo all'utente di inserire una parola 
var parolaUtente = prompt("Inserisci una parola");
console.log('parolautente: ', parolaUtente);

// verifica funzione sottostante 
var parolaUtentePalindromo = palindromo(parolaUtente);

// creo funzione per confrontare la parola dell'utente con quella ribaltata 
function palindromo(parolaDaAnalizzare) {
    
    var risultatoPalindromo;
    
    // ricavo la parola al contrario da analizzare, (intanto la salvo già in una variabile vuota)
    var parolaContrario = "";

    // leggo i caratteri di parolaDaAnalizzare partendo dall'ultimo e concateno ogni lettera a parolaContrario 

    for (var i = parolaDaAnalizzare.length - 1; i >= 0; i-- ) {
        var thisLettera = parolaDaAnalizzare[i];

        parolaContrario += thisLettera;
    }


    if (parolaDaAnalizzare == parolaContrario) {
        risultatoPalindromo = true;
        console.log("è palindromo");
    } else {
        risultatoPalindromo = false;
        console.log("non è palindromo");
    }

    return risultatoPalindromo;

}
