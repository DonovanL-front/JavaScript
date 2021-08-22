// Inverser une chaine de charactères 

const poem = prompt("Entrez une chaine de charactères"); 

const n = poem.length 

for (let i = 1 ; i <= n ; i++) { 
    console.log (poem[n - i])
}


// Déchiffrement de l'algorithme de cesar 

const cipher = (prompt('Enter a cipher')).toLowerCase(); 

for (let i = 0 ; i < cipher.length ; i++) { 
    if (cipher[i]=== ' ') { 
        console.log(' ')
    } else { 
        const encryptedLetter = cipher.charCodeAt(i)
        const realLetter = String.fromCharCode(((encryptedLetter - 97 + 26 - 3) % 26)+ 97)
        console.log(realLetter) ; 
   }
}

const cipher = (prompt('Entrer a cipher')).toLocaleLowerCase()

for (let i = 0 ; i < cipher.length ; i++) { 
    if (cipher[i] === ' ' ) { 
        console.log(' ')
    } else { 
        const encryptedLetter = cipher.charCodeAt(i) 
        const realLetter = String.fromCharCode(((encryptedLetter - 97 + 26 - 3 )% 26) + 97)
        console.log(realLetter); 
    }
}

// Suite de Fibonachi 

const n = Number(prompt('Enter a number upper to 1 '))
let fibo = new Array(n + 1)

fibo[0] = 0 ; 
fibo[1] = 1 ; 

for (let i = 2 ; i < n ; i++) { 
    fibo[i] = fibo[i - 1] + fibo[i - 2]
}

for (let i = 0 ; i < n + 1 ; i++ ) { 
    console.log(fibo[i])
}


// Chercher une valeur dans une liste de températures dans une liste non triée 


const temp = [12, 5, 8, 9, 54]
const val = 5

for (let i = 0 ; i < temp.length ; i++) { 
    if (val === temp[i]) { 
        console.log('In the Array')
    } else { 
        console.log('Not here')
    }
} 

// La recherche d'un indince max dans une liste non triée 

const températures = [12, 5, 9, -13]
let max = températures[0] 

for (let i = 0 ; i < températures.lenght ; i++) { 
    if (max < températures[i]) { 
        max = températures[i]
    }
}

console.log(max)

// Exercice // 

const prices = [1, 39, 25, 112, 111, 30, 211, 300, 5, 67]

let max = prices[0] 

for (let i = 0 ; i < prices.length ; i++) { 
    if (max < prices[i]) { 
        max = prices[i]
    }
}

console.log(max)


// Exercice 2 

const teams = ['Bois mort', 'Broom broom', 'Broom broom', 'Snek', 'Snek', 'Merlin FTW', 'Gandalf FTW', 'Merlin FTW', 'Broom broom', 'Bois mort']
const val = 'Broom broom' // La valeur à trouver

for (let i = 0 ; i < teams.length ; i++) { 
    if (val === teams[i]) { 
        console.log(val)
    }
}

// Rechercher l'indice max dans une liste triée

const sortedTemperatures = [-13 , 2, 5, 51 , 72] 
const val = sortedTemperatures[4]
console.log(val)

/** JavaScript : Recherche du maximum dans une liste triée. */
const sortedTemperatures = [-3, 5, 12, 29]

const max = sortedTemperatures[sortedTemperatures.length - 1]

console.log(max)

// recherche naîve d'un indice d'une valeur 

const sortedTemperatures = [-3 , 12 , 25 , 52 , 115 , 600 , 700]
const val = 52 
let i = 0

while (i < sortedTemperatures.length && sortedTemperatures[i] <= val) { 
    if (sortedTemperatures[i] === val) { 
        console.log(i)
    }

    i = i + 1 
}
console.log(Fin) ; 

// Dichotomie dans une sortedArray


const sortedTemperatures = [-3 , 12 , 25 , 52 , 115 , 600 , 700]
const val = 25 

a = 0 
b = sortedTemperatures.length - 1 

