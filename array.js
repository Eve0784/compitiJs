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

function arrayToUpperCaseWordStartingWithP(stringArray) {
    const newArray = [];
     for (let i = 0; i < stringArray.length; i++) {
        const element = stringArray[i];
        if (element[0] ==='p') {
            const elementUpper = element.toUpperCase();
            newArray.push(elementUpper);
        }
        else{
            newArray.push(element)
        }
     }
     return newArray;
}

console.log(arrayToUpperCaseWordStartingWithP(strings));
