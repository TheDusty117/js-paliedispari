console.log('funziono')

// //1 chiedere ad utente una parola
// let askText = prompt('inserisci una parola').split("")
// // il testo inserito da utente diventera' un array che ha come indici le lettere
// //della parola inserita

// console.log(typeof askText, askText, askText.length)

// // leggere al contrario la parola inserita

// function palindromeCheck (listaLettere) {
//   //creare due FOR, uno normale, e uno reverse

//   let regular = ('')

//   let reverse = ('')

//   //FOR REGULAR (0,1,2,3,4...)
//   for( let i = 0; i < listaLettere.length; i++) {

//   }

//   //FOR REVERSE (...4,3,2,1,0)
//   for(let i = listaLettere.length; i >= 0; i++) {
    
//   }
  
// } 




//--------------------VERSIONE EASY

let insertText = prompt('inserisci una parola per vedere se palindroma o no')
console.log(insertText)

let word = insertText.toLocaleLowerCase()
console.log(word)
console.log(word[3])

//creare una funzione che inverte

let reverseWord = revertWord(word)

// console.log(reverseWord) //in questo console log inverte la parola

if ( word === reverseWord) {
  alert('palindroma')
} else {
  alert('non palindroma')
}


function revertWord(parolaDaInvertire){
  
  let reverseWord = '' 
  
  for(let i = word.length -1; i >= 0; i--) { //indice che va dalla fine all'inzio
  
    reverseWord += word[i];
    
  }

  
  return reverseWord
}






