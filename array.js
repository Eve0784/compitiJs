// console.log('è il momento degli Array');

// // -------------------ARRAY---------------------//
let numbers = [20, 10, 22, 44, 35, 0, -1, 1.5, 100, 20];
// console.log(numbers.length); // -> 10
// console.log(numbers[3]); // -> 44

let booleans = [true, true, true, false, true];
// console.log(booleans.length); // -> 5
// console.log(booleans[3]); // -> false

let strings = ['pippo','pluto', 'topolino', 'leonardo'];

// console.log(strings.length); // -> 4
// console.log(strings[3]); // -> leonardo

// let strangeArray = [34, false, 'leonardo', 2, 4, 'leonardo']; // MAI E POI MAI!!!!
// console.log(strangeArray.length); // -> 6
// console.log(booleans[3]); // -> 2

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     console.log(element);
    
// }

// let i = 0;
// while (i < numbers.length){
//     const element = numbers[i];
//     console.log(element);
//     i++;
    
// }

// for (const element of numbers) {  // FOR OF
//     console.log(element);    
// }

// for (const element of strings) {
//     console.log(element);
// }

//-----------------------AGGIUNGERE ELEMENTI------------------------//
 //--------elementi in fondo PUSH -----------//
//  strings.push('paperone');
//  console.log(strings);

//  //--------elementi in cima UNSHIFT -----------//
 
//  strings.unshift('paperino');
//  console.log(strings);

 
//-----------------------TOGLIERE ELEMENTI------------------------//
//    //--------toglie l'ultimo elemento POP -----------//
// const rimosso = strings.pop();
// console.log(strings);
// console.log('ho tolto '+ rimosso);

//   //--------toglie il primo elemento SHIFT -----------//
//  const rimosso2 = strings.shift();
//  console.log(strings);
//  console.log('ho tolto '+ rimosso2);
 
  //--------toglie l'elemento passando la posizione da cui parte e la quantita che si vuole cancellare SPLICE -----------//
//  const rimosso3 = strings.splice(2,1); // splice sempre restituisce un array perche come puo togliere piu di un elemento crea un array con gli elementi tolti
//  console.log(strings);
//  console.log('ho tolto '+ rimosso3);

//  const rimosso4 = numbers.splice(1,3);
//  console.log(numbers);
//  console.log('ho tolto '+ rimosso4);
 
//---------------CAMBIARE GLI ELEMENTI -------------------------//

// strings[0] = 'superpippo';
// console.log(strings);

// strings[3] ='super'+ strings[3];
// console.log(strings);

// numbers[4] = 2;
// console.log(numbers);

// numbers[8] = numbers[8] * 2;
// console.log(numbers);

//------------------------PATTERN DEGLI ARRAY -----------------------------//
//-----------------MAP-> modifica tutti o parte degli elementi di un array----------------------------------//
//1) Transformare tutte le stringe dell'array strings al maiuscolo

// for (let i = 0; i < strings.length; i++) {
//     strings[i] = strings[i].toUpperCase();  
// }
// console.log(strings);

// function arrayToUpperCase(stringArray) {
//     // debugger;
//     const newArray = [];
//      for (let i = 0; i < stringArray.length; i++) {
//         const element = stringArray[i];
//         const elementUpper = element.toUpperCase();
//         newArray.push(elementUpper);
//      }
//      return newArray;
// }   
// console.log(arrayToUpperCase(strings));

//2) Moltiplica per due tutti i numeri  in un array 

// function multiplyBy2Array(numberArray) {
//     const newArray = [];
//      for (let i = 0; i < numberArray.length; i++) {
//         const element = numberArray[i];
//         const doubleElement = element * 2;
//         newArray.push(doubleElement);
//      }
//      return newArray;
// }   
// console.log(multiplyBy2Array(numbers));

// 3) Transformare tutte le stringe dell'array strings che iniziano per p al maiuscolo

// function arrayToUpperCaseWordStartingWithP(stringArray) {
//     const newArray = [];
//      for (let i = 0; i < stringArray.length; i++) {
//         const element = stringArray[i];
//         if (element[0] ==='p') {
//             const elementUpper = element.toUpperCase();
//             newArray.push(elementUpper);
//         }
//         else{
//             newArray.push(element)
//         }
//      }
//      return newArray;
// }

// console.log(arrayToUpperCaseWordStartingWithP(strings));

//-----------------FILTER-> decide quali elementi dell'array tenere----------------------------------//

//------------ scrivere una funzione che rimuove dell'array tutti i numeri dispari---------//

// function removeOdd(nbrArray) {
//     const newArray = [];
//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];

//         if (element % 2  === 0) {
//             newArray.push(element)    
//         }  
//     }
//      return newArray; 
// } 
// console.log(removeOdd(numbers));

// //------------- scrivere una funzione che rimuova da un array di stringhe tutte quelle più corte di 6 caratteri---------//

// function removeShorterThan6Char(strArray) {
//     const newArray = [];
//     for (let i = 0; i < strArray.length; i++) {
//         const element = strArray[i];
//         if (element.length > 6) {
//             newArray.push(element);            
//         }   
//     }
//     return newArray;
// }
// console.log(removeShorterThan6Char(strings));

// //------------- scrivere una funzione che rimuova da un array di stringhe che iniziano per p---------//

