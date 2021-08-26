let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

const forUsingOF = () => {
    for (i of groceryList) {
        console.log(i);
    }
}

const forUsingIN = () => {
    for (i in groceryList) {
        console.log(groceryList[i]);
    }
}

const forDefault = () => {
    for (let i = 0; i < groceryList.length; i++) {
        console.log(groceryList[i]);
    }
}
