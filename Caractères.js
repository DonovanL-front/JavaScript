//////// concaténer des éléments 

let hello = 'Bienvenue sur notre site'
let userName = 'John'
let age = 35 + 1

console.log(hello + ' : ' + userName + ', ' + age + ' ans')







/////// Additionner des éléments


// Affichera : Vous avez 351 ans
console.log('Vous avez ' + 35 + 1 + ' ans')

// Affichera : 36 ans
console.log(35 + 1 + ' ans')

// Affichera : Vous avez 36 ans
console.log('Vous avez ' + (35 + 1) + ' ans')








//////: Adittionner et concaténer des éléments 


let hello = 'Bienvenue sur notre site'
let userName = 'John'
let age = 35

console.log(`${hello} : ${userName}, ${age + 1} ans`)






////// Concaténation exercice

let login = 'John'
let unreadMessagesCount = 28
let readMessageCount = 12
let totalMessages = 0
totalMessages = unreadMessagesCount + readMessageCount
console.log(`Bonjour ${login} vous avez
${totalMessages} messages dans votre boite 
 et ${unreadMessagesCount} messages non lus`)


///////Autre façon sans littéraux de gabarits
let login = 'John'
let unreadMessagesCount = 28
let readMessageCount = 12

console.log('Bonjour ' + login + ' il y a ' + (unreadMessagesCount + readMessageCount) + ' messages dans votre boîte de réception, dont ' + unreadMessagesCount + ' messages non lus')


////////Exercice échappement des caractères


let newUser = 'Caroline'


console.log('Hello et bienvenue a l \'utilisatrice ' + newUser)


/////Autre manière avec ajout d'une variable en mémoire :D

let newUser = 'Caroline'
let sentence = 'Bonjour et bienvenue à l\'utilisatrice ' + newUser;

console.log(sentence)
console.log(sentence.length)



//////// Les méthodes de l'objet string


//////////////////////

let name = 'rOmAin deLaNoix';
let nameFormated = name.toLowerCase();

let firstNameUpperLetter = nameFormated.substring(0, 1).toUpperCase();


let firstNameLowerLetter = nameFormated.substring(1, 6).toLowerCase();
let lastNameFirstLetter = nameFormated.substring(7, 8).toUpperCase();
let lastNameLowerLetter = nameFormated.substring(8).toLowerCase();

nameFormated = `${firstNameUpperLetter}${firstNameLowerLetter} ${lastNameFirstLetter}${lastNameLowerLetter}`

console.log(nameFormated)


///////// exercice objet string 


let user = 'rOmAin deLaNoix'
let userFirstUpperLetter = user.substring(0, 1).toUpperCase();
let userFirstWord = user.substring(1, 6).toLowerCase();
let userFirstUpperLetterSecWord = user.substring(7, 8).toUpperCase();
let secondWord = user.substring(8).toLowerCase();
let userFormated = `${userFirstUpperLetter}${userFirstWord}${userFirstUpperLetterSecWord}${secondWord}`

console.log(userFormated)



///////// Exercice defi 

const lastName = prompt('Entrez un nom')
const firstName = prompt('Entrez un prénom')
const objet = prompt('Entrez le motif de la convocation')
const gender = prompt('M ou Mme')
const dateAppointement = prompt('Entrez une date de convocation (dd/mm/yyyy)');
const place = prompt('Entrez un numéro de bureau')
const signature = 'Votre agent administratif';

let finalLetter = ` A \:  ${lastName} ${firstName} 
        Objet de la convocation \: ${objet}
        ${gender} ${lastName} ${firstName} \: Vous êtes convoqué(e) le ${dateAppointement} dans le bureau  ${place} 
En vous remerciant \. 

${signature}`;

console.log(finalLetter)



///////////////////Correction


const objet = prompt('Entrez le motif de la convocation');
const lastName = prompt('Entrez un nom');
const firstName = prompt('Entrez un prénom');
const gender = prompt('M ou Mme');
const dateAppointement = prompt('Entrez une date de convocation (dd/mm/yyyy)');
const place = prompt('Entrez un numéro de bureau');
const signature = 'Votre agent administratif';

let body = `
À ${lastName.toUpperCase()} ${firstName.toUpperCase()}
  
        Objet de la convocation: ${objet}
    
        ${gender} ${lastName.toUpperCase()} ${firstName.toUpperCase()}, vous êtes convoqué le ${dateAppointement} dans le bureau ${place} dont pour le motif suivant: ${objet}.
    
En vous remerciant.
    
${signature}

`;

console.log(body);





//////// Concaténation



const begin = 'je m\'appelle Thomas, j\'ai'
const end = 'ans'
const number = 2;
const secondNumber = 3;

const words = begin + (number + secondNumber) + end
console.log(words)
    //////const words = begin + ' ' + number + secondNumber + end/////