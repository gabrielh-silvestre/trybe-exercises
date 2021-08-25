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


