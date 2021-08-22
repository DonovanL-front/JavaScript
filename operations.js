/////////// Opérateurs d'affectation



let myVariable = 0;
const number = 12;
const myText = " ma première affectation";
const mySecondNumber = 8;

myVariable += number;
myVariable -= mySecondNumber;
myVariable += myText;

console.log(myVariable)



///////// Les opérateurs de ventilation essais exercice


let myArray = [1, 2, 3, 4, 5, 6]


let myNewArray = myArray.splice(4)
console.log(myNewArray) // 2



// code...
let mySecondNumber = myArray.splice(1, 2)
console.log(mySecondNumber) // [5,6]
    // code...
let myThirdNumber = myArray.splice(1, 2, 3, 4)
console.log(myThirdNumber) // [2,5,6]




////////:Correction exercice

let myArray = [1, 2, 3, 4, 5, 6];
const [, myNumber] = myArray;
console.log(myNumber) // 2
myArray.splice(0, 4);
console.log(myArray) // [5, 6]
myArray = [myNumber, ...myArray];
console.log(myArray) // [2, 5, 6]







let myArray = [1, 2, 3, 4, 5, 6]
const [, myNumber] = myArray;
console.log(myNumber) // 2
myArray.splice(0, 4)
console.log(myArray) // [5,6]
myArray = [myNumber, ...myArray];
console.log(myArray) // [2,5,6]









///////////: COrrection exercice défi


let billesPierre = 10;
let billesJeanne = 15;
let billesPaul = 5;

// partie 1 et 2
billesPierre += 4;
billesJeanne -= 2;
billesPaul -= 2;
// partie 3 et 5
billesJeanne += 4;
billesPierre -= 2;
billesPaul -= 2;
// partie 4
billesPaul += 2;
billesPierre--;
billesJeanne--;

// l'échange avec Pierre
const billesRestantesPierre = billesPierre % 4;
const boulardsPierre = (billesPierre - billesRestantesPierre) / 4;

console.log(billesRestantesPierre); // 3
console.log(boulardsPierre); // 2

// l'échange avec Jeanne
const billesRestantesjeanne = billesJeanne % 2;
const boulardsjeanne = (billesJeanne - billesRestantesjeanne) / 2;

console.log(billesRestantesjeanne); // 0
console.log(boulardsjeanne); // 8

// l'échange avec Paul
const billesRestantesPaul = billesPaul % 3;
const boulardsPaul = (billesPaul - billesRestantesPaul) / 3;

console.log(billesRestantesPaul); // 0
console.log(boulardsPaul); // 1



///////////// Entrainement




let billesPierre = 10
let billesJeanne = 15
let billesPaul = 5

////// partie 1 et 2 
billesPaul += 4;
billesJeanne -= 2;
billesPaul -= 2;

////////Troisième et cinquième  partie

billesJeanne += 4;
billesPaul -= 2;
billesPierre -= 2;

///// Quatrième partie 

let billesRestantesPaul = billesPaul += 2;
let billesRestantesJeanne = billesJeanne -= 1;
let billesRestantesPierre = billesPierre -= 1;

billesRestantesJeanne = billesJeanne % 2;
const bouletsJeanne = (billesRestantesJeanne - billesJeanne) / 2;
console.log(bouletsJeanne)
console.log(billesRestantesJeanne)

billesRestantesPaul = billesPaul % 3;
const bouletsPaul = (billesRestantesPaul - billesPaul) / 3;
console.log(bouletsPaul)
console.log(billesRestantesPaul)

billesRestantesPierre = billesPierre % 4;
const bouletsPierre = (billesRestantesPierre - billesPierre) / 4;
console.log(bouletsPierre)
console.log(billesRestantesPierre)