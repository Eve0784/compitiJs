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

// function checkPwd(pwd) {
//     if (pwd.length <8 ) return false;           // controlliamo la lunghezza
//     if (pwd.includes('cacca')) return false;   // controlliamo se contiene cacca

//     let hasUpperChar= false;                 
//     let hasSpecialChar = false;
//     for (let i = 0; i < pwd.length; i++) {
//         const element = pwd[i];
//         if(element>='A' && element<='Z') {
//             hasUpperChar= true;   
//         }
//         if (element ==='!' || element=== '#' || element==='@' || element==='$'|| element==='%') { 
//             hasSpecialChar= true;
//         }
//         if(hasUpperChar && hasSpecialChar) break;
//     } 
//     return hasUpperChar && hasSpecialChar;
// }
// console.log(checkPwd('25mh'));           // ---> false
// console.log(checkPwd('25mhdh54'));       // ---> false
// console.log(checkPwd('25cacca4'));       // ---> false
// console.log(checkPwd('kJMhdhrg'));       // ---> false
// console.log(checkPwd('kJMhd%jà'));       // ---> true


// //-----------------------------VERSIONE DEL PROF-------------------------------//

// function checkPassword(password) {
//     if (password.length < 8) {
//         return false;
//     }
//     else {
//         if (password.toLowwerCase() === password) {
//             return false;
//         }
//         else {
//             if (password.includes('!')
//                 || password.includes('#')
//                 || password.includes('@')
//                 || password.includes('$')
//                 || password.includes('%')) {
//                 if (password.includes('cacca')) {
//                     return false;
//                 }
//                 else {
//                     return true;
//                 }
//             }
//             else {
//                 return false;
//             }
//         }
//     }
// }

//-------------------------PIU OTTIMIZZATA----------------------------------//

// function hasSpecialCharacters(str) {
//     if (password.includes('!')
//         || password.includes('#')
//         || password.includes('@')
//         || password.includes('$')
//         || password.includes('%')) {
//         return true;
//     }
//     else {
//         return false;
//     }       
// }
// function containsUpperCaseChar(str) {
//     if (str.toLowerCase() === str) {
//         return false;
//     }
//     else {
//         return true;
//     } 
// }
// function isTooShort(str) {
//     if (str.length < 8) {
//         return true;
//     }
//     else {
//         return false;
//     }
// } 

// function containsCacca(str) {
//     if (str.includes('cacca')) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }   

// function checkPassword(password) {
//     if (isTooShort(password)) {
//         return false;
//     } else if (!containsUpperCaseChar(password)) {
//         return false;
//     } else if (!hasSpecialCharacters(password)) {
//         return false;
//     } else if (containsCacca(password)) {
//         return false;
//     } else {
//         return true;
//     }
// }

//--------------------------------------------------- 29/10/2025----------------------------------------------------//

// 31) Somma dei numeri fino a n
// Scrivi una funzione sommaFinoAN(n) che restituisce la somma dei numeri da 1 a n.
// sommaFinoAN(5) -> 1 + 2 + 3 + 4 + 5 -> 15

// function sommaFinoAN(n) {
//     let somma = 0;
//     for (let i = 1; i <= n; i++) {
//         somma += i;
//     }
//     return somma;
// }

// console.log(sommaFinoAN(5)); // -> 15


// 32) Conteggio cifre
// Scrivi una funzione contaCifre(num) che restituisce il numero di cifre di un numero
// contaCifre(5) -> 1
// contaCifre(1245) -> 4

// function contaCifre(num) {
//     const numString = num.toString(); // string(nbr)
//     return numString.length;
// }

// console.log(contaCifre(5));    // -> 1
// console.log(contaCifre(1245)); // -> 4


// 33) Somma delle cifre
// Scrivi una funzione sommaCifre(num) che restituisce la somma delle cifre di un numero
// sommaCifre(5) -> 5
// sommaCifre(1245) -> 12

// function sommaCifre(num) {
//     let numStr = num.toString();
//     let somma = 0;
//     for (let i = 0; i < numStr.length; i++) {
//         somma += Number(numStr[i]);
//     }
//     return somma;
// }

// console.log(sommaCifre(5));    // -> 5
// console.log(sommaCifre(1245)); // -> 12

                    //--------------------------------ALTRO MODO FATTO DAL PROF----------------------------------------//

// function sommaCifre(num) {
//     let numStr = String(num);
//     //debugger;  -----  per testare ogni passaggio del for sul browser
//     let somma = 0;
//     for (let i = 0; i < numStr.length; i++) {
//         const nChar = numStr[i];
//         const n = Number(nChar);
//         somma += n;

//     }
//     return somma;
// }

// console.log(sommaCifre(5));    // -> 5
// console.log(sommaCifre(1245)); // -> 12

// 34) Conversione valuta
// Scrivi una funzione euroToDollaro(euro) che converte un importo in euro in dollari (1 euro = 1.15 dollari).

// function euroToDollaro(euro) {
//     const dollar = euro* 1.15;  
//     return dollar;
// }   
// console.log(euroToDollaro(10)); // -> 11.5


// 35) Calcolo area rettangolo
// Scrivi una funzione areaRettangolo(base, altezza) che restituisce l’area di un rettangolo.

// function areaRettangolo(base, altezza) {
//     const area = base * altezza;
//     return area;    
// }  
// console.log(areaRettangolo(5, 10)); // -> 50



