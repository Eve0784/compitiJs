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
function isGreaterThan100(nbr) {
    return nbr > 100;    
}

function isGreaterThan5000(nbr) {
    return nbr > 5000;    
}
// console.log(nbrsArray.filter(isGreaterThan100));
// console.log(nbrsArray.find(isGreaterThan100));
// console.log(nbrsArray.filter(isGreaterThan100)[0]);

//------------------------------------------------------SOME-------------------------------------------------------------------//
//-------------ritorna un true o un false dependiendo della funzione di condizione usata dentro del some-----//
console.log(nbrsArray.some(isGreaterThan100));
console.log(nbrsArray.some(isGreaterThan5000));


//--------------------------------------------------SORT----------------------------------------------------------------------//
//--------------------mettere in ordine gli elementi di un array-----------------------------------------//
//--segue il ordinamento delle stringhe ma non ordinamento numerico. Se si vuole un orden numerico si deve dare un criterio --//
// nbrsArray.sort();
// console.log(nbrsArray);

// students.sort();
// console.log(students);

//--------COMPARE FUNCTION----------//
function compareNumbersAscending(n1,n2) {
    // if (n1 > n2){
    //     return 1;
    // }
    // else if (n2 > n1){
    //     return -1;
    // }
    // else{
    //     return 0;
    // }
    return n1 - n2;
}

function compareNumbersDescending(n1,n2) {
    // if (n1 > n2){
    //     return -1;
    // }
    // else if (n2 > n1){
    //     return 1;
    // }
    // else{
    //     return 0;
    // }
    return n2 - n1;
}
function compareStringsAscending(s1, s2){
    return s1.localeCompare(s2);
    
}

function compareStringsDescending(s1, s2){
    //return -s1.localeCompare(s2);
   return s2.localeCompare(s1);
    
}
nbrsArray.sort(compareNumbersAscending);
nbrsArray.sort((n1, n2) => -compareNumbersAscending(n1, n2));
console.log(nbrsArray);

students.sort(compareStringsAscending);
console.log(students);

students.sort(compareStringsDescending);
console.log(students);

const cars = [
    {
        model:"g-wagon",
        producer: "mercedes",
        maxSpeed: 180
    },
     {
        model:"cla",
        producer: "mercedes",
        maxSpeed: 225
    },
     {
        model:"panda",
        producer: "fiat",
        maxSpeed: 150
    },
     {
        model:"bravo",
        producer: "fiat",
        maxSpeed: 180
    },
     {
        model:"a4",
        producer: "audi",
        maxSpeed: 225
    }
]
function compareCarsbySpeedDescending(car1, car2) {
    return car2.maxSpeed - car1.maxSpeed;    
}
cars.sort(compareCarsbySpeedDescending);
console.log(cars);

function compareCarsByModelAscending(car1, car2) {
    return car1.model.localeCompare(car2.model);    
}
// cars.sort(compareCarsByModelAscending);
// console.log(cars);

function compareCarsBySpeedDescendingAndModelAscending(car1, car2) {
   if (car1.maxSpeed > car2.maxSpeed) {
    return -1;    
   }
    else  if (car2.maxSpeed > car1.maxSpeed) {
    return 1;    
   }
   else{
    return car1.model.localeCompare(car2.model);
    //return compareCarsByModelAscending;
   }
}
cars.sort(compareCarsBySpeedDescendingAndModelAscending);
console.log(cars);