while (a <= b) { 
    const m = Math.floor((a + b) / 2 )
    if (sortedTemperatures[m] === val) { 
        console.log(m)
        break;
    } else if (sortedTemperatures[m] < val) { 
       a = m + 1
    } else { 
        b = m + 1
    }
}

// Exercice algo naif 

const sortedPerf = [0, 6, 7, 16, 25, 30, 32, 38, 46, 46, 59, 70, 87, 93, 111]
const val = 42

let i = 0

while (i < sortedPerf.length && sortedPerf[i] <= val) { 
    if (sortedPerf[i] === val) { 
        console.log(i)
    } 
    i = i + 1 
} console.log('Fin')

// Exercice dichotomie 
const sortedTemperatures = [-3 , 12 , 25 , 52 , 115 , 600 , 700]
const val = 25

let a = 0 
let b = sortedTemperatures.length - 1 
while (a <= b) { 
    const m = Math.floor((a + b) / 2 )
    if (sortedTemperatures[m] === val) { 
        console.log(m)
        break;
    } else if (sortedTemperatures[m] <= val) { 
        a = m + 1 
    } else { 
        b = m - 1
    }
}


// Creer des paires (produit cartésien)

const vegetables = ['Frite' , 'Tomates' , 'Concombres'  ]
const meal = ['Beaf' , 'Lamb' , 'Porc']

for (let i = 0 ; i < vegetables.length ; i++) { 
    for (let j = 0 ; j < meal.length ; j++) { 
        console.log(vegetables[i] , meal[j])
    }
}

// Produit cartésien entre deux array 


const vehicles = ['Vélo', 'Trottinette', 'Roller']
const colors = ['Rouge', 'Bleu']

for (let i = 0 ; i < vehicles.length ; i++) { 
    for (let j = 0 ; j < colors.length ; j++) { 
        console.log(vehicles[i] , colors[j])
    }
}

// Exercie Suite de Fibonacci 

const n = 15 
const fibo = new Array(n)
fibo[0] = 0 
fibo[1] = 1
for (let i = 2 ; i < n ; i++ ) { 
    fibo[i] = fibo[i - 1] + fibo[i - 2]
}
console.log(fibo)

// Tri a bulle JS

const ages = [13 , 21 , 15 , 16]
for (let i =  ages.length - 1 ; i > 0 ; i--) { 
    for ( let j = 0 ; j < i ; j++) { 
        if (ages[j + 1] < ages[j]) { 
            // Echanger les deux valeurs 
            const temp = ages[j + 1]
            // Stocke(copie) la valeur de J + 1 
            ages[j + 1] = ages[j]
            ages[j] = temp 
        }
    }
}
console.log(ages)

// Tri implémenté par JS


const ages = [12 ,21 ,25 , 15 , 7 ]
let sorted = ages.sort(function(a , b) {return a - b;}) ; 
console.log(sorted)

// Exercice Tri a bulle 

const scores = [58, 13, 29, 100, 203, 1, 5, 13, 56, 33, 123]
let sorted = scores.sort(function(a , b) {return a - b;}); 
console.log(sorted)

// Exercice manipuler des opérations 

const a = 52 
const b = 52 
const z = a * b 
console.log(z)

const x = 42 
const y = 43 
const z = (x * y)


let x = 42
x += 1 
console.log(x)


// Entrainement string 

const myString = "A stone Troll sat on his seat of stone"
console.log(myString.lenght)
console.log(myString[9])
console.log(myString.substring(7 , 13))


// Exercice concaténation 
let birds = 352
birds = String(birds)
console.log(birds[0])

/** JavaScript */
const nbOranges = '47'
const nbBananas = '31'
const nbFruits = Number(nbOranges) + Number(nbBananas)
console.log(nbFruits)


// Exercice Variables et portée 

let rose = 1478 
rose = String(rose)
let hundreds = rose.substring(0 , rose.length - 2)
console.log(hundreds)
let tens = rose[rose.length - 2 ]
console.log(tens)
let mediums = (tens * 10 ) / 30
mediums = Math.floor(mediums)
console.log(mediums)
const small = tens - mediums * 3
console.log(small)