// 36) Calcolo media
// Scrivi una funzione media(a, b, c) che restituisce la media di tre numeri.

///      formula -> media= (somma dei valori) / (numero di element);
// function media (a, b, c) {
//     const average = ( a + b+ c) /3;
//     return average;
// }
// console.log(media(3, 6, 9)); // -> 6


// 37) Generatore di password casuale
// Scrivi una funzione generaPasswordCasuale() che restituisce una password di 8 caratteri usando solo lettere maiuscole e numeri (usa Math.random())

// function generaPasswordCasuale() {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let password = '';
//     for (let i = 0; i < 8; i++) {
//         const randomPwd= Math.floor(Math.random() * characters.length); // no si usa il meno 1 perche il floor arrotonda verso il basso
//         password += characters[randomPwd];
//     }   
//     return password;
// }
  //---------------------------------------- VERSIONE PROF ----------------------------------//

// function generaPasswordCasuale() {
//     const avaiableCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ012345';
//      let password = '';
//     for (let i = 0; i < 8; i++) {
//         const numeroRandomico = Math.random();
//         const position = numeroRandomico  * avaiableCharacters.length -1; // si mette meno 1 perche si usa il round come arrotondamento
//         const roundedPosition= Math.round(position);
//         password += avaiableCharacters[roundedPosition];
//     }   
//     return password;
    
// }

// console.log(generaPasswordCasuale());


// 38) Potenza con ciclo
// Scrivi una funzione potenzaCiclo(base, esponente) che calcola la potenza usando un ciclo.

// function potenzaCiclo(base, esponente) {
//     let pow = 1;
//     if (esponente === 0) {
//         return 1;
//     }
//     for (let i = 0; i < esponente; i++) {
//         pow *= base;
//     }   
//     return pow;
// }
// console.log(potenzaCiclo(4, 2)); // -> 8

 //-----------------------------VERSIONE CORTA PROF------------------------------//
// function potenzaCiclo(base, esponente) {
//     let pow = base;
//     for (let i = 1; i < esponente; i++) {
//         pow *= base;
//     }   
//     return pow;
// }
// console.log(potenzaCiclo(4, 2)); // -> 8


// 39) Scrivi un validatore di email con queste regole:
// -deve contenere una @
// -deve contenere un punto posizionato dopo la @
// -le parti di testo prima della @ e tra la @ e il punto devono almeno avere tre lettere
// -il punto non può essere l'ultimo carattere


// function emailValidator(email) {
//     const atIndex = email.indexOf('@');
//     const dotIndex = email.indexOf('.');
//     if (!email.includes('@')) {      //controlla se c'è la @
//         return false;
//     }
//     //--------- controlla se la parte prima della @ ha almeno 3 caratteri, 
//     // se il punto è dopo la @ e se tra la @ e il punto ci sono almeno 3 caratteri 
//     // e se il punto non è l'ultimo carattere ----------------//

//     else if (atIndex >= 3 && dotIndex > atIndex + 3 && dotIndex < email.length - 1) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

 //-------------------------------------VERSIONE PROF-------------------------------//

//      //---------------controlla se contiene @ ---------------//
//  function containsAt(email) {
//     if (email.includes('@')) {
//         return true;
//     }
//     else{
//         return false
//     }
    
//  }

//     //--------------------controlla la posizione del punto e la @ ----------------//
// function containsDotAfterAt(email) {
//     const dotPosition = email.indexOf('.');
//     if (dotPosition === -1) {
//         return false;
//     }
//     const atPosition = email.indexOf('@');
//     if (dotPosition> atPosition) {
//         return true;
//     }
//     else {
//         return false;
//     }
    
// }
//                      //--------------------controlla se ci sono piu di 3 caratteri prima la @ e del punto ----------------//
// function firstAndSecondPartLengthIsTreeOrMore(email) {
//     const atPosition = email.indexOf('@');
//     const firstPart= email.substring(0,atPosition);

//     const dotPosition = email.indexOf('.');
//     const secondPart = email.substring(atPosition + 1, dotPosition);

//     if (firstPart.length >= 3 && secondPart.length >= 3) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }

//            //--------------------controlla se il punto non è nell'ultima posizione ----------------//
//  function lastCharMustBeDifferentFromDot(email) {
//     const lastPosition = email.length - 1;
//     const lastChar= email[lastPosition];
//     if (lastChar === '.') {
//         return false;        
//     }
//     else{
//         return true;
//     }
//  }

//  function emailValidator(email) {
//     if(!containsAt(email)){
//         return false;
//     }
//     else if(!containsDotAfterAt(email)){
//         return false;
//     }
//     else if (!firstAndSecondPartLengthIsTreeOrMore(email)) {
//         return false;        
//     }
//     else if(!lastCharMustBeDifferentFromDot(email)){
//         return false;
//     }
//     else{
//         return true;
//     }
    
//  }
 
// console.log(emailValidator('ciaociao')); // false
// console.log(emailValidator('ciao@ciao')); // false
// console.log(emailValidator('ci.ao@ciao')); // false
// console.log(emailValidator('ciao@ciao.')); // false
// console.log(emailValidator('ciao@cia.o')); // true
// console.log(emailValidator('temo@example.com')); // true


// 40) crea un converitore tra italiano e farfallino(https://it.wikipedia.org/wiki/Alfabeto_farfallino)

