// console.log('Oggetti!!');
// nome String
// età Number
// istruzione String
// sesso String
// nazionalià String
// sposato Boolean
// indirizzo String
// interessi Array

// const leonardo = {
//     name: 'Leonardo',
//     surname: 'Silva',
//     age: 27,
//     gender: 'Maschio',
//     nationality: 'Perù',
//     isMarried: false,
//     // address: 'Via Dodecannesso 16', 
//     address: {
//         street: 'Via Dodecannesso',
//         civic: 16,
//         city: 'Genova',
//         country: 'Italia'
//     },
//     interests: ['musica', 'pagliaccio', 'bullo']
// }

//-----------ACCEDERE ALLE PROPRIETÀ------------------//
// console.log(leonardo);
// console.log(leonardo.name);
// console.log(leonardo.age);
// console.log(leonardo.address.street);
// console.log(leonardo.interests[0]);

//-----------CAMBIARE O AGGIUNGERE PROPRIETÀ------------------//

// leonardo.age = 25;
// leonardo.address.civic = 30;
// leonardo.interests[2] = 'superbullo';
// leonardo.siblings = 1; // aggiungere una nuova propietà
// delete leonardo.gender; //eliminare una proprietà

// console.log(leonardo);

//---------------------FUNZIONI COME PROPRIETÀ--------------//
// function saluta() {
//     console.log('Ciao sono Leonardo!!'); 
// }

// leonardo.speak = saluta;
// leonardo.speak();


//------------------------//

// function calculateAverage(nbrArray) {
    
//     let sum = 0;
//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];
//         sum += element
//     }
//     const average = sum / nbrArray.length;
//     return average;
// }


// const leonardo = {
//     name: 'leonardo',
//     surname: 'silva',
//     yob: 1998,
//     marks: [5, 8, 10, 7]
// }

// const evelyn = {
//     name: 'evelyn',
//     surname: 'medina',
//     yob: 1984,
//     marks: [9, 8, 10, 9]
// }

// const luis = {
//     name: 'luis',
//     surname: 'amoretti',
//     yob: 2004,
//     marks: [10, 10, 8, 5]
// }

// const students = [leonardo, evelyn, luis]
// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     console.log (student.name, student.surname,  calculateAverage(student.marks));
// }


//---------------------CICLO PER GLI OGGETTI---------------------//
// const ariel = {
//     name: 'Ariello',
//     age: 4,
//     race: 'Border collie',
//     type: 'Dog',
//     peggiorNemico: 'Husky',
//     'peggior nemico': 'Husky'
// }
// for (const key in ariel) {
//     // if (!Object.hasOwn(object, key)) continue;
//     //    const element = ariel[key];
//     const value = ariel[key];
//     console.log(key + ': '+ value);
// }
//----------------NOTAZIONE CON PARENTESI QUADRE--------------------//
// console.log(ariel.name);
// console.log(ariel['name']);

// console.log(ariel.peggiorNemico);
// console.log(ariel['peggior nemico']);


//------------------------JSON (JavaScript Object Notation)------------------------//

// const leonardo = {
//     name: 'Leonardo',
//     surname: 'Silva',
//     age: 27,
//     gender: 'Maschio',
//     nationality: 'Perù',
//     isMarried: false,
//     // address: 'Via Dodecannesso 16', 
//     address: {
//         street: 'Via Dodecannesso',
//         civic: 16,
//         city: 'Genova',
//         country: 'Italia'
//     },
//     interests: ['musica', 'pagliaccio', 'bullo']
// }

// console.log(leonardo);

// const leoString = JSON.stringify(leonardo);
// console.log(leoString);

// // '{"name":"Leonardo","surname":"Silva","age":27,"gender":"Maschio","nationality":"Perù","isMarried":false,"address":{"street":"Via Dodecannesso","civic":16,"city":"Genova","country":"Italia"},"interests":["musica","pagliaccio","bullo"]}'

// const dataString = '{"name": "Andrea", "surname": "Asioli", "yob": 1978, "isMarried": false}';
// console.log(dataString);

// const data = JSON.parse(dataString);
// console.log(data);

function greeting(name) {

 return 'Hello, '+ name + ' how are you doing today?'  
    
}