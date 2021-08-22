const el = document.getElementById('register-form');
el.addEventListener('submit', (event) => {
    event.preventDefault();

    let civility = event.target.female.checked ? 'female' : 'male';
    let name = event.target.name.value;
    let category = event.target.category.value;
    let newsletter = event.target.newsletter.checked;




    // Les variables déclarées ci-dessus contiennent les données du formulaire


    let checkedCivility = civility === 'female' ? 'Mme.' : 'M.'
    let newsLetterMessage;

    if (newsletter) {
        alert(`Merci de vous être abonné a notre super newsletter `)
    } else {
        alert(`Nous avons une super newsletter que vous ne voudriez pas rater :)`)
    }
    let displayedCategory;

    switch (category) {
        case 'cold-starter':
            displayedCategory = 'Entrée Froides';
            break;
        case 'soup':
            displayedCategory = 'Soupe';
            break;
        case 'main-course':
            displayedCategory = 'Plat';
            break;
        case 'fruit-dessert':
            displayedCategory = 'Dessert (fruits)';
            break;
        case 'chocolate-dessert':
            displayedCategory = 'Dessert (chocolat) ';
            break
        default:
            displayedCategory = 'Entrée froides'
    }
    alert(`Bonjour ${checkedCivility} ${name} . ${newsletter} elle nous permettra de vous envoyer de délicieuses recettes de votre catégorie préférée ${displayedCategory} `)

});