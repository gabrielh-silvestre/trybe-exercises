const info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
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