// function farfallino(str) {
//     let farfallinoStr = '';
//     const vowels = 'aeiouAEIOU';
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         farfallinoStr += char;
//         if (vowels.includes(char)) {
//             farfallinoStr += 'f' + char;
//         }
//     }
//     return farfallinoStr;
// }
// console.log(farfallino('ciao')); // cifiafaofo"
// console.log(farfallino('programmazione')); // profograffammazionefone


 //---------------------------------------VERSIONE PROF--------------------------//

// function farfallinoTranslator(str) {
//     const vowels = 'aeiou';
//     let farfallinoStr = '';
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
        
//         if (vowels.includes(char.toLowerCase())) {
//             farfallinoStr += char + 'f'+ char;
//         }
//         else{
//             farfallinoStr += char;
//         }
//     }
//     return farfallinoStr;
// }

// console.log(farfallinoTranslator('ciao')); // cifiafaofo"
// console.log(farfallinoTranslator('programmazione')); // profografammafazifiofonefe
// console.log(farfallinoTranslator('viva la pausa!!')); // vifivafa lafa pafaufusafa!!
 

//---------------------ESERCIZI 03/11/2024--------------------------//
const pippo = [1, 2, 4, 56, 78, 11, -123, 3, -23, 2, 22, 4];

//41) creare una funzione che dato un array di numeri li eleva tutti al quadrato

// function squareArray(nbrArray) {
//     const newArray= [];
//     for (let i = 0; i < nbrArray.length; i++) {
//     const element = nbrArray[i];
//     const square= element * element;
//     newArray.push(square);
// }
// return newArray;
// }

// console.log(squareArray(pippo)) //-> [1, 4, 16, 3136, ....]

// //--------------------USANDO IL FOROF--------------------------//
// function squareArray(nbrArray) {
//     const newArray= [];
//     for (const nbr of nbrArray) {
//         const square= nbr * nbr;
//         newArray.push(square);
//     }
//      return newArray;
// }

// console.log(squareArray(pippo)) //-> [1, 4, 16, 3136, ....]


//42) creare una funzione che dato un array di numeri li eleva al quadrato solo i numeri dispari

// function squareOddArray(nbrArray) {
//     const newArray= [];
//     for (let i = 0; i < nbrArray.length; i++) {
//     const element = nbrArray[i];
//     if (element % 2 !== 0) {
//         const square= element * element;
//         newArray.push(square);
//     }
//     else{
//         newArray.push(element);
//     }
// }
// return newArray;
// }

// console.log(squareOddArray(pippo)) //-> [1, 2, 4, 56, 78, 121, 15129, 9, 529, 2, 22, 4]

// //-------------------------VERSIONE DEL PROF----------------------------//

// function squareOddArray(nbrArray) {
//     const newArray = [];
//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];
//         if (element % 2 === 0) {
//             newArray.push(element);
//         }
//         else {
//             const square = element * element;
//             newArray.push(square);
//         }
//     }
//     return newArray;
// }

// console.log(squareOddArray(pippo)) //-> [1, 2, 4, 56, 78, 121, 15129, 9, 529, 2, 22, 4]


// //42) creare una funzione che dato un array di numeri moltiplichi per due quelli positivi e divida per due i negativi

// function multiplyPoisitiveAndDivideNegative(nbrArray) {
//     const newArray = [];
//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];
//         if (element >= 0) {
//             newArray.push(element * 2);
//         } else {
//             newArray.push(element / 2);
//         }
//     }
//     return newArray;        
// }

// console.log(multiplyPoisitiveAndDivideNegative(pippo)) //-> [2, 4, 8, 112, 156, 22, -61.5, 6, -11.5, 4, 44, 8];

// //-------------------------VERSIONE DEL PROF----------------------------//

// function multiplyPoisitiveAndDivideNegative(nbrArray) {
//     const newArray = [];
//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];
//         if (element >= 0) {
//             const multiplied = element * 2;
//             newArray.push(multiplied);
//         } else {
//             const divided = element / 2;
//             newArray.push(divided);
//         }
//     }
//     return newArray;        
// }

// console.log(multiplyPoisitiveAndDivideNegative(pippo)) //-> [2, 4, 8, 112, 156, 22, -61.5, 6, -11.5, 4, 44, 8];

let numbers2 = [2, 4, 8, 112, 156, 22, -61.5, 6, -11.5, 4, 44, 8, 4];
let stringsArray = ['pizza','spaghuetti', 'frittata', 'lasagne'];
// 43) Trova il Minimo
// Scrivi una funzione trovaMinimo(array) che restituisce il numero più piccolo in un array di numeri.

// //----------questo dando min 0 potrebbe dare errore-----------------//

// function findMin(nbrArray) {
//     let min = 0;
//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];
//         if (element < min) {
//             min = element;            
//         }
//     }
//     return min;
// }
// console.log(findMin(numbers2));
// //-----------------questo sarebbe una soluzione piu senzata----------------//

// function findMin(nbrArray) {
//     let min = Infinity;
//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];
//         if (element < min) {
//             min = element;            
//         }
//     }
//     return min;
// }
// console.log(findMin(numbers2));

// //------------------questo sarebbe migliore perche prende di partenza un num del array come partenza ossia il primo-------------------//

