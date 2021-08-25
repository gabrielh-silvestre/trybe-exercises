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


