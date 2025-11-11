// function sayHello() {
//     console.log('Hello');
// }
// const helloHello = () => console.log('Hello Hello!!');

// const superHello = function(){
//     console.log('Super Hello!!!');
// }
// console.log (helloHello);
// console.log (superHello);
// console.log (sayHello);


//--------------------------- FUNZIONI COME PARAMETRI IN INPUT DI ALTRA FUNZIONE---------------------------------- //
//---------------------con il for of-------------------------//
const numbers0 = [-100, -30, 20, 11, 1, 40, -21, -15, 3, 9, 300, 5001];
const testArray = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua'];
// function keepPositive(nbrArray) {
//     const newArray = [];
//     for (const nbr of nbrArray) {
//         if (nbr >= 0){
//             newArray.push(nbr);
//         }
//     }
//     return newArray;
// }
// console.log(keepPositive(numbers0));

//----------------------con il for-------------------------//
// function keepPositive(nbrArray) {
//     const newArray = [];
//     for (let i = 0; i < nbrArray.length; i++) {
//         const nbr = nbrArray[i];
//         if (nbr >= 0){
//             newArray.push(nbr);
//         }
//     }
//     return newArray;
// }
// console.log(keepPositive(numbers0));


//---------------------- Numeri Maggiori di 30--------------------------//
// function keepNumbersGreaterThan30(nbrArray) {
//     const newArray = [];
//     for (let i = 0; i < nbrArray.length; i++) {
//         const nbr = nbrArray[i];
//         if (nbr > 30){
//             newArray.push(nbr);
//         }   
//     }
//     return newArray;
// }
// console.log(keepNumbersGreaterThan30(numbers0));

//---------------------- Stringhe con più di 3 caratteri--------------------------//
// function keepLongerThan3(strArray) {
//     const newArray = [];
//     for (let i = 0; i < strArray.length; i++) {
//         const str = strArray[i];
//         if (str.length > 3){
//             newArray.push(str);
//         }   
//     }
//     return newArray;
// }
// console.log(keepLongerThan3(testArray));

//---------------------- FUNZIONE (HIGH ORDER) GENERICA CHE FILTRA IN BASE A UN'ALTRA FUNZIONE (FUNZIONE DI CONDIZIONE) --------------------------//
//--------------------METODO FILTER---------------------//
// function highFilter(array, conditionFunction) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];   
//         if (conditionFunction(element)){
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }

//---------------------Funzione di condizione che filtra i numeri pari---------------------//

// function isEven(nbr) {
//     if (nbr % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(highFilter(numbers0, isEven));

//---------------------Filtra le stringhe che non iniziano con la lettera "p"---------------------//
// function notStartingWithP(str) {
//     const firstChar = str[0];
//     const firstLower = firstChar.toLowerCase();
//     if (firstLower !== 'p'){
//         return true;
//     } 
//     else{
//         return false;
//     }
// }

// console.log(highFilter(testArray, notStartingWithP));
//---------------------Filtra i numeri negativi funzione lamda---------------------//
// console.log(highFilter(numbers0, (nbr) => nbr < 0 ));

//---------------------Usa il metodo filter incluso in JS ---------------------//

// console.log(numbers0.filter( (nbr) => nbr < 0 ));

//--------------------METODO MAP---------------------//
//---------------------Funzione che moltiplica per 3 i numeri di un array---------------------//
// function multiplyBy3(nbrArray) {
//     const newArray = [];
//     for (let i = 0; i < nbrArray.length; i++) {
//         const nbr = nbrArray[i];
//         const newNbr = nbr * 3;
//         newArray.push(newNbr);     
//     }
//     return newArray;    
// }
// console.log(multiplyBy3(numbers0));

//----------------- Funzione che prende un numero che lo moltiplica per la sua posizione nell'array ---------------------//
// function multiplyByArrayPosition(nbrArray){
//     const newArray = [];
//     for (let i = 0; i < nbrArray.length; i++) {
//         const nbr = nbrArray[i];
//         const newNbr = nbr * i;
//         newArray.push(newNbr);     
//     }
//     return newArray;
// }
// console.log(multiplyByArrayPosition(numbers0));

//---------------------- Funzione che transforma in maiuscolo le stringhe di un array --------------------------//
// function toUpperCaseArray(strArray){
//     const newArray = [];
//     for (let i = 0; i < strArray.length; i++) {
//         const str = strArray[i];
//         const upperStr = str.toUpperCase();
//         newArray.push(upperStr);     
//     }
//     return newArray;
// }
// console.log(toUpperCaseArray(testArray));


//---------------------Funzione (HIGH ORDER) GENERICA CHE TRASFORMA IN BASE A UN'ALTRA FUNZIONE (FUNZIONE DI TRASFORMAZIONE O MAPPING) --------------------------//
function highMap(array, transformFunction) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const newElement = transformFunction(element,i);
        newArray.push(newElement);     
    }
    return newArray;
}

//---------------------Funzione di trasformazione che moltiplica per 3 ai numeri---------------------//
// function multiplyNbrBy3number(nbr) {
//     return nbr * 3;
// }
// console.log(highMap(numbers0, multiplyNbrBy3number));
// //------------------------ con la Lambda -----------------------//
// console.log(highMap(numbers0, (nbr) => nbr * 3 ));
// //---------------------Usa il metodo map incluso in JS ---------------------//
// console.log(numbers0.map( (nbr) => nbr * 3 ));
//---------------------Funzione di trasformazione che trasforma in maiuscolo le stringhe---------------------//
function stringToUpperCase(str) {
    return str.toUpperCase();
}
console.log(highMap(testArray, stringToUpperCase));
//------------------------ con la Lambda -----------------------//
console.log(highMap(testArray, (str) => str.toUpperCase() ));
//---------------------Usa il metodo map incluso in JS ---------------------//
console.log(testArray.map( (str) => str.toUpperCase() ));

//---------------------Funzione di trasformazione che moltiplica per la posizione le numeri---------------------//
function multiplyNbrByPosition(nbr, i) {
    return nbr * i;
}
console.log(highMap(numbers0, multiplyNbrByPosition));
//------------------------ con la Lambda -----------------------//
console.log(highMap(numbers0, (nbr, i) => nbr * i ));
//---------------------Usa il metodo map incluso in JS ---------------------//
console.log(numbers0.map( (nbr, i) => nbr * i ));