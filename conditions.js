///////// La condition if


let age = 18;

if (age >= 18) {
    console.log('Vous êtes majeur')
} else {
    console.log('Vous êtes encore mineur repassez plus tard ')
}


///////////////////COndition TERNAIRES

let lastname = 'Brassens';
let genre = 'homme';
let isEqual

genre == 'homme' ? (isEqual = true, console.log('Vous êtes un homme')) : (isEqual = false, console.log('Vous êtes une femme'))



///////////////// La condition switch 


let message;
let tvStation = 1;

switch (tvStation) {
    case "1":
        console.log(TF1);
        break;
    case "2":
        console.log(France2);
        break
    case "3":
        console.log(France3);
        break;
    case "4":
        console.log('Canal +');
        break
    case "5":
        console.log(France5);
        break
    case "6":
        console.log(M6);
        break
    case "7":
        console.log(Arte);
        break
    default:
        console.log('ChaineInconnue');


}