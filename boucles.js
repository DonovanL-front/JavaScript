////// Exercice boucle

let total = 0
while (total < 10) {
    total++;
    console.log(total)
}




do {
    total++;
    console.log(total)
} while (total < 10) {}


/////// Exrcice la boucle for 


const animals = ['dog', 'cat', 'bird', 'fish'];


for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

///// utilisant for of


const animals = ['dog', 'cat', 'bird', 'fish'];

for (let animal of animals) {
    console.log(animal);

}

const secretAgent = { firstName: 'James', lastName: 'BOND', code: '007' }
for (let property in secretAgent) {
    console.log(property)
}



/////// Les boucles imbriquées 


let squareNumber = 1;
for (let x = 1; x < 9; x++) {
    for (let y = 1; y < 9; y++) {
        console.log('x:' + x + '|y:' + y + ' [' + squareNumber + ']')
        squareNumber++;
    }
}


//////// while/while

let squareNumber = 1
let x = 1
while (x < 9) {
    let y = 1
    while (y < 9) {
        console.log('x:' + x + '|y:' + y + ' [' + squareNumber + ']')
        squareNumber++
        y++
    }
    x++
}

////// Mélange for/while


let squareNumber = 1
let x = 1
while (x < 9) {
    for (let y = 1; y < 9; y++) {
        console.log('x:' + x + '|y:' + y + ' [' + squareNumber + ']')
        squareNumber++
    }
    x++
}


//// Exercice 

let row

for (let i = 0; i <= 10; i++) {
    row = '';
    for (let j = 0; j < i; j++) {
        row += j + '  ';
    }
    console.log(row);
}




//////// DEFI tables de multiplication


let multiplication = '\n'
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        multiplication += (i * j) + '  ';
    }
    multiplication += '\n'
    console.log(multiplication)
}


let multiplication = '\n';
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        multiplication += (i * j) + '  ';
    }
    multiplication += '\n';
    console.log(multiplication)
}