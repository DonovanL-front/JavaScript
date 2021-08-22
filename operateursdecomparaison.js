///// exercice 1


const average = 10;
const prettyGood = 12;
const good = 14;
const perfect = 16;


// l'événement avoir la moyenne
const hasAverage = average >= 10
const hasPrettyGood = prettyGood >= 12 && average >= 14
const hasGood = good >= 14 && average >= 16
const hasPerfect = perfect >= 16

let mention = average >= 12;

let mentionBis = prettyGood || good || veryGood;

console.log(mention)
console.log(mentionBis)


////////Exercice opérateurs logiques 


let employee = 10
let vacationPlaces = 4
let sickEmployees = 2
let employeesFormationPlaces = 2

if (sickEmployees >= 1) {
    vacationPlaces--
}


console.log(vacationPlaces)


/////// Correction 


// On utilise une condition ternaire pour déterminer le nombre de vacances restantes
const holidayMax = sick === 0 || sick === 1 ? 4 : 4 - sick + 1;

// On définit le nombre de jours de formation maximum
const trainingMax = 2;

// S'il reste plus d'une vacance disponible et que le nombre de personnes en formation est inférieur ou égal à 2
const congeAccepted = holidayMax > 0 && trainingMax <= 2




//////// Les égalitées 


const averageStudy1 = 10;
const averageStudy2 = 9;



console.log(averageStudy1 === averageStudy2)


console.log(averageStudy2 !== averageStudy1)



//////// Exercice defi 


const car = {
    type: 'BMW',
    color: 'blue',
    doors: 3,
    airConditioner: true
};
const { type, color, doors, airConditioner } = car
const objectValid = color && type && doors && airConditioner;
console.log(objectValid)