// Exercice les nomnbres 

let note = 4.1
console.log(note)

let a = 123456 
let b = -4 
let c = 3.125

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))

// Algèbre de Boole 


const age = 15
console.log(age >= 18 && age <= 70)

//  Algèbre booléenne et instructions conditionnelles 

const temperature = 35

if (temperature < 0) {
  console.log(temperature, '°C - Négatif')
} else if (temperature <= 40) {
  console.log(temperature, '°C - Normal')
}

// Simplifier le code qu'il n'évalue pas plusieurs fois les évaluations du login et du mot de passe

const login = 'Elliot'
const password = 'Metasploit'
const authorizedDirectory = '/data'
const accessLevel = 8

if(login === 'Elliot' && password === 'Metasploit') { 
    if (authorizedDirectory === '/data') { 
        console.log('Accès autorisé au répertoire' , authorizedDirectory)
    }

} 
if( accessLevel > 5) {
  console.log('Accès autorisé aux informations de niveau 5 ou plus')
}


// Menu de recommandation 
// continue tant que 0 n'est pas sélectionné 
let choice = ''

while (choice !== '0' ) { 
    console.log('0. Sortir')
    console.log('1. Afficher le film recommandé')
    console.log('2. Afficher l\'album recommandé')
    // attend la reponse 
    choice = prompt('Choix')

    if ( choice === '1') { 
        console.log('Titanic (1997 James Cameron ...\n')
    } else  if (choice === '2') { 
            console.log('Thriller Michael Jackson \n')
        } else { 
        console.log('Sortir')
    }
}

//  Jeu de la roulette mise : 10 euros; gain = gain - mise ; a chaque tour si pair on gagne si impair on perd

let attempts = 0 
let loss = 0 
let bet = 10 
let gain =  0 
let winner = false 
console.log('Tu gagnes si la roulette sort un nombre pair')

// continue jusqu'a gagner 
while (!winner) { 
    // argent mis en jeu 
    loss = loss + bet 
    attempts += 1
    // nombre aléatoire entre 0 et 30 
    const number = Math.floor(Math.random() * 31)
    console.log('Tentative. .................' , number)

    if (number % 2 === 1) { 
        // nombre impair
        console.log('Dommage bien tenté, retente ta chance ')
        bet = bet * 2 
    } else { 
        // nombre pair 
        console.log('c\'est gagné!!!!')
        gain = bet * 2
        winner = true 
    }
    prompt('(Entrée')
} 

console.log('Gain de ' + (gain - loss) + 'euros après' + attempts + 'tentatives')

// Coffre fort 

/** JavaScript */
const secretPassword = '4842'
let answer = ''
let attempts = 0

console.log('Mot de passe requis')

while (answer !== secretPassword && attempts < 4) {
  // Attend une réponse
  answer = prompt('**** ')
  attempts = attempts + 1 
}

if ( answer === password) { 
    console.log('Ouverture du coffre')
    
} else { 
    console.log('Tentatives maximum dépassées bloquage du coffre fort')
}


// Le programme suivant boucle tant que le jeu tourne , 
// A chaque tour on demande un nombre au hasard et on demande sa table de multiplication de 0 a 9 

let end = false 
let score = 0 
let maximumScore = 0

// Continue tant que l'utilisateur répond 'o'
while (!end) { 
    const randomNumber = Math.floor(Math.random() * 9) + 1 
    console.log('Tables de multiplications de' + randomNumber )
    // Demande la table de multiplication du nombre aléatoire 
    for (let i = 0 ; i < 10 ; i++ ) { 
        const answer  = Number(prompt(randomNumber + '*' + i + '?'))
        // compte le nombre total de questions 
        maximumScore = maximumScore + 1 
        //  1 point pour chaque bonne réponse
        if ( answer === randomNumber * i) { 
            score = score + 1
        }
    } 
    // calcul un nombre aléatoire 
    console.log('Vous avez ' + score + '/' + maximumScore)
    end = prompt('Continuer le test ? (o/n)') !== 'o'
}