// function findMin(nbrArray) {
//     let min = array[0];
//     for (let i = 1; i < nbrArray.length; i++) {
//         const element = nbrArray[i];
//         if (element < min) {
//             min = element;            
//         }
//     }
//     return min;
// }
// console.log(findMin(numbers2));


//--------------- 44) Inverti Array con un ciclo-----------------------------------//
// Scrivi una funzione invertiArray(array) che restituisce un nuovo array con gli elementi in ordine inverso.

// function invertiArray(array) {
//     let arrayInverted = [];
//     for (let i = array.length-1; i >= 0; i--) {
//         const element = array[i];
//         arrayInverted.push(element);
//     }
//     return arrayInverted
// }
// console.log(invertiArray(numbers2));

// //-------------------SECONDO METODO------------------------//

// function invertiArray2(array) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[array.length - 1 - i];
//         newArray.push(element);
//     }
//     return newArray
// }
// console.log(invertiArray2(numbers2));

// //-------------------TERZO METODO------------------------//

// function invertiArray3(array) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         newArray.unshift(element);
//     }
//     return newArray
// }
// console.log(invertiArray3(numbers2));


//--------------- 45) Maiuscolo Tutte le Parole--------------------------------//
// Scrivi una funzione maiuscoloTutto(array) che restituisce un nuovo array con tutte le stringhe in maiuscolo.


// function maiuscoloTutto(strArray) {
//     let arrayToUpperCase = [];
//     for (const element of strArray) {
//         const upperCase = element.toUpperCase();
//         arrayToUpperCase.push(upperCase);
//     }
//     return arrayToUpperCase;
// }
// console.log(maiuscoloTutto(stringsArray));
// //----------------FATTO DAL PROF------------------------//

// function maiuscoloTutto(array) {
//    let newArray = []; 
//     for (let i = 0; i < array.length; i++) {
//       const selectedString = array[i];
//       const upperCase = selectedString.toUpperCase();
//       newArray.push(upperCase)
// }
// return newArray;
// }

// console.log(maiuscoloTutto(stringsArray));
//---------------- 46) Somma Righe Matrice--------------------------------//
// Scrivi una funzione sommaRighe(matrice) che restituisce un array con la somma degli elementi di ogni riga.

// const superArray = [[1, 2, 3, 6], 
//                     [1, 1, 1], 
//                     [3, 2, 1, 2, 5]];

// function sommaRighe(matrice) {
//   let newArray = [];
//   for (let rowNumber = 0; rowNumber < matrice.length; rowNumber++) {
//     const row = matrice[rowNumber];
//     let sum = 0;
//     for (let colNumber = 0; colNumber < row.length; colNumber++) {
//       const cell = row[colNumber];
//       sum += cell;
//     } newArray.push(sum);
//   }
//   return newArray;
// }
// console.log(sommaRighe(superArray));

//-------------------FATTO DAL PROF E UGUALE AL MIO---------------------------//

//-------------------CON FOROF---------------------------//
// function sommaRighe(nbrArray) {
//     let sumRow = [];
//     for (const row of nbrArray) { 
//         let sum = 0;
//         for (const column of row) { 
//             sum += column;
//         }
//         sumRow.push(sum);
//     }
//     return sumRow;
// }
// console.log(sommaRighe(superArray));

//----------------- 47) Conta Occorrenze -------------------------------//

// Scrivi una funzione contaOccorrenze(array, elemento) che conta quante volte un elemento appare in un array
// function contaOccorrenze(nbrArray, elemento) {
//     let counter = 0;
//     for (let i = 0; i < nbrArray.length; i++) {
//         const currentElement = nbrArray[i];
//         if (currentElement === elemento) {
//             counter++;
//         }
//     }
//     return counter; 
// }
// console.log(contaOccorrenze(numbers2, 4)); //-> 3

//--------------------------FATTO DAL PROF----------------------------//

// function contaOccorrenze(array, elemento) {
//     let counter = 0;
//     for (let i = 0; i < array.length; i++) {
//         const selected = array[i];
//         if (selected === elemento) {
//             counter++;
//         }
//     }
//     return counter; 
// }
// console.log(contaOccorrenze(numbers2, 4)); //-> 3
// console.log(contaOccorrenze(numbers2, 8)); //-> 2
// console.log(contaOccorrenze(numbers2, 2)); //-> 1
// console.log(contaOccorrenze(numbers2, 1000)); //-> 0


//----------------- 48) Filtra indice pari -------------------------------//
// Scrivi una funzione filtraIndicePari(array) che tiene tutti gli elementi in posizione dispari

// function filtraIndicePari(nbrArray) {
//     let newArray = [];
//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];
//         if (i % 2 !== 0) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }
// console.log(filtraIndicePari(numbers2)); //-> [ 4, 112, 22, 6, 4, 8 ]

// //---------------------------FATTO DAL PROF------------------------------//

// function filtraIndicePari(array) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (i % 2 === 1) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }
// console.log(filtraIndicePari(numbers2)); //-> [ 4, 112, 22, 6, 4, 8 ]


//----------------- 49) Somma pari --------------------------------------//
// Scrivi una funzione sommaPari(array) che somma tutti i numeri pari

// function sommaPari(nbrArray) {
//     let sum = 0;
//     for (const element of nbrArray) {
//         if (element % 2 === 0) {
//             sum += element;
//         }
//     }
//     return sum;
// }
// console.log(sommaPari(numbers2)); //-> 366

