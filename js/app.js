console.log('funziono')




// 1 chiedere ad utente una parola
const askText = prompt('inserisci una parola').split("")
// il testo inserito da utente diventera' un array che ha come indici le lettere
//della parola inserita

console.log(typeof askText, askText, askText.length)


palindromeCheck(askText)





function palindromeCheck (listaLettere) {
  console.log(listaLettere)
  //creare due FOR, uno normale, e uno reverse
  //dichiaro due variabili, una norm e una reverse

  let regular = ''

  let reverse = ''

  //FOR REGULAR (0,1,2,3,4...)
  for( let i = 0; i < listaLettere.length; i++) {
    regular += listaLettere[i]
  }
  console.log(regular)

  //FOR REVERSE (...4,3,2,1,0)
  for(let i = listaLettere.length-1; i >= 0; i--) {
    reverse += listaLettere[i]
    console.log(listaLettere[i], i)
  }
  console.log(reverse)
  


  if(regular === reverse){
    alert('palindroma')
  } else {
    alert('non palindroma')
  }
  
  
} 




//--------------------VERSIONE EASY

// let insertText = prompt('inserisci una parola per vedere se palindroma o no')
// console.log(insertText)

// let word = insertText.toLocaleLowerCase()
// console.log(word)
// console.log(word[3])

// //creare una funzione che inverte

// let reverseWord = revertWord(word)

// // console.log(reverseWord) //in questo console log inverte la parola

// if ( word === reverseWord) {
//   alert('palindroma')
// } else {
//   alert('non palindroma')
// }


// function revertWord(parolaDaInvertire){
  
//   let reverseWord = ''
  
//   for(let i = word.length -1; i >= 0; i--) { //indice che va dalla fine all'inzio
  
//     reverseWord += word[i];
    
//   }

  
//   return reverseWord
// }










//CORREZIONE IN CLASSE--------------------------------------------------------------------------------


//scommenta qui GIU =========================

//chieder parola a utente

// const parola = prompt ('inserisci una parola')

// // coontrollare se e' palindroma

// //invertire parola utente

// //confrontare parola utente regolare con la sua versione invertita

// //scrivere riusltato ad utente, prima ci immaginiamo un ipotetica funzione e poi in basso giu la creiamo
// if (isPalindrome (parola)) {

//   console.log('la parola ${parola} è palindroma')
// } else {

//   console.log('la parola ${parola} NON è palindroma')
// }


// function isPalindrome( parolaDaVerificare){


//   let parolaInvertita = ''
//   let lastIndex = parolaDaVerificare.length - 1


//   for (let i = lastIndex; i >= 0; i--) { //ciclo reverse, decrementa indice ad ogni giro, e quindi va a leggere dalla fine verso l'inizio
//     const carattere = parolaDaVerificare.charAt(i)
//     parolaInvertita += carattere
//     console.log(carattere, parolaInvertita) //ad ogni ciclo stampiamo e vediamo cosa succede
//   }
  
//   //confrontare le due stringhe
//   const result = parolaDaVerificare === parolaInvertita

//   //reutrn true o false
//   return result


// }
//fine FUNZIONE

//scommenta qui SU ==============================



///PARI O DISPARI