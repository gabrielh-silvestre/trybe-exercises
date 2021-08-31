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
