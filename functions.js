// console.log('Finalmente le funzioni!!');
// // primo modo ------ non si usa
// const multiplyBy2 = function (n) {
//     const result = n * 2;
//     return result;
// }
// // secondo modo ------PIU USATA -- definizione classica della funzione equivalente alla precedente
// function multiplyBy3(n){
//     const result= n * 3;
//     return result;
// }
// // terzo modo arrow function
// const multiplyBy4 = (n)=>{  // definizione lambda (arrow function) della funzione equivalente alla precedente
//     const result = n * 4;
//     return result;
// } 

// // quarto modo a)
// // const multiplyBy5= (n)=>{
// //     return n * 5;
// // }
// // b)
// const multiplyBy5= (n)=> n * 5;   //----------->>>>>>>>>> const multiplyBy5= n=> n * 5; 
// //----------
// function checkMultiple(n1, n2){
//     const isMultiple = n1 % n2 ===0;
//     return isMultiple;

// }
// //----------
// const checkMultipleLambda = (n1, n2)=> n1 % n2 === 0;

// function getNow(){
//     const now= new Date();
//     return now;
// }

// function logUppercase(inputString){
//     const inputStringUppercase= inputString.toUpperCase();
//     console.log(inputStringUppercase);
// }



// // --------------------------
// const pippo= multiplyBy2(100);
// console.log(pippo);

// const pluto= multiplyBy2(300);
// console.log(pluto);

// const paperino= multiplyBy3(5);
// console.log(paperino);

// const paperone = multiplyBy4(3);
// console.log(paperone);

// const gastone= multiplyBy5(5);
// console.log(gastone);

// const qui= checkMultiple(10,5);
// console.log(qui);

// const quo= checkMultiple(12,5);
// console.log(quo);

// const miu= checkMultipleLambda(5,25);
// console.log(miu);

// const qua= getNow();
// console.log(qua);

// const paperinik= logUppercase('ciao ciao');
// console.log(paperinik);

// logUppercase('hola como estas');
