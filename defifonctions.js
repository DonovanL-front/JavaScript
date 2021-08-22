const products = [{
        product: "chaise",
        price: 120.50
    },
    {
        product: "table",
        price: 1200.99
    },
    {
        product: "vase",
        price: 420.01
    },
    {
        product: "canape",
        price: 12585.55
    }
]

function newPrice(price, reduction) {
    return price - (price * reduction / 100)

}

function roundPrice(number) {
    const tmp = Math.pow(10, 2)
    return Math.round(number * tmp) / tmp
}
let newPromoPrice = newPrice(120.50, 25)
console.log(roundPrice(newPromoPrice))



const products = [{
        product: "chaise",
        price: 120.50
    },
    {
        product: "table",
        price: 1200.99
    },
    {
        product: "vase",
        price: 420.01
    },
    {
        product: "canape",
        price: 12585.55
    }
]


function newPrice(price, percent) {
    return redPrice(price * percent / 100);
}

function roundPrice(number) {
    const newPrice = Math.pow(10, 2)
    return Math.round(number * newPrice) / newPrice
}

let newPromoPrice = newPrice(120.50, 25)
console.log(roundPrice(newPromoPrice))