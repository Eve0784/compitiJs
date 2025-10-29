//1) chiedete all'utente il nome e fategli gli auguri di compleanno

// let nome = prompt("Dimmi il tuo nome");
// alert("Tanti auguri di buon compleanno "+ nome);

//2) chiedete all'utente la base e l'esponente e calcolate la potenza

// const base = prompt("Scrivi la base della potenza:");
// const esponente =prompt("Scrivi l'esponenre della potenza:")
// const baseNumber= Number(base);
// const esponenteNumber= Number(esponente);
// const result=  baseNumber**esponenteNumber;
// alert ("Il risultato è: "+ result);


//3) chiedete all'utente un numero e ditegli se è pari o dispari (operatore modulo)

// const number= prompt("Dimmi un numero:");
// const nConverted= Number(number);

// if(nConverted %2 ===0){ 
//     alert ("Il numero " +number+ " è pari");
// }
// else{
//     alert("Il numero "+number+ " è dispari" );
// }

//4) fate inserire all'utente l'età e se è maggiore o uguale a 18 rispondete "puoi entrare"

// const eta=prompt("Dimmi la tua età:");
// const etaNumber= Number(eta);
// if(etaNumber>= 18){
//     alert("Puoi entrare");
// }
// else{
//     alert("Mi dispiace non puoi entrare")
// }

//5) fate inserire all'utente una stringa e convertitela in maiuscolo (cercare su internet)

// const stringa= prompt("Scrivi un messaggio:")
// const stringaMaiuscolo = stringa.toUpperCase();
// alert(stringaMaiuscolo);

// 6) fai un ciclo for che stampi il quadrato dei numeri da 1 a 100

// for(i=1;i<=100;i++){
//     const quadrato= i**2;
//     console.log(quadrato);
// }

//7) fai un ciclo che per i numeri da 1 a 100 stampi pari se il numero è pari e dispari se il numero è dispari

// for(i=1;i<=100;i++){

//     if(i%2===0){
//         console.log(i+ " è pari");
        
//     }
//     else{
//         console.log(i+ " è dispari");
        
//     }

    
// }

// 8) usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai multipli di 7

// for (let i=1 ; i<=100; i++){
//     if(i%7===0){
//         console.log(i+" * "); 
//     }
//     else{
//         console.log(i);
        
//     }
// }

// 9) usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai quadrati perfetti

// for (let i=1 ; i<=100; i++){
//     let quadrato= Math.sqrt(i);
//     if(quadrato % 1=== 0){
//         console.log(i+ "*");
//     }
//     else{
//         console.log(i);
        
//     }
//     }

// for (let i=1 ; i<=100; i++){
//     let quadrato= Math.sqrt(i);
//     if(Number.isInteger(quadrato){
//         console.log(i+ "*");
//     }
//     else{
//         console.log(i);
        
//     }
//     }


// 10) chiedi all'utente un numero (positivo) di partenza e poi logga tutti i numeri dal numero dato fino a 0

// let num= prompt("Dimmi un numero positivo:");
// for(let i= num; i>=0; i--){
//     console.log(i);
// }


// 11) chiedi all'utente due numeri e logga tutti i numeri pari compresi tra i numeri forniti dall'utente

// let num1=parseInt(prompt("Dimmi un primo numero:"));
// let num2=parseInt(prompt("Dimmi un secondo numero:"));

//     if(num1>num2){
//         for(let i=num2; i<=num1; i++){
//             if(i%2===0){
//                 console.log(i);
                
//             }
//         }
//     }
//     else{
//         for(let i=num1; i<=num2; i++){
//             if(i%2===0){
//                 console.log(i); 
//             }
//         }
//     }



// // 12) chiedi all'utente quanti anni ha e digli quante ore ha gia' vissuto

// let eta =parseInt(prompt("Quanti anni hai?"));
// const ore = eta * 365 * 24; // anni × giorni × ore
// alert("Hai vissuto circa " + ore + " ore.");


// 13) Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

// let line= '';
// for (let i = 0; i <= 7; i++) {
//     console.log(line);
//     line+= '#';
// }

// 14) Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), 
// print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3
// and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// for (let i = 1; i <=100; i++){
//     if (i % 3===0) {
//         console.log(" Fizz");
        
//     }
//     else if (i % 5===0){
//         console.log(" Buzz");
//     }
//     else{
//         console.log(i);
        
