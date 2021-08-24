const addressInformation = {
    geometry: {
      coordinates: [
        2.29391,
        48.876318
      ],
      type: 'Point'
    },
    properties: {
      city: 'Paris',
      citycode: '75117',
      context: '75, Paris, Île-de-France',
      district: 'Paris 17e Arrondissement',
      id: '75117_0413',
      importance: 0.5812644699670191,
      label: "Rue de l'Arc de Triomphe 75017 Paris",
      name: "Rue de l'Arc de Triomphe",
      postcode: '75017',
      score: 0.6892058609060925,
      type: 'street',
      x: 648211.84,
      y: 6864264.35
    },
    type: 'Feature'
  }
  
  console.log('Ville : ' , addressInformation.properties.city)
  console.log('Contexte : ' + addressInformation.properties.context)
  console.log('Voie : ' + addressInformation.properties.name)
  console.log('Code Postal : ' + addressInformation.properties.postcode)

// Exercice  3 

function formatDateToString(date) {

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    }
    const locale = 'fr-FR'
    const dateString = new Date(date).toLocaleDateString(locale, options)

    return dateString
}

formatDateToString("2020-03-15")


// Tests unitaires 
// Supprime tout les éléments qui ne sont pas des nombres 
//Renvoi un array filtré , vide si non applicable


function removeNaN(arr) { 
    const res = arr.slice()
    for (let i = 0 ; i < arr.length; i++) { 
        if(isNaN(arr[i])) { 
            res.splice(res.indexOf(arr[i]) , 1)
        }
    }
    return res
}
// Test les résultats d'entrée(test) et de sortie(res)  
function testRemoveNaN() { 
    let test = [1,2] 
    let res = removeNaN(test)
    console.log(test, res )


    test = [1 , 'coucou']
    res = removeNaN(test)
    console.log(test, res)


    test = [ 1 , '15']
    res = removeNaN(test)
    console.log(test, res)
}

testRemoveNaN() 




// Exercice test unitaires 

// Trie dans l'ordre croissant la liste qui lui est passée en paramêtres

function bubbleSort (unsortedList) {
    const intList = unsortedList.slice()
    for (let i = intList.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (intList[j + 1] < intList[j]) {
          // Echanger les deux valeurs
          const temp = intList[j + 1]
          intList[j + 1] = intList[j]
          intList[j] = temp
        }
      }
    }
    return intList
  }

function testBubbleSort() { 
    let test = [3,2,1]
    intList = bubbleSort(test)
    console.log(test, intList)

    test = [0, 2, 3]
    intList = bubbleSort(test)
    console.log(test , intList)

    test = [1,5 ,2]
    intList = bubbleSort(test)
    console.log(test , intList)
    if (bubbleSort([]).toString() !== [].toString()) {
        console.log('Test échoué pour []')
        return false
    }
}


testBubbleSort()



//Exercice tests fonctionnels 

function checkAccount (account, amount) {
    if (account.balance >= amount) {
      return true
    }
    return false
  }
  
  function buy (account, product) {
    // Copie de la variable account
    const newAccount = { ...account }
    if (checkAccount(newAccount, product.price)) {
      newAccount.balance = newAccount.balance - product.price
      console.log('Produit acheté:', product.name)
    } else {
      console.log('Echec de la transaction')
    }
    return newAccount
  }

let account = { 
    owner : 'Pierre', 
    balance : 100
}


const product = {
    name: 'Traces',
    price: 60
  }

function testTestBuy() { 
    if (account.balance > product.price) { 
        console.log('Validé')
    } else { 
        console.log('Refusé')
    }
}


function testBuy () {
    let acc = {
      owner: 'Jean Dupont',
      balance: 100
    }
    const prod = {
      name: 'Carte graphique',
      price: 60
    }
    acc = buy(acc, prod)
    // Paiement réussi
    if (acc.balance !== 40) {
      console.log('Test buy échoué sur le premier paiement')
      return false
    }
  
    acc = buy(acc, prod)
    // Echec du paiement
    if (acc.balance !== 40) {
      console.log('Test buy échoué sur le second paiement')
      return false
    }
    console.log('Test réussi')
    return true
  }
  
  testBuy()
testTestBuy(account)