//-------------------------FATTO DAL PROF--------------------------//
// function sommaPari(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element % 2 === 0) {
//       sum += element;
//     }
//   }
//   return sum;
// }
// console.log(sommaPari(numbers2)); //-> 366



//----------------- 50) trova lunghezze -------------------------------//
// Scrivi una funzione trovaLunghezzeParola(array) che restituisce un array delle lunghezze(numeri) delle stringhe che compongono l'array in input



// function trovaLunghezzeParola(array) {
//     let lengthsArray = []; 
//     for (const element of array) {
//         const length = element.length;
//         lengthsArray.push(length);
//     }
//     return lengthsArray;
// }  
// console.log(trovaLunghezzeParola(stringsArray)); //-> [ 5, 10, 8, 7 ]

//----------------FATTO DAL PROF------------------------//

// function trovaLunghezzeParola(stringArray) {
//     let newArray = []; 
//     for (let i = 0; i < stringArray.length; i++) {
//       const selectedString = stringArray[i];
//       const length = selectedString.length;
//       newArray.push(length)
//     }
//     return newArray;
// }  
// console.log(trovaLunghezzeParola(stringsArray)); //-> [ 5, 10, 8, 7 ]

//-----------in questo caso no si puo perche si sta riassegnando la constante
// const pippo = 1;
// pippo = pippo + 1;
//-------------Invece qui non darà problemi perche si mantiene l'array solo si sta infilando un valore dentro dello stesso--------------//

// const pluto = [3, 4];
// pluto.push(6); // aggiungere e togliere è possibile
// pluto = [1, 1, 1] // qui non è possibile perche sta assegnando un nuevo array a quello gia fatto

//-------------------ESERCIZI 10/11/2024   HIGH ORDER FUNCTION--------------------------//

//------------------ FILTER HIGHER ORDER FUNCTION ------------------//
function highFilter(array, conditionFunction) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];   
        if (conditionFunction(element, i, array)){
            newArray.push(element);
        }
    }
    return newArray;
}

//------------------ MAP HIGHER ORDER FUNCTION ------------------//

function highMap(array, transformFunction) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const newElement = transformFunction(element,i);
        newArray.push(newElement);     
    }
    return newArray;
}

//------------------- REDUCE HIGHER ORDER FUNCTION ------------------//

function highReduce(array, reduceFunction, startingValue) {
    let accumulator = startingValue;
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        accumulator = reduceFunction(accumulator, current, i);
    }
    return accumulator;
}

//----------------------RISOLVERE I SEGUENTI ESERCIZI IN TRE MODI:
// 1) Usando i cicli for
// 2) Usando le funzioni di ordine superiore (high order functions)
// 3) Usando le funzioni di ordine superiore native di JavaScript (Array.filter, Array.map, Array.reduce)

//------------------------------------------------------------------------------------------- FILTER---------------------------------------------------------------------------------------------------------------//

//------------------ 51) Scrivi una funzione che dato un array di numeri, crei un array con tutti i numeri maggiori di 100 ------------------//
//------------------ VERSIONE CON FOR ------------------//

// function filterGreaterThan100(nbrArray) {
//     const newArray = [];
//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];
//         if (element > 100) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }
// console.log(filterGreaterThan100(numbers2)); //-> [ 112, 156 ]

//-------------------------------VERSIONE DEL PROF-------------------------//


// //------------------ VERSIONE CON HIGHER ORDER FUNCTION ------------------//
// function higherThan100(nbr) {
//   if (nbr > 100) {
//     return true;
//   }
//   else {
//     return false
//   }
        ////return nbr > 100; // è uguale a quello scritto sopra
// }
// console.log(highFilter(numbers2,higherThan100)); //-> [ 112, 156 ]

// //------------------ VERSIONE CON FILTER NATIVE DI JS ------------------//
// console.log(numbers2.filter((nbr) => nbr > 100));


//------------------ 52) Scrivi una funzione che dato un array di stringhe, crei un array con tutte le stringhe che finiscono con 'a' ------------------//
//------------------ VERSIONE CON FOR ------------------//

// function StrEndsWithA(strArray){
//     const newArray = [];
//     for (let i = 0; i < strArray.length; i++) {
//       const str = strArray[i];

//       if (str[str.length - 1] === 'a'){
//         newArray.push(str);
//       }
//     }
//      return newArray;
// }

// console.log(StrEndsWithA(stringsArray)); //-> [ 'pizza', 'frittata']


// //------------------ VERSIONE CON HIGHER ORDER FUNCTION ------------------//

// function keepEdnsWithA(str) {
//   if (str[str.length - 1] === 'a' || str[str.length - 1] === 'A') {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// console.log(highFilter(stringsArray, keepEdnsWithA));
// // //------------------ VERSIONE CON FILTER NATIVE DI JS ------------------//
// console.log(stringsArray.filter(str => str[str.length -1] === 'a' || str[str.length -1] === 'A'));


//------------------ 53) Scrivi una funzione che dato un array di numeri, crei un array con tutti i numeri divisible per 3 ------------------//

//------------------ VERSIONE CON FOR ------------------//
// function DivisibleBy3(nbrArray) {
//   const newArray = [];
//   for (let i = 0; i < nbrArray.length; i++) {
//     const nbr = nbrArray[i];
//     if (nbr % 3 === 0) {
//       newArray.push(nbr);
//     }
//   }
//   return newArray;
// }
// console.log(DivisibleBy3(numbers2));