// /Entrainement 


const login = 'Elliot'
const password = 'Metasploit'
const authorizedDirectory = '/data'
const accessLevel = 8


if (login === 'Elliot' && password === 'Metasploit') {
    console.log('Acces au compte admin autorisé et au répertoire ' , authorizedDirectory)
}

if ( accessLevel > 7 ) { 
    console.log('Acces complet autorisé')
}

// Tables de multiplications 

let end = false 
let score = 0 
let maximumScore = 0

while (!end) { 
    const randomNumber = Math.floor(Math.random() * 9) + 1 
    console.log('Tables de multiplications ' + randomNumber)
    // Demande la table de mulplications du chiffre aléatoire 
    for (let i = 0 ; i < 10 ; i++) { 
        const answer = Number(prompt(randomNumber + '*' + i + '?' ))
        // Compte le nombre total de question
        maximumScore = maximumScore + 1
        // Compte le nombre total de bonnes reponses 
        if (answer === randomNumber * i) { 
            score = score + 1 
        }
    }
    console.log('Vous avez' + score + '/' + maximumScore)
    prompt('Continuer a jouer? (o/n)') !== 'o'
}


// Exercice entrée mot de passe 


const password = prompt('Entrez votre mot de passe')
console.log(password)
if ( password !== '') {
    console.log('le mot de passe  : ' + password + 'est-il correct?')
}

//  LES TABLEAUX 


const ingredients = ['1L of milk' , '100g of rice' , '50gr ofsugar' , '10gr VanillaSugar' , '1gr Lime zests']
ingredients[2] = '25gr of sugar'
console.log(ingredients[2])


// Exercice horaires de cours 

/** JavaScript */
const subjects = ['Maths', 'Anglais', 'Sport', 'Sciences économiques']
const schedule = ['8h30', '10h30', '14h00', '17h00']
// reverse sert a inverser les l'ordre des valeurs d'un tableau au meme titre que row-reverse en CSS
subjects.reverse()

for (let i = 0 ; i < subjects.length ; i++) {
    console.log(subjects[i] + ' ' + schedule[i])
}

// Deuxieme manière d'inverser les valeurs 

const subjects = ['Maths' , 'Anglais' , 'Sport' , 'Sciences économiques']
const schedule = ['8h30' , '10h30' , '14h00' , '17h00']
for (let i = 0 ; i <  subjects.lenght ; i++) { 
    console.log(subjects[subjects.lenght - 1 - i] , schedule[i])
}

// Troisième manière d'inverser les valeurs d'un array 
const subjects = ['Maths' , 'Anglais' , 'Sport' , 'Sciences économiques']
const schedule = ['8h30' , '10h30' , '14h00' , '17h00']
for ( let i = subjects.length - 1 ; i >= 0 ; i--) { 
    console.log(subjects[i] + ' ' + schedule[j])
}

// Tableaux multidimensionnels
const notes = [
    [15, 8, 11, 16], // classe 1
    [11, 10, 9, 13], // classe 2
    [12, 15, 15, 9], // classe 3
    [17, 8, 13, 16], // classe 4
    [13, 7, 15, 11]  // classe 5
  ]


for (let i = 0 ; i <  notes.length ; i++) { 
    let average = 0
    for (let j = 0 ; j < notes[i].length ; j++) { 
        average = average + notes[i][j]
    }
    console.log('Classe' , i+1, ':' , average/notes[i].length)
}


// Réaliser un programme qui déclare un tableau et qui itère autant de fois qu'il y a d'élèves x 

let students = []
const nbStudents = 3 

for (let i = 0 ; i < nbStudents.length ; i++) { 
    let name = prompt('Eleve n°' + (i + 1) + ':')
    if (name !== '')
    students.push(name)
}
console.log(students.length , 'élèves présents')
console.log(students.sort())


