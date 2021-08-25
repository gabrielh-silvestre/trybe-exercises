const matOperations = (a, b, operation) => {
    switch(operation) {
        case ("+"):
            return a + b;
            break;
        case ("-"):
            return a - b;
            break;
        case ("*"):
            return a * b;
            break;
        case ("/"):
            return a / b;
            break;
        case ("%"):
            return a % b;
            break;
        default:
            console.log(`${operation} is a invalid math operation.`);
    }
}

const biggerOne = (a, b) => {
    if (a > b) {
        console.log(`${a} is greater than ${b}.`);
    } else if (a === b) {
        console.log(`${a} and ${b} are egual.`);
    } else {
        console.log(`${b} is greater than ${a}.`);
    }
}

const biggerOneOfThree = (a, b, c) => {
    if (a > b && a > c) {
        console.log(`${a} is greater than ${b} and ${c}.`);
    } else if (a === b && b === c) {
        console.log(`${a}, ${b} and ${c} are egual.`);
    } else if (b > a && b > c) {
        console.log(`${b} is greater than ${a} and ${c}.`);
    } else {
        console.log(`${C} is greater than ${a} and ${b}.`);
    }
}

const isPositive = (a) => {
    return (a >= 0);
}