// //------------------ VERSIONE CON HIGHER ORDER FUNCTION ------------------//
// function checkDivisibleBy3(nbr) {
//     if (nbr % 3 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(highFilter(numbers2, checkDivisibleBy3));

// //------------------ VERSIONE CON FILTER NATIVE DI JS ------------------//
// console.log(numbers2.filter(nbr => nbr % 3 === 0));


//------------------------------------------------------------------------------------------MAP------------------------------------------------------------------------------------------------//
//------------------ 54) Scrivi una funzione che dato un array di numeri, crei un array con tutti i numeri elevati al cubo ------------------//

//------------------ VERSIONE CON FOR ------------------//
// function cubeArray(nbrArray) {
//   const newArray = [];
//   for (let i = 0; i < nbrArray.length; i++) {
//     const element = nbrArray[i];
//     const cube = element * element * element;
// //   const cube = element ** 3;
//     newArray.push(cube);
//   }
//   return newArray;
// }
// console.log(cubeArray(numbers2));
// //------------------ VERSIONE CON HIGHER ORDER FUNCTION ------------------//
// function cubeNbr(nbr) {
//   return nbr*nbr*nbr;
//// return nbr ** 3;  
// }
// console.log(highMap(numbers2, cubeNbr));
// console.log(numbers2.map(cubeNbr));
// //------------------ VERSIONE CON MAP NATIVE DI JS ------------------//
// console.log(numbers2.map(nbr => nbr**3));

//------------------ 55) Scrivi una funzione che dato un array di stringhe, crei un array con tutte le stringhe con la primera lettera in maiuscola ------------------//

//------------------ VERSIONE CON FOR ------------------//
// function FirstCharToUpper(strArray) {
//   const newArray = [];
//   for (let i = 0; i < strArray.length; i++) {
//     const str = strArray[i];
//     const firstCharUpper = str[0].toUpperCase();
//     const restOfString = str.slice(1, str.length);
//     const newStr = firstCharUpper + restOfString;
//     newArray.push(newStr);
//   }
//   return newArray;
// }
// console.log(FirstCharToUpper(stringsArray));
// //------------------ VERSIONE CON HIGHER ORDER FUNCTION ------------------//
// function firstCharUpperCase(str) {
//   const firstCharUpper = str[0].toUpperCase();
//   const restOfString = str.slice(1, str.length);
//   const newStr = firstCharUpper + restOfString;
//   return newStr;
// }
// console.log(highMap(stringsArray, firstCharUpperCase));

// //------------------ VERSIONE CON MAP NATIVE DI JS ------------------//
// console.log(stringsArray.map(firstCharUpperCase));
// console.log(stringsArray.map(str => str[0].toUpperCase() + str.slice(1, str.length)));  


//------------------ 56) Scrivi una funzione che dato un array di numeri, crei un array di stringhe di cancelletti 
// lunga quanto il numero originale    es---> [3,4,1,0] --> ['###', '####', '#', '']------------------//

//------------------ VERSIONE CON FOR ------------------//
// const numbers3 = [3, 4, 1, 0];

// function hashArray(nbrArray) {
//   const newArray = [];
//   for (let i = 0; i < nbrArray.length; i++) {
//     const nbr = nbrArray[i];
//     let hashString = '';
//     for (let j = 0; j < nbr; j++) {
//       hashString += '#';
//     }
//     newArray.push(hashString);
//   }
//   return newArray;
// }
// console.log(hashArray(numbers3));

// //------------------ VERSIONE CON HIGHER ORDER FUNCTION ------------------//
// function createHashString(nbr) {
//   let hashString = '';
//   for (let j= 0; j < nbr; j++) {
//     hashString += '#';
//   }
//   return hashString;
// }
// console.log(highMap(numbers3, createHashString));
// //------------------ VERSIONE CON MAP NATIVE DI JS ------------------//
// console.log(numbers3.map(nbr => {
//   let hashString = '';
//   for (let j= 0; j < nbr; j++) {
//     hashString += '#';
//   }
//   return hashString;
// }
// ));
// //----------------con metodo repeat----------------//
// console.log(numbers3.map(nbr => '#'.repeat(nbr)));
// console.log(numbers3.map(nbr => nbr<= 0 '#':'#'.repeat(nbr)));


//--------------------------------------------------------------------------------REDUCE----------------------------------------------------------------------------------------------//
//------------------ 57) Scrivi una funzione che dato un array di numeri, le moltiplichi tutti tra loro------------------//
//------------------ VERSIONE CON FOR ------------------//

// function multiplyAll(nbrArray) {
//   let accumulator = 1;
//   for (let i = 0; i < nbrArray.length; i++) {
//     const current = nbrArray[i];
//     accumulator *= current;
//   }
//   return accumulator;
// }
// console.log(multiplyAll(numbers2));

// //------------------ VERSIONE CON HIGHER ORDER FUNCTION ------------------//
// function multiply(accumulator, current) {
//   return accumulator * current;
// }
// console.log(highReduce(numbers2, multiply, 1));
// //------------------ VERSIONE CON REDUCE NATIVE DI JS ------------------//
// console.log(numbers2.reduce(multiply, 1));
// console.log(numbers2.reduce((acc, curr) => acc * curr, 1));