//     }
// }

// for (let i = 1; i <=100; i++){
//     if (i % 3===0 && i % 5===0){
//         console.log('FizzBuzz'); 
//      } 
//     else if(i % 3===0) {
//         console.log(" Fizz");   
//     }
//     else if (i % 5===0){
//         console.log(" Buzz");
//     }
//     else{
//         console.log(i);   
//     }
// }

// for (let i = 1; i <=100; i++){
//     if (i % 3===0 && i % 5 !==0){
//         console.log('Fizz'); 
//      } 
//     else if(i % 5===0 && i %3 !==0) {
//         console.log(" Buzz");   
//     }
//     else if (i % 3===0 && i % 5===0){
//         console.log(" FizzBuzz");
//     }
//     else{
//         console.log(i);   
//     }
// }

// for (let i = 1; i <=100; i++){
//     let response= '';
//     if(i%3===0){
//         response+= 'Fizz';
//     }
//     if (i%5===0) {
//          response+= 'Buzz';     
//     }
//     if (response==='') {
//         console.log(i);
//     }
//     else{
//         console.log(response);
        
//     }
// }


// 15) Chessboard

// Write a program that creates a string that represents an 8×8 grid, 
// using newline characters to separate lines. At each position of the grid there is either a 
// space or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding 
// size = 8 and change the program so that it works for any size, 
// outputting a grid of the given width and height.
// a)
// for (let i = 0; i < 8; i++) {
//     if (i % 2===0) {
//         console.log(' # # # #');   
//     }
//     else{
//         console.log('# # # # ');
        
//     }
// }
// b)
// let chessboard = '';
// for (let i = 0; i < 8; i++) {
//     if (i % 2===0) {
//         chessboard +=  ' # # # #\n';
//     }
//     else{
//         chessboard += '# # # # \n'; 
//     }
// }
// console.log(chessboard);

// let size = 18;
// let chessboard='';

// for (let line = 0; line < size; line++) {
//     for (let column = 0; column < size; column++) {
//         if (line % 2 === 0) {
//             if (column % 2 === 0) {
//                 chessboard += ' ';
//             }
//             else {
//                 chessboard += '#';
//             }
//         }
//         else {
//             if (column % 2 === 0) {
//                 chessboard += '#';
//             }
//             else {
//                 chessboard += ' ';
//             }
//         }
//     }
//     chessboard+= '\n';
// }
// console.log(chessboard);


// let size = 18;
// let chessboard='';

// for (let line = 0; line < size; line++) {
//     for (let column = 0; column < size; column++) {
//          if ((line+ column) % 2 === 0){
//                 chessboard += ' ';
//             }
//             else{
//                 chessboard += '#';
//         }
//     }
//          chessboard+= '\n';
// }
// console.log(chessboard);


//16) Scrivere una funzione che mi dice se un numero è pari
// function checkEven (inputNumber){
//     const isEven= inputNumber % 2=== 0;
//     return isEven;
// }

// const checkEvenLambda = inputNumber => inputNumber % 2=== 0;

// const res1= checkEven(9);
// console.log(res1);

// const res2 = checkEvenLambda(10);
// console.log(res2);

//17) Scrivere una funzione che moltiplichi una stringa per un numero
// es: se inserisco 'cacca' e 3; l'output sarà 'caccacaccacacca'

// function multiplyString (inputString, multiplier){
//     let multiplierString= '';
//     for(let i=0 ; i< multiplier; i++){
//         multiplierString += inputString;
//     }
//     return multiplierString;
// }

// const res3= multiplyString('cacca',3);
// console.log(res3);

// const multiplierStringLambda= (inputString, multiplier) => inputString.repeat(multiplier);

// const res4= multiplierStringLambda('cacca ',10);
// console.log(res4);

//18) Scrivi una funzione che dato un numero mi dice se è intero oppure no

// function checkInteger(n){
//     const isInteger= n % 1===0;
//     return isInteger;
// }

// const checkIntegerLambda = n=> n % 1===0;

// const res5= checkInteger(5);
// console.log(res5);

// const res6= checkIntegerLambda(6.5);
// console.log(res6);

//-------------------------------------------------casa--------------------------------------------------------------------

// 19) Scrivere una funzione che dati in input due numeri ritorni il maggiore

