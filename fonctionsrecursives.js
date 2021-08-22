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

console.log(getNote(0, notes, null, null))






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
const notes = [10, 20, 15, 17, 8, 5, 12, 4]
console.log(getNote(0, notes, null, null))




///////// Fonctions anonymes 
const word = (hello) => {
    return hello.toUpperCase();
}
console.log(word('tomas'))



const upper = (word) => {
    return word.toUpperCase();
}
console.log(upper('thomas'))




/////// Entrainment fonctions recursives 

//// Trier le tableau dans l'ordre croissant 

//// rappeler var getNote

//// retournr higher and lower 


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
console.log(getNote(0, notes, null, null))






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
console.log(getNote(0, notes, null, null))






//////// Exercicee fonction recursive



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
console.log(getNote(0, notes, null, null))



///: Fonction anonyme 

const ages = [10, 20, 15, 17, 8, 5, 12, 4];
const coworkerAges = ages.sort(function(a, b) {
    return a - b;
});
console.log(coworkerAges)


const displayAges = coworkerAges.map(coworkerAges => `${coworkerAges} ans`);



///////: Arrow functions

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





////// correction 



getStudentsByInterval = (min, max) => {
    return students.filter(student => student.note >= min && student.note <= max);
}

intervalNote.forEach(interval => {
    studentSorted.push(getStudentsByInterval(...interval))
})

console.log(studentSorted)






function getStudentsByInterval(min, max) {
    const studentsSorted = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].note >= min && students[i].note <= max) {
            studentsSorted.push(students[i]);
        }
    }
    return studentsSorted;
}

const studentSorted = []
for (let i = 0; i < intervalNote.length; i++) {
    studentSorted.push(getStudentsByInterval(intervalNote[i][0], intervalNote[i][1]));
}

console.log(studentSorted)