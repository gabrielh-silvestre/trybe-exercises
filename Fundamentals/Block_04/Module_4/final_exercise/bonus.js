const romanNumbers = {
    "I":1,
    "IV":4,
    "V":5,
    "IX":9,
    "X":10,
    "XL":40,
    "L":50,
    "XC":90,
    "C":100,
    "CD":400,
    "D":500,
    "CM":900,
    "M":1000
}
const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
];

function romanCalc(n) {
}

function evenSearch(arr) {
    let evenArray = [];

    for (let i = 0; i < arr.length; i++) {
        for (number of arr[i]) {
            if (number % 2 === 0) {
                evenArray.push(number);
            }
        }
    }

    return evenArray;
}

function keyCounter(arr) {
    const finalObj = {};

    for (i of arr) {
        finalObj[i] = 0;
    }

    console.log("Sua cesta possui:");
    for (key in finalObj) {
        for (fruit of arr) {
            if (key === fruit) {
                finalObj[key] += 1;
            }
        }

        console.log(`${finalObj[key]} ${key.toLowerCase()}s;`);
    }
}
