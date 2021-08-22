// ////////////////// CHercher le nombre d'itération d'une valeur 

const teams = ['Bois mort', 'Broom broom', 'Broom broom', 'Snek', 'Snek', 'Merlin FTW', 'Gandalf', 'FTW', 'Merlin FTW', 'Broom broom', 'Bois mort']
const val = 'Broom broom' // La valeur à trouver
for (let i = 0; i < teams.length; i++) {
    if (val === teams[i]) {
        console.log(i)
    }
}


// /////////////: chercher Le nombre Maximum


const prices = [1, 39, 25, 112, 111, 30, 211, 300, 5, 67]
let max = prices[0]
for (let i = 1; i < prices.length; i++) {
    if (max < prices[i]) {
        max = prices[i]
    }
}
console.log(max)

///////Algorithme Naîf :  trouver l'indice d'une valeur  dans une liste triée
/////////: Sert égalemnt a  vérifier si un valeur est présente dans le tableau de manière générale


const sortedPerf = [0, 6, 7, 16, 25, 30, 32, 38, 46, 46, 59, 70, 87, 93, 111]
const val = 46
i = 0
while (i < sortedPerf.length && sortedPerf[i] <= val) {
    if (sortedPerf[i] === val) {
        console.log(i)
    }
    i = i + 1
}
console.log('Fin')

/////////// Dichotomie 

/** JavaScript : Dichotomie. */
const sortedTemperatures = [-3, 5, 12, 50, 78, 94, 113, 129]
const val = 12

let a = 0
let b = sortedTemperatures.length - 1
while (a <= b) {
    const m = Math.floor((a + b) / 2)
    if (sortedTemperatures[m] === val) {
        // on a trouvé v
        console.log(m)
        break
    } else if (sortedTemperatures[m] < val) {
        a = m + 1
    } else {
        b = m - 1
    }
}

//////// Produit cartesien utile de BD

/** JavaScript : Produit cartésien pour obtenir les menus possibles. */
const vegetables = ['Frites', 'Riz', 'Coquillettes']
const sauces = ['Pesto', 'Ketchup']

for (let i = 0; i < vegetables.length; i++) {
    for (let j = 0; j < sauces.length; j++) {
        console.log(vegetables[i], sauces[j])
    }
}


const vehicles = ['Vélo', 'Trottinette', 'Roller']
const colors = ['Rouge', 'Bleu']

for (let i = 0; i < vehicles.length; i++) {
    for (let j = 0; j < colors.length; j++) {
        console.log(vehicles[i], colors[j])
    }
}



////////suite de Fibonacci

/** JavaScript : Suite de Fibonacci. */
const n = Number(prompt('Entrer un entier supérieur à 1:')) // Par exemple, 4

const fibo = new Array(n)
fibo[0] = 0
fibo[1] = 1

for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2]
}

console.log(fibo)



const n = 15

const fibo = new Array(n)
fibo[0] = 0
fibo[1] = 1

for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 1]
}
console.log(fibo)

////////////// liste de tri a bulle 

const scores = [58, 13, 29, 100, 203, 1, 5, 13, 56, 33, 123]
let sorted = scores.sort(function(a, b) { return a - b; });
console.log(sorted)

const scores = [58, 13, 29, 100, 203, 1, 5, 13, 56, 33, 123]
scores.sort()
console.log(sort)


///////////// Crible Eratosthène recherche de nombre premier 


const limit = Number(prompt('Entrer la limite du crible'))
const L = []

for (let i = 2; i <= limit; i++) {
    L.push(i)
}
const primeNumbers = []

while (L.length > 0) {
    primeNumbers.push(L[0])
    let i = 1
    while (i < L.length) {
        if (L[i] % L[0] === 0) {
            L.splice(i, 1)
        } else {
            i++
        }
    }
    L.splice(0, 1)
}
console.log(primeNumbers)