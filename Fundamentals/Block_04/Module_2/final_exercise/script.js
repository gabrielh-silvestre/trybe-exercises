const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const ex1 = (array) => {
    for (values of array) {
        console.log(values);
    }
}

const ex2 = (array) => {
    let sum = 0;
    for (values of array) {
        sum += values;
    }
    console.log(sum);
}

const ex3 = (array) => {
    let sum = 0;
    for (values of array) {
        sum += values;
    }
    console.log(sum/array.length);
}
