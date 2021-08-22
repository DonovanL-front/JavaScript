////////// tableau simple 

let animals = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']

animals[0]
animals[1]
animals[2]
animals[3]
animals[4]
animals[5]

console.log(animals[3])


///////: Tableau a deux dimensions 

let animals = [
    ['Lion', 'Tigre', 'Ours'],
    ['Chat', 'Chien', 'Cheval']
]

animals[0][0]
animals[0][1]
animals[0][2]
animals[1][0]
animals[1][1]
animals[1][2]


console.log(animals[1][2])



/////// Parcourir un tableau 

let animals = ['Lion', 'Chat', 'CHIEN', 'Cheval', 'Tigre', 'Ours']

animals.lenght

console.log(animals.length);


//////////// La boucle for

let animals = ['Lion', 'Chat', 'CHIEN', 'Cheval', 'Tigre', 'Ours']
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i])
}


///////////: Boucle for each 

let animals = ['Lion', 'Chat', 'CHIEN', 'Cheval', 'Tigre', 'Ours']
animals.forEach(function(element) {
    console.log(element)
})
animals.forEach(function(element, index) {
    console.log(index + ':' + element)
})


//////////////// Parourir un tableau a plusiuers dimensions 

let animals = [
    ['Lion', 'Tigre', 'Ours'],
    ['Chat', 'Chien', 'Cheval']
]
for (let animalsIndex = 0; animalsIndex < animals.length; animalsIndex++) {
    for (let elementIndex = 0; elementIndex < animals[animalsIndex].length; elementIndex++) {
        console.log(animals[animalsIndex][elementIndex])
    }
}
/////////////////// For each 



let animals = [
    ['Lion', 'Tigre', 'Ours'],
    ['Chat', 'Chien', 'Cheval']
]
animals.forEach(function(animalsElement) {
    animalsElement.forEach(function(element) {
        console.log(element)
    })
})


///// exercice 

let fruits = ['Fraises', 'Oranges', 'Framboises', 'Citrons']

fruits.length

console.log(fruits.length)
console.log(fruits[2])
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}


//Exercice défi 

let colors = ['blue', 'red', 'green', 'yellow', 'white']
colors.length
colors[0]
colors[1]
colors[2]
colors[3]
colors[4]
console.log(colors.length);



for (let i = 0; i < colors.lenght; i++) {
    console.log(colors[i])
}

colors.forEach(function(colorElement) {
    console.log(colorElement)
})


///// deux dimensions

let colors = [
    ['Blue', 'white', 'Red'],
    ['Yellow', 'Green']
]
colors[0][0]
colors[0][1]
colors[0][2]
colors[1][0]
colors[1][1]

console.log(colors[0][1])
console.log(colors[1][1])