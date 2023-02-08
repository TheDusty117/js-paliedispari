console.log('funziono')

//1 chiedere ad utente una parola
let askText = prompt('inserisci una parola').split("")
// il testo inserito da utente diventera' un array che ha come indici le lettere
//della parola inserita

console.log(typeof askText, askText, askText.length)

//dividere la parola in due parti, per difetto(in modo tale che se 5 lettere)
// comunque posso confrontare una meta' con un'altra di egual dimensione


let wordSize = askText.length
let wordHalfSize = Math.floor(wordSize / 2)

console.log(wordHalfSize)







function palindromeCheck(word) {
  return word
}

//2 dividere la parola in singoli elementi, per poter fare un confronto.
// controllo fattibile con un for???










//SPLIT crea un array di lettere di cui la parola inserita da UTENTE e' COMPOSTA
//ES. (OSSO   [O,S,S,O])

//2 capire se la parola e' palindroma
  //usare un ciclo for, che confronta indice per indice se la parola e' uguale???

// verificare che queste parole siano uguali in ambo i sensi di lettura





// con split riesco a dividere cio' che utente inserisce, e farlo diventare un array
//SAPPIAMO CONFRONTARE DEI DATI IN UN ARRAY RISPETTO A CIO' CHE INSERISCE UTENTE?

//3 con