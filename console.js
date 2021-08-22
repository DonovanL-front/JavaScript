const numbers = [4, 8, 14, 2]

console.log(numbers);
console.table(numbers);
console.error('Ne regardez pas ce qui ce passe')

const min = 10
const assertReason = 'La valeur doit être supérieure à 10'
console.assert(numbers > min, assertReason)



// 4)
initialize()

function logged() {
    console.trace()
    console.log('Hello')
}

function login() {
    logged()
}

function initialize() {
    login()
    console.trace()
}

/////////// Promt , alert , confirm

// 1)
let age = prompt('Saisissez votre âge')

// 2)
alert('Vous avez ' + age + ' ans')

// 3)
if (confirm('Est-ce correct ?')) {
    alert('Merci !')
} else {
    alert('Recommencez svp !')
}



/////// Exercice defi 

// 1) Ask for the user name
// Write your code here instead of this comment
let username = prompt(`Entrez votre nom pls`);

if (confirm('Accéder au compte')) {
    // 2) A login message is displayed 
    alert(`Bienvenue ${username}`)

} else {
    // 3) A logout message is displayed
    alert(`Déconnexion de ${username} . A três vite :)`)

}

// 4) The user name is displayed in the console.

console.error(username);