// function findMaxNum(num1, num2) {
//    if(num1>num2){
//     return num1;
//    }
//    else {
//     return num2;
//    }
// } 
// function findMaxNum(num1, num2) {
//     let choosenNumber;
//     if (num1 <num2){
//         choosenNumber= num2;
//     }
//     else{
//         choosenNumber= num2;
//     }
// }
// return choosenNumber;
// console.log(findMax(50,25));



// const findMaxNum = (num1, num2) => num1 > num2 ? num1 : num2; // ? operatore ternario sostituisce if... else se 
//                                                     // la condizione è true restituisce num1 altrimenti(:) num2
// //---------Più compatta---------------------

// function maxNum(num1, num2) {
//     return Math.max(num1, num2);
// }
//  const maxNum= findMaxNum(5,20);
//  console.log(maxNum);
 

// 20) Scrivere una funzione che dati in input due stringhe ritorni la più corta
// function findShortestString(str1, str2) {
//     if (str1.length > str2.length) {
//         return str2;
//     }
//     else{
//         return str1;
//     }
// }

// const checkString= findShortestString("ciao come stai?", "sto bene");
// console.log(checkString);

// const stringMin= (str1, str2)=> str1.length> str2.length? str1:str2

// const checkString2= stringMin("ciao come stai?", "sto bene");
// console.log(checkString2);

// 21) Scrivere una funzione che data in input una stringa ritorni la sua iniziale;

// function findFirstChar (str3) {
//     return str3[0];    
// }

// const firstChart= findFirstChar('Ciao');
// console.log(firstChart);

// const returnStart= str4=> str4[0];
// const returnStartStr= returnStart('Mamma mia');
// console.log(returnStartStr);


// 22) Scrivere una funzione che dati in input una stringa e un numero, 
// logghi la stringa tante volte quante il numero dato

// function repString (str5, multiplier){
//     let multiString= '';
//     for (let i = 0; i < multiplier; i++) {
//        multiString+= str5;
        
//     }
//     return multiString;

// }

// function repString (str5, multiplier){
//     for (let i = 0; i < multiplier; i++) {
//        console.log(str5);  
//     }
// }

// const stringProvaMulti= repString('ciao', 10);
// console.log(stringProvaMulti);

// const multiStringLambda= (str5, multiplier) => str5.repeat(multiplier);
// const stringProvaMulti2 = multiStringLambda ('Credere \n', 25);
// console.log(stringProvaMulti2);


//////////////////////////////////////////////////////////////////////////////

//Esercizio per casa: libro "Eloquent Javascript" - capitolo 3 Functions

// Bean counting

// You can get the Nth character, or letter, from a string by writing [N] after the string (for example, 
// string[2]). The resulting value will be a string containing only one character (for example, "b"). 
// The first character has position 0, which causes the last one to be found at position string.length - 1. 
// In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function called countBs that takes a string as its only argument and returns a number that 
// indicates how many uppercase B characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument 
// that indicates the character that is to be counted (rather than counting only uppercase B characters). 
// Rewrite countBs to make use of this new function.


//TRADUZIONE

//Conteggio dei fagioli

// È possibile ottenere l'ennesimo carattere, o lettera, da una stringa scrivendo [N] dopo la stringa 
// (ad esempio, string[2]). Il valore risultante sarà una stringa contenente un solo carattere (ad esempio, "b"). 
// Il primo carattere ha posizione 0, il che fa sì che l'ultimo si trovi alla posizione string.length - 1. 
// In altre parole, una stringa di due caratteri ha lunghezza 2 e i suoi caratteri hanno posizioni 0 e 1.

// Scrivi una funzione chiamata countBs che accetti una stringa come unico argomento e restituisca un numero che 
// indica quanti caratteri B maiuscoli sono presenti nella stringa.

// Successivamente, scrivi una funzione chiamata countChar che si comporti come countBs, tranne per il fatto che 
// accetta un secondo argomento che indica il carattere da contare (invece di contare solo i caratteri B maiuscoli). 
// Riscrivi countBs per utilizzare questa nuova funzione.

//------------------------------------------------PRIMA PARTE----------------------------------------------//

// function countBs(str) {
//     let counter = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'B') {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(countBs("BuonaBNotteB")); // -> 3
// console.log(countBs("abc"));          // -> 0
// console.log(countBs("BBBB"));         // -> 4
// //------------------------------------------------SECONDA PARTE----------------------------------------------//
// function countChar(str, character) {
//     let counter = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === character) {
//             counter++;
//         }
//     }
//     return counter;
// }

