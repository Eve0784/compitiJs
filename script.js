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

// for (i=1 ; i<=100; i++){
//     if(i%7===0){
//         console.log(i+" * ");
        
//     }
// }

// 9) usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai quadrati perfetti

// for (i=1 ; i<=100; i++){
//     const quadrato= Math.sqrt(i);
//     if(quadrato%1===0){
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

// const num1=parseInt(prompt("Dimmi un primo numero:"));
// const num2=parseInt(prompt("Dimmi un secondo numero:"));


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



// 12) chiedi all'utente quanti anni ha e digli quante ore ha gia' vissuto

let eta =parseInt(prompt("Quanti anni hai?"));
let ore = eta * 365 * 24; // anni × giorni × ore
alert("Hai vissuto circa " + ore + " ore.");