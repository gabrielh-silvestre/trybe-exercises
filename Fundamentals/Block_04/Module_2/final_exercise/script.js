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

const ex4 = (array) => {
    const finalSum = ex3(array);

    if (finalSum > 20) {
        console.log("Maior que 20");
    } else {
        console.log("Menor ou igual a 20");
    }
}

const ex5 = (array) => {
    let greaterValue = array[0];

    for (fixCompare of array) {
        for (eachCompare of array) {
            if (eachCompare >= greaterValue) {
                greaterValue = eachCompare;
            }
        }
    }

    console.log(greaterValue);
}

const ex6 = (array) => {
    const oddNumbers = [];

    for (value of array) {
        if (value % 2 !== 0) {
            oddNumbers.push(value);
        }
    }

    console.log(oddNumbers);
}