// function countBs(str) {
//   return countChar(str, 'B');
// }

// // Esempi:
// console.log(countChar("BuonaBNotteB", "B")); // -> 3
// console.log(countChar("banana", "a"));       // -> 3
// console.log(countBs("BuonaBNotteB"));        // -> 3


//-------------------------Esercizi in clase------------------------------------------

//24) Inversione di un numero
//Scrivi una funzione invertiNumero che prenda un numero come parametro e restituisca il numero con le cifre invertite (es. 123 → 321).

// function changeCharOrder(n) {
//     let toChange = n.toString().split('').reverse().join('');
//     return Number(toChange);
// }
// console.log(changeCharOrder(598));

//----------------------------VERSIONE CON UN CICLO-----------------------------//
// function reverseNumber(n) {
//     const nToString = String(n);
//     let reversed = '';
//     for (let i = nToString.length - 1; i >= 0; i--) {
//         reversed += nToString[i];
//     }
//     return Number(reversed);
// }

// console.log(reverseNumber(598));

//25) Tabellina
//Scrivi una funzione tabellina che prenda un numero come parametro e stampi in console la tabellina di quel numero fino a 10.


// function littleTab(n1) {
//     for (let i = 1; i <= 10; i++) {
//         const risultato = n1 * i;
//         console.log(n1 + 'x' + i + '=' + risultato);
//     }
// }
// littleTab(5);


//26) Fibonacci
//Scrivi una funzione fibonacci che prenda un numero N come parametro e restituisca 
// l’N-esimo numero della sequenza di Fibonacci.


//----------------------SOLUZIONE DE PROF-------------------//

// function fibo(pos) {
//     let first= 0;
//     let second= 1;

//     if (pos === 1) {
//         return first;
//     }else if (pos === 2) {
//         return second;
//     }else if (pos > 2) {
//         let next;
//         for (let i = 3; i <= pos; i++) {
//             next= first + second;
//             first = second;
//             second = next;
//         }
//         return next;
//     }
//     else { 
//         console.log("ERRRROREEE!!");
//     }
// }
// console.log(fibo(7));

// //-------------------------------VERSIONE RICORSIVA-----------------------------//

// function fiboRecursive(pos) {
//     if (pos === 0) {
//         return 0;
//         }
//     else if (pos === 1) {
//         return 1;
//     } else {
//         return fiboRecursive(pos - 1) + fiboRecursive(pos - 2);
//     }
// }
// console.log(fiboRecursive(7));
// //---------------- soluzione a------------------------//
// function fibonacci(n) {
//   if (n <= 0) return 0;     // caso base
//   if (n === 1) return 1;    // caso base

//   let a = 0; // primo numero della sequenza
//   let b = 1; // secondo numero

//   for (let i = 2; i <= n; i++) {
//     let temp = a + b; // calcola il successivo
//     a = b;            // aggiorna a
//     b = temp;         // aggiorna b
//   }

//   return b; // l’n-esimo numero di Fibonacci
// }

// // Esempi:
// console.log(fibonacci(0)); // ->  0
// console.log(fibonacci(1)); // ->  1
// console.log(fibonacci(6)); // ->  8

// //----------------------------------------- soluzione b-----------------------------------//
// //---------------- ricorsiva----------------------------//
// function fibonacci(n) {
//   if (n <= 0) return 0;   // caso base
//   if (n === 1) return 1;  // caso base
//   return fibonacci(n - 1) + fibonacci(n - 2); // chiamata ricorsiva
// }

// // Esempi:
// console.log(fibonacci(0)); // -> 0
// console.log(fibonacci(1)); // -> 1
// console.log(fibonacci(6)); // -> 8
// //----------------------------------------- soluzione c-----------------------------------//
// //---------------------------ricorsiva ottimizzata memorizza i calcoli-----------------------//
// function fibonacci(n, memo = {}) {
//   if (n <= 0) return 0;   // caso base
//   if (n === 1) return 1;  // caso base

//   // se il valore è già stato calcolato, lo restituiamo subito
//   if (memo[n]) return memo[n];

//   // altrimenti lo calcoliamo e lo salviamo
//   memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
//   return memo[n];
// }

