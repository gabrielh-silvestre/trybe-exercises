const names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
};

for (i in names) {
    console.log(`Olá ${names[i]}`);
}

const car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (i in car) {
    console.log(i, car[i]);
}
