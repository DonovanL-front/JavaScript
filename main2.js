alert('Bonjour')
alert('Comment allez vous')

/// Intervertir deux nombres 


let firstNumber = 25;
let secondNumber = 52;

firstNumber = firstNumber + secondNumber;
secondNumber = firstNumber - secondNumber;
firstNumber = firstNumber - secondNumber;

console.log(firstNumber);
console.log(secondNumber);


////////: Compter le nombre lettres dans un mot 

let word = "JavaScript";
let i = 0;
while (word[i]) {
    i = i + 1;
}



////// Compter le nombre d'ittération d'une lettre dans un mot 

let word = 'bonjour';
let i = 0;

for (let letter of word) {
    if (letter == "o") {
        i = i + 1;
    }
}
console.log(i)


////////// Tri a bulle croissant


let numbers = [3, 8, 5, 9, 1];
let numbersLength = numbers.length;
for (let main = 0; main < numbersLength - 1; main++) {
    for (let cell = 0; cell < numbersLength - main - 1; cell++) {
        if (numbers[cell] > numbers[cell + 1]) { // Si la valeur de la case actuelle est supérieure à la valeur de la case d'après, on permute les valeurs (en utilisant l'échange de variables précédement vu)
            numbers[cell] = numbers[cell] + numbers[cell + 1];
            numbers[cell + 1] = numbers[cell] - numbers[cell + 1];
            numbers[cell] = numbers[cell] - numbers[cell + 1];
        }
    }
}
console.log(numbers);