const firstName = 'Julien'

function Name() {
    return (firstName)
}
console.log(Name())


////// Square number 


function squareNumber(number) {
    console.log(number * number)
}
squareNumber(7)
squareNumber(9)


//// Exercice fonction 

const height = prompt('Hauteur du parallélépipèdes ');
const width = prompt('Largeur du parallélépipèdes ');
const depth = prompt('Profondeur du parallélépipèdes ');;

const volume = volumeParallelepipede(height, width, depth);

function Volume(height, width, depth) {
    Math.pow(height * width * depth)
}
Volume()


/////// Correction 


function volumeParallelepipede(height, width, depth) {
    return height * width * depth
}

const height = prompt('Hauteur du parallélépipèdes ');
const width = prompt('Largeur du parallélépipèdes ');
const depth = prompt('Profondeur du parallélépipèdes ');

const volume = volumeParallelepipede(height, width, depth);


///// Exercice string conversion 

function textTransform(word) {
    const firstLetter = word.substring(0, 1).toUpperCase()
    const rest = word.substring(1).toLowerCase()
    return `${firstLetter} ${rest} `
}

const newWord = textTransform('MAGIQUE');
console.log(newWord)




////// Exercice defi