// Entréés non textuelles



let name = prompt('Nom de l\' évenement ?')
let numPartMax = prompt('Participants maximums?')
let numPart = prompt('Nombre de participants?')
let date = prompt('Date de l\'évenement ? (AAAA-MM-DD')


// Validation JS

if (isNaN(numPartMax) || isNaN(numPart)) { 
    console.log('Pas un nombre')
} else { 
    date = Date.parse(date)
    if (isNaN(date)) { 
        console.log('Pas une date')
    }
    numPartMax = Number(numPartMax)
    numPart = Number(numPart)
    console.log('Places restantes : ' , numPartMax - numPart)
    console.log('Date de rappel : ' ,  date - 7)
}


// Exercice entrée non textuelle 

let height = prompt('Entrez votre taille en cm')
if ( !isNaN(height)) { 
    height = Number(height)
} else { 
    height = 0 
}


if (height >= 153) { 
    console.log('C\'est bon vous pouvez passer ')
} else { 
    console.log('Revenez quand vous serez un peu plus grands les enfants :) (Personnnes de petites tailles ce renseigner auprès des animateurs)')
}

// Vérifier la taille d'un input 

let password = prompt('Entrez un nouveau MDP (8 charactères maximum')

if( password.length > 8 ) { 
    console.log('Nombre de  charactères non respecté')
    password = prompt('Entre un nouveau MDP')
} else if (password.length < 4 ) { 
    console.log('Pas asser de charactères')
    password = prompt('Entrez un mot de passe avec 4 charactères minimum')
} else {
    console.log('MDP accepté')
}


// Quiz vérification des input 
let answer = '1848'
let question 
let attempts
while(question !== answer) { 
     question = prompt('En quelle année fut signé le décret d\'abolition de l\'esclavage en France')
     question = prompt('Réessayez')
     if ( question === 1848) { 
         console.log('Bonne réponse ')
        } else { 
            console.log('Mauvaise réponse')
        }
    }
    
// Correction 

const solution = '1848'
let attempts = 0 
let input = prompt('En quelle année fut signé le décret d\'abolition de l\'esclavage en France')

while (input !== solution && attempts < 4) { 
    prompt('Réessayez')
    attempts = attempts + 1 
}  
if (input === solution) { 
    console.log('Bonne réponse')
} else { 
    console.log('Dommage')
}

// Les dates 

let today = new Date()
console.log(today)
const springDay = new Date(2021 , 2 , 20)
console.log(springDay)

const today = new Date()
const day = today.getDate()
const month = today.getMonth()
let revolutionnary 

if ((day >= 21 && month === 8 ) || (day <= 21 && month === 9)) { 
    revolutionnary = 'Vendémiaire'
} else if ((day >= 22 && month === 9 ) || (day <= 21 && month === 10)) { 
    revolutionnary = 'Brunaire'
} else if ((day >= 22 && month === 10 ) || (day <= 21 && month === 11)) { 
    revolutionnary = 'Frimaire'
} else if ((day >= 22 && month === 11 ) || (day <= 20 && month === 0)) { 
    revolutionnary = 'Nivôse'
}  else if ((day >= 21 && month === 0 ) || (day <= 19 && month === 1)) { 
    revolutionnary = 'Pluviôse'
}  else if ((day >= 20 && month === 1 ) || (day <= 21 && month === 2)) { 
    revolutionnary = 'Ventôse'
}  else if ((day >= 22 && month === 2 ) || (day <= 19 && month === 3)) { 
    revolutionnary = 'Germinal'
}  else if ((day >= 20 && month === 3 ) || (day <= 19 && month === 4)) { 
    revolutionnary = 'Floréal'
}  else if ((day >= 20 && month === 4 ) || (day <= 18 && month === 5)) { 
    revolutionnary = 'Prairial'
}  else if ((day >= 19 && month === 5 ) || (day <= 18 && month === 6)) { 
    revolutionnary = 'Messidor'
}  else if ((day >= 19 && month === 6 ) || (day <= 17 && month === 7)) { 
    revolutionnary = 'Brunaire'
}  else if ((day >= 18 && month === 7) || (day <= 17 && month === 8)) { 
    revolutionnary = 'Brunaire'
} else { 
    revolutionnary = 'Jours supplémentaires'
}
console.log(revolutionnary)


