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
// function stringToUpperCase(str) {
//     return str.toUpperCase();
// }
// console.log(highMap(testArray, stringToUpperCase));
// //------------------------ con la Lambda -----------------------//
// console.log(highMap(testArray, (str) => str.toUpperCase() ));
// //---------------------Usa il metodo map incluso in JS ---------------------//
// console.log(testArray.map( (str) => str.toUpperCase() ));

//---------------------Funzione di trasformazione che moltiplica per la posizione le numeri---------------------//
// function multiplyNbrByPosition(nbr, i) {
//     return nbr * i;
// }
// console.log(highMap(numbers0, multiplyNbrByPosition));
// //------------------------ con la Lambda -----------------------//
// console.log(highMap(numbers0, (nbr, i) => nbr * i ));
// //---------------------Usa il metodo map incluso in JS ---------------------//
// console.log(numbers0.map( (nbr, i) => nbr * i ));

//--------------------- METODO REDUCE ---------------------//
//---------------------Funzione che calcola la somma di tutti i numeri di un array---------------------//
// function sumAll(nbrArray) {
//     let sum = 0;
//     for (let i = 0; i < nbrArray.length; i++) {
//         const nbr = nbrArray[i];
//         sum += nbr;     
//     }
//     return sum;
// }
// console.log(sumAll(numbers0));
// //--------------------- Funzione che accumula tutte le iniziali delle stringhe di un array in una singola stringa ---------------------//
// function stringWithFirstChar(strArray) {
//     let newString = '';
//     for (let i = 0; i < strArray.length; i++) {
//         const str = strArray[i];
//         const firstChar = str[0];
//         newString += firstChar;     
//     }
//     return newString;
// }
// console.log(stringWithFirstChar(testArray));


//---------------------Funzione (HIGH ORDER) GENERICA CHE ACCUMULA I VALORI DI UN ARRAY IN BASE A UNA FUNZIONE DI ACCUMULO (REDUZIONE)---------------------//
// function highReduce(array, reduceFunction, startingValue) {
//     let accumulator = startingValue;
//     for (let i = 0; i < array.length; i++) {
//         const current = array[i];
//         accumulator = reduceFunction(accumulator, current, i);
//     }
//     return accumulator;
// }
//---------------------Funzione di accumulo che calcola la somma di tutti i numeri---------------------//
// function sumAccumulator(sum, nbr) {
//     return sum + nbr;
// } 
// console.log(highReduce(numbers0, sumAccumulator , 0));

// //------------------------ con la Lambda -----------------------//
// console.log(highReduce(numbers0, (sum,nbr) => sum + nbr , 0));
// // //---------------------Usa il metodo reduce incluso in JS ---------------------//
// console.log(numbers0.reduce( (sum,nbr) => sum + nbr , 0));

// //---------------------Funzione di accumulo che accumula tutte le iniziali delle stringhe in una singola stringa---------------------//
// function sumfirstChar(acc, curr) {
//     const firstChar = curr[0];
//     return acc + firstChar;
// } 
// console.log(highReduce(testArray, sumfirstChar, ''));
// //---------------------Usa il metodo reduce incluso in JS ---------------------//
// console.log(testArray.reduce(sumfirstChar, ''));
// //------------------------ con la Lambda -----------------------//
// console.log(testArray.reduce((acc, curr) => acc + curr[0], ''));


const students = ['luis', 'alexander', 'stefania', 'eros', 'daniel', 'salma'];
const nbrsArray = [30, 12, 5, 111, 300, 400, 1];
//-------------------------------------------------------- FOREACH---------------------------------------------------------------//

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     console.log(student);
// }

// for (const student of students) { console.log(student);}

// students.forEach((student,i) => console.log(i,student));


//--------------------------------------------------------FIND-----------------------------------------------------------------//
// function isGreaterThan100(nbr) {
//     return nbr > 100;    
// }

// function isGreaterThan5000(nbr) {
//     return nbr > 5000;    
// }
// // console.log(nbrsArray.filter(isGreaterThan100));
// // console.log(nbrsArray.find(isGreaterThan100));
// // console.log(nbrsArray.filter(isGreaterThan100)[0]);

// //------------------------------------------------------SOME-------------------------------------------------------------------//
// //-------------ritorna un true o un false dependiendo della funzione di condizione usata dentro del some-----//
// console.log(nbrsArray.some(isGreaterThan100));
// console.log(nbrsArray.some(isGreaterThan5000));


// //--------------------------------------------------SORT----------------------------------------------------------------------//
// //--------------------mettere in ordine gli elementi di un array-----------------------------------------//
// //--segue il ordinamento delle stringhe ma non ordinamento numerico. Se si vuole un orden numerico si deve dare un criterio --//
// // nbrsArray.sort();
// // console.log(nbrsArray);

// // students.sort();
// // console.log(students);

// //------------------------------------------------COMPARE FUNCTION---------------------------------------//
//----------------------COMPARE NUMBERS---------------------------//
// function compareNumbersAscending(n1,n2) {
//     // if (n1 > n2){
//     //     return 1;
//     // }
//     // else if (n2 > n1){
//     //     return -1;
//     // }
//     // else{
//     //     return 0;
//     // }
//     return n1 - n2;
// }

// function compareNumbersDescending(n1,n2) {
//     // if (n1 > n2){
//     //     return -1;
//     // }
//     // else if (n2 > n1){
//     //     return 1;
//     // }
//     // else{
//     //     return 0;
//     // }
//     return n2 - n1;
// }
//--------------------------------COMPARE STRINGS-------------------------------------//
// function compareStringsAscending(s1, s2){
//     return s1.localeCompare(s2);
    
// }

// function compareStringsDescending(s1, s2){
//     //return -s1.localeCompare(s2);
//    return s2.localeCompare(s1);
    
// }

//------------------------------NUMBERS--------------------------------------//
// nbrsArray.sort(compareNumbersAscending);
// nbrsArray.sort((n1, n2) => -compareNumbersAscending(n1, n2));
// console.log(nbrsArray);

// students.sort(compareStringsAscending);
// console.log(students);

// students.sort(compareStringsDescending);
// console.log(students);


// const cars = [
//     {
//         model:"g-wagon",
//         producer: "mercedes",
//         maxSpeed: 180
//     },
//      {
//         model:"cla",
//         producer: "mercedes",
//         maxSpeed: 225
//     },
//      {
//         model:"panda",
//         producer: "fiat",
//         maxSpeed: 150
//     },
//      {
//         model:"bravo",
//         producer: "fiat",
//         maxSpeed: 180
//     },
//      {
//         model:"a4",
//         producer: "audi",
//         maxSpeed: 225
//     }
// ]
// function compareCarsbySpeedDescending(car1, car2) {
//     return car2.maxSpeed - car1.maxSpeed;    
// }
// cars.sort(compareCarsbySpeedDescending);
// console.log(cars);

// function compareCarsByModelAscending(car1, car2) {
//     return car1.model.localeCompare(car2.model);    
// }
// // cars.sort(compareCarsByModelAscending);
// // console.log(cars);

// function compareCarsBySpeedDescendingAndModelAscending(car1, car2) {
//    if (car1.maxSpeed > car2.maxSpeed) {
//     return -1;    
//    }
//     else  if (car2.maxSpeed > car1.maxSpeed) {
//     return 1;    
//    }
//    else{
//     return car1.model.localeCompare(car2.model);
//     //return compareCarsByModelAscending;
//    }
// }
// cars.sort(compareCarsBySpeedDescendingAndModelAscending);
// console.log(cars);

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
