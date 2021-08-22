///////////////// Quelques variables en vrac


let townPlace = ' 1 ,rue de la Paix, 75000 Paris';
let bornPlace = 'France';
let childnumber = 2
townPlace = ' 32 , voie Vaugirard , 75000 Paris'
bornPlace = 'Brasil'


//////////// Calcul de deux variables

const userName = "Thomas"
let productsTotalValue = "154.38";
let specialOffer = "10";
let cartTotalValue = productsTotalValue - specialOffer;

var totalPriceDisplayed = cartTotalValue;
console.log("Merci d'insérer la valeur de " + cartTotalValue + " nous vous préparons l'acheminement")




/////////// Marchand de légumes exercice

////////:Constantes de prix
const apple = 0.32
const pear = 0.44
    ///////// Variables de fruits vendus

let appleSellToday = Number(prompt('Entrez le nombre de pommes que vous avez vendu aujourdhui:'));
let pearSellToday = Number(prompt('Entrez le nombre de poires que vous avez vendu aujourdhui:'));
////////// total de pommes Vendues
let totalPriceDisplayed = 0;
totalPriceDisplayed = appleSellToday * apple;
console.log('Vous avez vendu pour ' + totalPriceDisplayed + " euros de pommes")

//////// total de poires vendues
let totalPricePear = 0;
totalPricePear = pearSellToday * pear;
console.log('Vous avez vendu pour ' + totalPricePear + " euros de poires")
    ////////: affichage de la recette de la journée
const tunrOver = totalPriceDisplayed + totalPricePear;
console.log(turnOver)


/////////// CORRIGES


// On stocke les prix
const priceApple = 0.32;
const pricePear = 0.44;

// On stocke les quantités
const quantityAppleSold = prompt('Saisissez un nombre de pommes');
const quantityPearSold = prompt('Saisissez un nombre de poires');

// Recette réalisée pour chaque fruit
const priceTotalApple = priceApple * quantityAppleSold;
const priceTotalPear = pricePear * quantityPearSold;

// Chiffre d'affaires
const turnover = priceTotalApple + priceTotalPear;

// On crée l'alerte qui affichera les informations à l'utilisateur
alert('pommes => quantité : ' + quantityAppleSold + ', chiffre d\'affaire: ' + Math.round(priceTotalApple * 100) / 100 + '€ \n' +
    'poires => quantité : ' + quantityPearSold + ', chiffre d\'affaire: ' + Math.round(priceTotalPear * 100) / 100 + '€ \n' +
    'chiffre d\'affaire => ' + Math.round(turnover * 100) / 100 + '€');