// LEs enregistrements 

const user = {
    firstName = 'Jean' , 
    lastName = 'Dupont' 
}

console.log("Bonjour", user.firstName, user.lastName)


// Boucles et enregistrements 

const book = { 
    title : 'Aux sources de l\'utopie ' , 
    year : 2022 , 
    author : 'Fred Turner'
}

for (const [comp, value] of Object.entries(book)) { 
    console.log(comp , ':' , value)
}

// Deuxieme manière avec une seule composante et l'index de sa valeur 

for (const arr of Object.entries(book)) { 
    console.log(arr[0] , ':' , arr[1] )
}

// Avec for in 

for ( const comp in book ) { 
    console.log(comp , book[comp])
}

// Exercice boucles et enregistrements 

const user = {
    pseudo: 'Dupont',
    birthYear: 1990,
    birthMonth: 12,
    birthDar: 12
  }

for ( const [profile , value] of Object.entries(user)) { 
    console.log(profile , ':' , value)
}

for ( const profile in user) { 
    console.log(profile , ':' , user[profile])
}

// Imbriquer des enregistrements 
const camus = { 
    name : 'Albert Camus' , 
    birth : 1913
}
const books = [
{ 
    title : 'La peste' , 
    year : '1947' , 
    author : camus , 
}, 

{
   title :  'L\'étrangé' ,
   year : '1943' , 
   author : camus
} ,

{ 
    title : 'LeProfanateur' , 
    year : '1954' , 
    author : { 
        name : 'Philipe K Dick', 
        birth : '1920'
    } 
} , 
{ 
    title : 'Je suis une légende' , 
    year : '1954' , 
    author : { 
        name : 'Richard Matheson', 
        birth : '1910'
    } 
}
]
for (const book of books) { 
    console.log(book.author.name)
}

// Exercice imbrication 

const employees = [
    { firstName: 'John', lastName: 'Doe', age: 25, job: 'ingénieur' },
    { firstName: 'Bob', lastName: 'Smith', age: 38, job: 'chercheur' },
    { firstName: 'Jeanne', lastName: 'Smith', age: 40, job: 'ingénieur' },
    { firstName: 'Mathieu', lastName: 'Simpson', age: 59, job: 'secrétaire' },
    { firstName: 'Constance', lastName: 'Martin', age: 40, job: 'directeur' },
    { firstName: 'Robert', lastName: 'Peter', age: 30, job: 'ingénieur' },
    { firstName: 'Richard', lastName: 'Stallman', age: 67, job: 'chercheur' }
  ]

let sum = 0 
let counter = 0 

for (const employee of employees) { 
    if (employee.job === 'ingénieur') { 
        sum = 0 + employee.age
        counter++ 
    } 
}
const average = sum / counter 

// Exercice objects et autres structures complèxes 

class User {
    constructor () {
      this.lastName = '' , 
      this.firstName = ''  , 
      this.age = 0
    }
   
  }
  
  const jean = new User()
  jean.lastName = 'Dupont'
  jean.firstName = 'Jean'
  jean.age = 28
  
  console.log('Bonjour', jean.firstName, jean.lastName)

// Defi 

class Item { 
    constructor () { 
        this.name = ''
        this.price = 0 
    }
}
let otherItem = true
const listItem = []
while (otherItem) {
    const item = new Item()
  const nameItem = prompt('Donner le nom du produit')
  const priceItem = Number(prompt('Donner le prix du produit'))
  listItem.push(item); 

  otherItem = (prompt('Autre produit? O ou N?') === 'O')
}

let sum = 0
for (const item of listItem) { 
    sum = sum + item.price
}

console.log(sum)