// // Esempi:
// console.log(fibonacci(6));  // -> 8
// console.log(fibonacci(10)); // -> 55
// console.log(fibonacci(40)); // -> 102334155 (veloce!)



//27)  Conteggio vocali
//Scrivi una funzione contaVocali che prenda una stringa come parametro e restituisca il numero di vocali presenti.


// function contaVocali(str) {
//     let counter = 0;
//     const vowels = 'aeiouAEIOU';
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(contaVocali('meleebanane'));


//28) Sconto
//Scrivi una funzione applicaSconto che prenda due numeri come parametri (prezzo e percentuale di sconto) e restituisca il prezzo scontato.


// function applicaSconto(price, percent) {
//     const percentFloat = percent / 100;
//     const discount = price * percentFloat;
//     constresult = price - discount;
//     return result;
// }


// console.log(applicaSconto(100, 5));

//---------------------------------------VERSIONE PIU CORTA--------------------------------------------------//
// function applicaSconto(price, percent) {
//     const discount = (price- (price* (percent / 100)));
//     return discount;
// }
// console.log(applicaSconto(100, 20));

//29) Conversione gradi
//Scrivi una funzione convertiGradi che prenda un numero come parametro (gradi Celsius) e restituisca la conversione in Fahrenheit

 	
//---formula  matematica----> (5 °C × 9/5) + 32 = 41 °F

// function convertiGradi(c) {
//     const fahrenheit = (c * (9/5)) + 32;
//     return fahrenheit;
// }

// console.log(convertiGradi(5) + '°F') ;


//30) Verifica password
//Scrivi una funzione verificaPassword che prenda una stringa e restituisca true se:
// - Ha almeno 8 caratteri
// - Contiene almeno una lettera maiuscola
// - Contiene almeno un carattere speciale tra questi '!#@$%'
// - Non contiene la parola 'cacca'

function checkPwd(pwd) {
    if (pwd.length <8 ) return false;           // controlliamo la lunghezza
    if (pwd.includes('cacca')) return false;   // controlliamo se contiene cacca

    let hasUpperChar= false;                 
    let hasSpecialChar = false;
    for (let i = 0; i < pwd.length; i++) {
        const element = pwd[i];
        if(element>='A' && element<='Z') {
            hasUpperChar= true;   
        }
        if (element ==='!' || element=== '#' || element==='@' || element==='$'|| element==='%') { 
            hasSpecialChar= true;
        }
        if(hasUpperChar && hasSpecialChar) break;
    } 
    return hasUpperChar && hasSpecialChar;
}
console.log(checkPwd('25mh'));           // ---> false
console.log(checkPwd('25mhdh54'));       // ---> false
console.log(checkPwd('25cacca4'));       // ---> false
console.log(checkPwd('kJMhdhrg'));       // ---> false
console.log(checkPwd('kJMhd%jà'));       // ---> true


//-----------------------------VERSIONE DEL PROF-------------------------------//

function checkPassword(password) {
    if (password.length < 8) {
        return false;
    }
    else {
        if (password.toLowwerCase() === password) {
            return false;
        }
        else {
            if (password.includes('!')
                || password.includes('#')
                || password.includes('@')
                || password.includes('$')
                || password.includes('%')) {
                if (password.includes('cacca')) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                return false;
            }
        }
    }
}

//-------------------------PIU OTTIMIZZATA----------------------------------//

function hasSpecialCharacters(str) {
    if (password.includes('!')
        || password.includes('#')
        || password.includes('@')
        || password.includes('$')
        || password.includes('%')) {
        return true;
    }
    else {
        return false;
    }       
}
function containsUpperCaseChar(str) {
    if (str.toLowerCase() === str) {
        return false;
    }
    else {
        return true;
    } 
}
function isTooShort(str) {
    if (str.length < 8) {
        return true;
    }
    else {
        return false;
    }
} 

function containsCacca(str) {
    if (str.includes('cacca')) {
        return true;
    }
    else {
        return false;
    }
}   

function checkPassword(password) {
    if (isTooShort(password)) {
        return false;
    } else if (!containsUpperCaseChar(password)) {
        return false;
    } else if (!hasSpecialCharacters(password)) {
        return false;
    } else if (containsCacca(password)) {
        return false;
    } else {
        return true;
    }
}
