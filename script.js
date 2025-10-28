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

function repString (str5, multiplier){
    for (let i = 0; i < multiplier; i++) {
       console.log(str5);  
    }
}

// const stringProvaMulti= repString('ciao', 10);
// console.log(stringProvaMulti);

// const multiStringLambda= (str5, multiplier) => str5.repeat(multiplier);
// const stringProvaMulti2 = multiStringLambda ('Credere \n', 25);
// console.log(stringProvaMulti2);
