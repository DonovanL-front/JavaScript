const newdate = new Date(2021, 11, 10);
console.log(newdate)



const date = new Date(2021, 6, 9);
const date2 = new Date(2020, 11, 25);
console.log(date, date2)


////// LEs setters et getters 

const date = new Date();
date.setFullYear(2020);
date.setMonth(11);
date.setDate(27);
date.setHours(23);
date.setMinutes(33);
date.setMilliseconds(670);

console.log(date)
console.log(date.getFullYear())
console.log(date.getTime())
console.log(date.getMonth())
date.setHours(20);
date.setMinutes(30)
console.log(date.getHours())
console.log(date.getMinutes())


///// MANIPULER DES DATES 


const date = new Date(2020, 1, 29)
const date2 = new Date()

date2.setFullYear(date.getFullYear() + 1)
date2.setMonth(date.getMonth() + 6)
date2.setTime(date.getDate() + 15)

console.log(date2)


const date = new Date(2020, 1, 29)
const date2 = new Date()

date2.setFullYear(date.getFullYear() + 1)
date2.setMonth(date.getMonth() + 6)
date2.setDate(date.getDate() + 15)

console.log(date2)


const date = new Date(2020, 11, 25);
const date2 = new Date();

date2.setFullYear(date.getFullYear() + 5);
date2.setMonth(date.getMonth() + 6);
date2.setHours(date.getHours() + 12)

console.log(date2)


const date = new Date(2020, 11, 25, 20, 30, 0)
const date2 = new Date(
    date.getFullYear() + 5,
    date.getMonth() + 6,
    date.getDate(),
    date.getHours() + 12,
    date.getMinutes(),
)

console.log(date2)



/////// Formater des dates

const date = new Date(2020, 1, 29, 21, 30, 45);
const dateLonged = date.toLocaleString('fr-FR');
const option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
const dateDisplayedLong = date.toLocaleString('fr-Fr', option)
console.log(dateDisplayedLong)
console.log(dateLonged)