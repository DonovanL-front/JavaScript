(function() {
    alert('Bienvenue !')
})()

////// Calcul d'un pourcentage de chargement

function loading(percent) {
    while (percent < 100) {
        percent++;
    }
    console.log("chargement en cours");
}

//// deuxieme manière de l'écrire facon recursive
function loadingRecursive(percent) {
    if (percent < 100) {
        percent++;
        loadingRecursive(percent);
    }
    console.log("Chargement terminé")
}

loading(0);
loadingRecursive(0);


//// Compte a rebours 


function counter(number) {
    console.log(number)

    if (number > 0) {
        number--;
        counter(number);
    }
}
counter(100)

/////Exercice recursivité 


///const notes = [10, 20, 15, 17, 8, 5, 12, 4];
/*let getNotes = (a, b) => a - b;
const sortedNotes = [...notes].sort(getNotes);
console.log(sortedNotes);

function higherLower(sortedNotes) {

}*/


///// Ce qu'il fallait faire 

function getNote(counter, notes, higher, lower) {
    if (!higher && !lower) {
        higher = notes[counter];
        lower = notes[counter];
        counter++;
    }
    if (counter < notes.length) {
        higher = higher > notes[counter] ? higher : notes[counter];
        lower = lower < notes[counter] ? lower : notes[counter];
        counter++;
        return getNote(counter, notes, higher, lower)
    } else {
        return { higher, lower }
    }
}

const notes = [10, 20, 15, 17, 8, 5, 12, 4];

console.log(getNote(0, notes, null, null)) // {heigher: 20, lower: 4}


///// Fonctions anonymes 

let cgvButton2 = document.getElementById('cgv')

cgvButton2.addEventListener(`click`, function() {
    alert(`Vous venez d'accepter nos cgv`)
})

//// MEME FONCTION mais nommée 

let cgvButton = document.getElementById('cgv');

function showalert() {
    alert(' Vous venez d\'accepter nos cgv')
}
cgvButton.addEventListener('click', showalert)


//// Function auto exectuées 
/
(() => {
    alert('Bienvenue !')
})()

//// Stocker la fonction dans une variable 


let showHelle = function() {
    alert('Bienvenue')
}
showHelle();
showHelle();
showHelle();
showHelle();

////// Fonction fléchées auto executées 

(() => {
    alert('Bienvnue !')
})()

//// Fonction => associée a une variable 


const Hello = (name) => {
    alert('Bienvenue' + name)
}
Hello('John')
Hello('Jane')


///// Fléchée associée a un évenement 


/*let cgvButton = document.getElementById('cgv');
cvgButton.addEventListener('click', () => {
    alert('Vous venez d\'accepter nos CGV')
})*/



/// Exemple 

const coworkerAges = [48, 27, 35, 42, 56, 30];

function sortNumber(a, b) {
    return a - b;
}
const sortedAgers = coworkerAges.sort(sortNumber);
console.log(sortedAgers)


//// Exercice fonctions anonymes et flechéés 

const upper = (word) => {
    return word.toUpperCase();
}
console.log(upper('bienvenue'))


///// Arrows fonctions


const displayAges = sortedAgers.map(sortedAger => `${sortedAger} ans`);

console.log(displayAges)


//:

const multiply = nb => nb * Math.PI;



///// Exercice fonction fléchées 


const students = [
    { name: 'Nicolas', note: 18 },
    { name: 'Pierre', note: 15 },
    { name: 'Marie', note: 12 },
    { name: 'Julie', note: 16 },
    { name: 'Jean', note: 9 },
    { name: 'Benjamin', note: 11 },
    { name: 'Solene', note: 8 },
    { name: 'Melodie', note: 7 },
    { name: 'Sandrine', note: 14 },
    { name: 'Christophe', note: 19 },
    { name: 'Mickael', note: 6 },
    { name: 'Paul', note: 10 },
    { name: 'Lucie', note: 4 },
    { name: 'Amelie', note: 8 },
]

const intervalNote = [
    [0, 4],
    [5, 9],
    [10, 14],
    [15, 20]
];




getStudentsByInterval = (min, max) => {
    return students.filter(student => student.note >= min && student.note <= max);
}


intervalNote.forEach(interval => {
    studentSorted.push(getStudentsByInterval(...interval))
})

console.log(studentSorted)