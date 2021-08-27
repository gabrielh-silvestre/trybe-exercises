const ex1 = () => {
    let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
        let menuServices = menu[1];

    console.log(menuServices);
}

const ex2 = () => {
    let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
    let indexOfPortfolio = menu.indexOf('Portfólio');

    console.log(indexOfPortfolio);
}

const ex3 = () => {
    let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
    menu.push('Contato');

    console.log(menu);
}