// function removeStartingWithP(strArray) {
//     const newArray = [];
//     for (let i = 0; i < strArray.length; i++) {
//         const element = strArray[i];
//         const elementLower = element.toLowerCase();
//         if (elementLower[0] !=='p') {
//             newArray.push(elementLower);            
//         }   
//     }
//     return newArray;
// }
// console.log(removeStartingWithP(strings));

//---------------scrivere una funzione che rimuova dall'array tutti i numeri negativi-----------------//

// function keepPositiveNumbers(nbrArray) {
//     const newArray = [];
//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];
//         if (element >= 0) {
//             newArray.push(element) 
//         }   
//     }
//     return newArray;
// } 
// console.log(keepPositiveNumbers(numbers));

//-----------------REDUCE-> TRASFORMA L ARRAY PRODUCENDO UN RISULTATO CHE DIPENDE DAI COMPONENTI DELL ARRAY----------------------------------//
// const string1 = 'trasforma l array producendo un risultato che dipende dai componenti dell array'
// const toUpperCase = string1.toUpperCase();
// console.log(toUpperCase);

//--------------- 1) scrivere una funzione che somma tutti i numeri di un array di numeri --------------------//

// function sumAll(nbrArray) {
//     let result = 0;
//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];
//         result += element;
//     }
//     return result;
// }
// console.log(sumAll(numbers));

// //--------------- 2) scrivere una funzione che calcola la media di un array di numeri --------------------//

// function calculateAverage(nbrArray) {
    
//     let sum = 0;
//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];
//         sum += element
//     }
//     const average = sum / nbrArray.length;
//     return average;
// }
// console.log(calculateAverage(numbers));


// //-----------chiamando la funzione di somma------------//

// function calculateAverage2(nbrArray) {
//     const sum = sumAll(nbrArray);
//     const average = sum / nbrArray.length;
//     return average;
// }
// console.log(calculateAverage2(numbers));

   //----------------- 3) scrivere una funzione che genera una stringa composta dalle iniziale delle stringhe contenute in un array--------//

//    function concatFirstChar(strArray) {
//     let newString = '';
//     for (let i = 0; i < strArray.length; i++) {
//         const element = strArray[i];
//         const firstChar = element[0];
//         newString += firstChar;   
//     }
//     return newString;
//    }
//    console.log(concatFirstChar(strings));
   
//-------------- 4) scrivere una funzione che restituisce la somma delle lunghezze delle stringhe di un array -----------------------//

// function sumLength(strArray) {
//     let sumofLength = 0;
//     for (let i = 0; i < strArray.length; i++) {
//         const element = strArray[i];
//         const length = element.length;
//         sumofLength += length; 
//     }
//     return sumofLength;   
// }
// console.log(sumLength(strings));

//-------------- 5) scrivere una funzione che trova il numero piu grande in un array -----------------------//

// function findMax(nbrArray) {
//     let max = 0;
//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];
//         if (element > max) {
//             max = element;            
//         }
//     }
//     return max;
// }
// console.log(findMax(numbers));

//------------CONSTRUTTORE-------------------//

// const pluto = new Array(); //---------- conts pluto = [];    equivalente---------//
// console.log(pluto);

// const pippo2 = new Array(3,5,8); //---------- conts pippo = [3,5,8];    equivalente---------//
// console.log(pippo);

// const paperino = new Array(10);  //---------- crea un array con 10 elementi/ posti vuoti dentro l'array-----------//
// console.log(paperino);

// for (const element of paperino) {
//     console.log(element); //---------tutti undefined----------//
// }

// //------------------------indexOf---> della posizione di un elemento-----------------------------//
// console.log(numbers.indexOf(100));
// console.log(numbers.indexOf(9999)); //----------se l'elemento non è nell'array restituisce -1   ------//

// //------------------------includes---> ci dice se un elemento è contenuto o meno -----------------------------//
// console.log(numbers.includes(100));
// console.log(numbers.includes(9999));

// //------------------------concat--> ci permette di unire due array creandone uno nuovo -----------------------------//
// const topolino = ['leonardo', 'mattia', 'daniel'];
// const paperina = ['evelyn','salma','stefania'];
// const gastone = topolino.concat(paperina);
// console.log(gastone);

//----------------------FUNZIONE MULTI PARAMETRICHE-------------------------------//

// function sumAllParams(a,b,c) {
//     const sum = a + b + c;
//     return sum;    
// }
//--------invece di passare i parametri fissi si mettono i 3 puntini poi il nome che si vuole dare all'array, cosi si possono mettere dopo quanti parametri se ne vuole-----------//

// function sumAllParams(...params) {
//     let result = 0;
//     for (let i = 0; i < params.length; i++) {
//         const element = params[i];
//         result += element;        
//     }
//     return result;
// }
// console.log(sumAllParams(2,5,6,7));

//---------------ARRAY DI ARRAY------------------//
const superArray = [[1, 2, 3] , [1, 1, 1] , [3, 2, 1]];
// console.log(superArray.length);
// console.log(superArray[0]);

const arrayInterno = superArray[0];
const element0dellArrayInterno = arrayInterno[0];

// console.log(element0dellArrayInterno);
// console.log(superArray[0][0]);


for (let rowNumber = 0; rowNumber < superArray.length; rowNumber++) {
    const row = superArray[rowNumber];
    // console.log(row);
    for (let columnNumber = 0; columnNumber < row.length; columnNumber++) {
        const cell = row[columnNumber];
        console.log(cell);   
    }
}
