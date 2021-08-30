const info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

const infoPatinhas = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: "Sim"
};

function ex1() {
    console.log(`Bem-vinda, ${info.personagem}`);
}

function ex2() {
    info.recorrente = "Sim";
    // console.log(info);
}

function ex3() {
    ex2();
    for (i in info) {
        console.log(i);
    }
}

function ex4() {
    ex2();
    for (i in info) {
        console.log(info[i]);
    }
}

function ex5() {
    ex2();
    for (i in info) {
        if (info[i] === infoPatinhas[i]) {
            console.log("Ambos recorrentes");
        } else {
            console.log(`${info[i]} e ${infoPatinhas[i]}`);
        }
    }
}
ex5()