//------------------ 58) Scrivi una funzione che dato un array di stringhe, crei una stringa composta dalle prime tre lettere delle stringhe origirarie ------------------//
//------------------ VERSIONE CON FOR ------------------//
// function firstThreeLettersStrArray(strArray) {
//   let newString = '';
//   for (let i = 0; i < strArray.length; i++) {
//     const str = strArray[i];
//     const firstThreeLetters = str.slice(0, 3);
//     newString += firstThreeLetters;
//   }
//   return newString;
// }
// console.log(firstThreeLettersStrArray(stringsArray));
// //------------------ VERSIONE CON HIGHER ORDER FUNCTION ------------------//
// function getFirstThreeLetters(str) {
//   return str.slice(0, 3);
// } 
// console.log(highReduce(stringsArray, (acc, curr) => acc + getFirstThreeLetters(curr), ''));

// //------------------ VERSIONE CON REDUCE NATIVE DI JS ------------------//
// console.log(stringsArray.reduce((acc, curr) => acc + curr.slice(0, 3), ''));


//------------------ 59) Scrivi una funzione che dato un array di numeri,  trovi il maggiore ------------------//
//------------------ VERSIONE CON FOR ------------------//
// function findMaxNum(nbrArray) {
//   let max = nbrArray[0];
//   for (let i = 1; i < nbrArray.length; i++) {
//     const nbr = nbrArray[i];
//     if (nbr > max) {
//       max = nbr;
//     }
//   }
//   return max;
// }
// console.log(findMaxNum(numbers2));

// //------------------ VERSIONE CON HIGHER ORDER FUNCTION ------------------//
// function getMax(acc, curr) {
//   if (curr > acc) {
//     return curr;
//   } else {
//     return acc;
//   }
// }
// console.log(highReduce(numbers2, getMax, numbers2[0])); 
// //------------------ VERSIONE CON REDUCE NATIVE DI JS ------------------//
// console.log(numbers2.reduce(getMax, numbers2[0])); 
// console.log(numbers2.reduce((acc, curr) => curr > acc ? curr : acc, numbers2[0]));
// console.log(numbers2.reduce(getMax)); 
// console.log(numbers2.reduce((acc, curr) => curr > acc ? curr : acc)); senza mettere lo startingValue che prende il primo in automatico


//-------------------60)Scrivi una funzione che, dato un array di stringhe, trovi la stringa con più volte ripetuta la lettera t;------------------//
//------------------ VERSIONE CON FOR ------------------//
// function stringWithMostT(strArray) {
//   let newString = '';
//   let accumulator = 0;
//   for (let i = 0; i < strArray.length; i++) {
//     const str = strArray[i];
//     let tCounter = 0;
//     for (let j = 0; j < str.length; j++) {
//       const char = str[j];
//       if (char.toLowerCase() === 't') {
//         tCounter++;
//       }
//     }
//     if (tCounter > accumulator) {
//       accumulator = tCounter;
//       newString= str;
//     }
//   }
//   return newString;
// }
// console.log(stringWithMostT(stringsArray));

// //------------------ VERSIONE CON HIGHER ORDER FUNCTION ------------------//
// function countTsInString(str) {
//   let tCounter = 0;
//   for (let j = 0; j < str.length; j++) {
//     const char = str[j];
//     if (char.toLowerCase() === 't') {
//       tCounter++;
//     }
//   }
//   return tCounter;
// }
// function getStringWithMostTs(acc, curr) {
//   const currTCounter = countTsInString(curr);
//   const accuTCounter = countTsInString(acc);
//   if (currTCounter > accuTCounter) {
//     return curr;
//   }
//   else {
//     return acc;
//   }
// }
// console.log(highReduce(stringsArray, getStringWithMostTs, ''));
// //------------------ VERSIONE CON REDUCE NATIVE DI JS ------------------//
// console.log(stringsArray.reduce((acc, curr) => countTsInString(curr) > countTsInString(acc) ? curr : acc, ''));


//--------------------------------------VERSIONE DEL PROF-----------------------------------------------//
// function counT(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         const upperChar = char.toUpperCase();
//         if (upperChar === 'T') {
//             count++;
//         }
        
//     }
//     return count;
// }

// function findStrWithMoreT(strArray) {
//     let accumulator = '';
//     let accumulatorTcount = 0;
//     for (const current of strArray) {
//         const currentTcount = counT(current);
//         if (currentTcount > accumulatorTcount) {
//             accumulator = current;
//             accumulatorTcount = currentTcount;
//         }        
//     }
//     return accumulator;
// }
// console.log(findStrWithMoreT(stringsArray));

// //----------------------------------------VERSIONE PIU BREVE Ma conta il accumulator ogni volta e potrebbe diventare menoso-----------------------------------//
// function findStrWithMoreT2(strArray) {
//     let accumulator = '';
//     for (const current of strArray) {
//         if (counT(current) > counT(accumulator)) {
//             accumulator = current;
//         }        
//     }
//     return accumulator;
// }

// //------------------HIGH ORDER FUNCTION------------------------------------------//
// function compareTnumber(acc, curr) {
//     if (counT(curr)> counT(acc)) {
//         return curr;
//     }
//     else{
//         return acc;
//     }
// }

// console.log(findStrWithMoreT2(stringsArray));
// console.log(highReduce(stringsArray, compareTnumber,''));
// console.log(stringsArray.reduce(compareTnumber,''));


