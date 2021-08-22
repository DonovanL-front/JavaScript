///: exemple 

let user = new Object()
user.firstName = 'John'
user.lastName = 'DOE'
user.age = 36
user.email = 'j.doe@email.com'
user.phoneNumbers = ['0660504030', '0123456789']
user.fullName = function() {
    return this.firstName + ' ' + this.lastName
}

console.log(user)


////// Notation littérale 

let username = {
    firstName: 'John',
    lastName: 'DOE',
    age: 36,
    email: 'j.doe@email.com',
    phoneNumbers: ['0660504030', '0123456789'],
    fullName: function() {
        return this.firstName + ' ' + this.lastName
    }
}

console.log(user)


////////: Créer une fonction pour construire nos objets



function User(
    firstNameValue,
    lastNameValue,
    ageValue,
    emailValue,
    phoneNumbersValue
) {
    this.firstName = firstNameValue
    this.lastName = lastNameValue
    this.age = ageValue
    this.email = emailValue
    this.phoneNumbers = phoneNumbersValue
    this.fullName = function() {
        return this.firstName + ' ' + this.lastName
    }
}

let user2 = new User(
    'John',
    'DOE',
    36,
    'j.doe@email.com', ['0660504030', '0123456789']
)

console.log(user)




///: exercice  objet


const car3 = {
    type: 'BMW',
    color: 'red',
    brand: 'mitsubishi',
    date: 1999
}

car3.doors = 5;

const doorsNumber1 = car3.doors;
console.log(car3)
console.log(doorsNumber1)
const doorsNumber2 = car3['doors'];
console.log(doorsNumber2)


/////// ACCEDER AUX OBJETS 

let planeTrip = new Object();
planeTrip.from = 'Montpellier';
planeTrip.to = 'Vanaheim';
planeTrip.seat = ' 32b';
planeTrip.provider = 'Air France';
planeTrip.planer = 'Airbus A380';
console.log(planeTrip)


let movie = {
    title: 'bienvenue cher les chtis',
    director: 'danny boon',
    genre: ['drama', 'comedy'],
    date: '26 / 02 / 2010',
    note: 8.1
};

movie.characters = ['danny boon', 'Kad merad'];
movie.note = 10;

console.log(movie);
console.log(movie['director'])


////// L'objet array() ;


///// Exercice

const regions = [{
    name: 'Occitanie',
    departement: [{
        name: 'Herault',
        lycees: [{
            name: 'Clemenceau',
            adress: {
                cp: '34060',
                numberStreet: '31',
                street: 'Avenue Georges Clemenceau',
            },
            classes: [{
                graduation: '1er',
                sector: 'S',
                students: [{
                        name: 'Paul',
                        scores: [
                            { matiere: 'Français', note: 12 },
                            { matiere: 'Maths', note: 15 },
                            { matiere: 'Espagnol', note: 7 },
                            { matiere: 'Anglais', note: 9 },
                            { matiere: 'Histoire', note: 10 },
                        ]
                    },
                    {
                        name: 'Jeanne ',
                        scores: [
                            { matiere: 'Français', note: 16 },
                            { matiere: 'Maths', note: 10 },
                            { matiere: 'Espagnol', note: 10 },
                            { matiere: 'Anglais', note: 12 },
                            { matiere: 'Histoire', note: 8 },
                        ]
                    },
                    {
                        name: 'Marie',
                        scores: [
                            { matiere: 'Français', note: 14 },
                            { matiere: 'Maths', note: 18 },
                            { matiere: 'Espagnol', note: 17 },
                            { matiere: 'Anglais', note: 14 },
                            { matiere: 'Histoire', note: 15 },
                        ]
                    },
                    {
                        name: 'Pierre',
                        scores: [
                            { matiere: 'Français', note: 7 },
                            { matiere: 'Maths', note: 4 },
                            { matiere: 'Espagnol', note: 8 },
                            { matiere: 'Anglais', note: 6 },
                            { matiere: 'Histoire', note: 8 },
                        ]
                    },
                    {
                        name: 'Nicolas',
                        scores: [
                            { matiere: 'Français', note: 11 },
                            { matiere: 'Maths', note: 16 },
                            { matiere: 'Espagnol', note: 8 },
                            { matiere: 'Anglais', note: 20 },
                            { matiere: 'Histoire', note: 18 },
                        ]
                    }
                ]
            }]
        }]
    }]
}]

const EnglishJeanneNote = regions[0].departement[0].lycees[0].classes[0].students[1].scores[3].note
console.log(EnglishJeanneNote);


let average = 0;
const NicolasMid = regions[0].departement[0].lycees[0].classes[0].students[4].scores
for (let i = 0; i < NicolasMid.length; i++) {
    average += Math.round(NicolasMid[i].note / NicolasMid.length) * 10 / 10;
}
console.log(average)
console.log(Object.entries(NicolasMid))


///// LEs méthodes de l'objet Object()


const car = {
    type: 'BMW',
    color: 'blue',
    doors: 5,
    airConditioner: true
}

let properties = Object.keys;
console.log(Object.keys(car))
let values = Object.values;
console.log(Object.values(car))


const car4 = {
    type: 'BMW',
    color: 'blue',
    doors: 3,
    airConditioner: true
};

const [, , propertie] = Object.keys(car4)

console.log(propertie)