//---------------------------- Esercizi Mercoledi 12-11-2025-----------------------------------------//

const prodotti = [
  { id: 1, nome: "Mela", categoria: "Frutta", prezzo: 1.20, scadenza: "2025-11-15", peso: 0.2, biologico: true },
  { id: 2, nome: "Pasta", categoria: "Pasta e Riso", prezzo: 0.80, scadenza: "2026-05-10", peso: 0.5, biologico: false },
  { id: 3, nome: "Latte", categoria: "Latticini", prezzo: 1.10, scadenza: "2025-11-14", peso: 1, biologico: true },
  { id: 4, nome: "Pane", categoria: "Pane e Sostituti", prezzo: 1.50, scadenza: "2025-11-12", peso: 0.3, biologico: false },
  { id: 5, nome: "Yogurt", categoria: "Latticini", prezzo: 0.60, scadenza: "2025-11-20", peso: 0.125, biologico: true },
  { id: 6, nome: "Riso", categoria: "Pasta e Riso", prezzo: 1.30, scadenza: "2027-02-20", peso: 1, biologico: false },
  { id: 7, nome: "Pomodoro", categoria: "Ortaggi", prezzo: 0.90, scadenza: "2025-11-18", peso: 0.3, biologico: true },
  { id: 8, nome: "Acqua", categoria: "Bevande", prezzo: 0.30, scadenza: "2026-12-31", peso: 1.5, biologico: false },
  { id: 9, nome: "Biscotti", categoria: "Dolci", prezzo: 2.00, scadenza: "2026-03-01", peso: 0.2, biologico: false },
  { id: 10, nome: "Uova", categoria: "Uova", prezzo: 2.50, scadenza: "2025-11-30", peso: 0.6, biologico: true },
  { id: 11, nome: "Caffè", categoria: "Bevande", prezzo: 3.00, scadenza: "2026-10-01", peso: 0.25, biologico: false },
  { id: 12, nome: "Formaggio", categoria: "Latticini", prezzo: 4.50, scadenza: "2025-12-10", peso: 0.2, biologico: true },
  { id: 13, nome: "Carote", categoria: "Ortaggi", prezzo: 0.70, scadenza: "2025-11-25", peso: 1, biologico: true },
  { id: 14, nome: "Tonno", categoria: "Conserve", prezzo: 1.80, scadenza: "2027-01-15", peso: 0.16, biologico: false },
  { id: 15, nome: "Cioccolato", categoria: "Dolci", prezzo: 1.70, scadenza: "2026-04-30", peso: 0.1, biologico: false }
];


//------------------------61) mettere in ordine l'array di prodotti per prezzo dal più costoso in giù---------------------------------//
// function orderPriceAscending(p1, p2) {
//     return p2.prezzo - p1.prezzo;
// }
// prodotti.sort(orderPriceAscending)
// console.log(prodotti);

//62) mettere in ordine per nome discendente
// function orderPriceDescending(p1, p2) {
//     return p1.prezzo  - p2.prezzo;
// }
// prodotti.sort(orderPriceDescending);
// console.log(prodotti);

//---------------------------------63) mettere in ordine per categoria ascendente, e se uguali per peso dal più pesante--------------------//

// function orderByCategoryAndWeigth(p1, p2) {
//     return (
//         p1.categoria.localeCompare(p2.categoria) ||
//         p2.peso - p1.peso   // mayor peso primero
//     );
// }
// prodotti.sort(orderByCategoryAndWeigth)
// console.log(prodotti);
//-------------------------------- ALTRA VERSIONE--------------------------------//
// function orderByCategoryAndWeigth(p1, p2) {
//     // Primero comparar por categoría
//     const categoriaCompare = p1.categoria.localeCompare(p2.categoria);
//     if (categoriaCompare !== 0) {
//         return categoriaCompare;
//     }

//     // Si la categoría es igual, comparar por peso
//     if (p1.peso > p2.peso) return -1;   // mayor peso primero
//     if (p1.peso < p2.peso) return 1;
//     return 0;
// }

//--------------------------------------64) mettere in ordine per anno di scadenza dal più vicino -----------------------------//
// function orderByDataScad(p1, p2) {
//   const data1 = new Date(p1.scadenza).getTime();
//   const data2 = new Date(p2.scadenza).getTime();

//   return data1 - data2; // la fecha más cercana primero
// }

// prodotti.sort(orderByDataScad);
// console.log(prodotti);
//---------------------------PIU COMPATTO------------------------------------//
// productos.sort((p1, p2) =>
//   new Date(p1.vencimiento).getTime() - new Date(p2.vencimiento).getTime()
// );

//65) mettere in ordine per categoria discendente, se uguali per peso dal più piccolo, se uguali per nome ascendente
function orderByCatPesoNome(p1, p2) {
  // 1) Categoria discendente (Z → A)
  const catCompare = p2.categoria.localeCompare(p1.categoria);
  if (catCompare !== 0) {
    return catCompare;
  }
  // 2) Peso ascendente (dal più piccolo)
  else if (p1.peso !== p2.peso) {
    return p1.peso - p2.peso;
  }
  else{
     // 3) Nome ascendente (A → Z)
  return p1.nome.localeCompare(p2.nome);
  }
 
}

prodotti.sort(orderByCatPesoNome);
console.log(prodotti);
