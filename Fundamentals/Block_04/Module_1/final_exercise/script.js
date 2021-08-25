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

const isTriangle = (a, b, c) => {
    if (a >= 0 && b >= 0 && c >= 0) {
        return (a + b + c === 180);
    } else {
        return "Invalid angle";
    }
}

const chesSPieces = (piece) => {
    piece = piece.toLowerCase();
    const allPieces = {
        "peao": "frontal",
        "torre": "horizontal e vertial",
        "bispo": "diagonal",
        "cavalo": "L",
        "rainha": "horizontal, vertical e diagnol",
        "rei": "horizontal, vertical e diagnol"
    }

    switch(piece) {
        case ("peao"):
            console.log(`O ${piece} se move na ${allPieces[piece]}`)
            break;
        case ("torre"):
            console.log(`A ${piece} se move na ${allPieces[piece]}`)
            break;
        case ("bispo"):
            console.log(`O ${piece} se move na ${allPieces[piece]}`)
            break;
        case ("cavalo"):
            console.log(`O ${piece} se move em ${allPieces[piece]}`)
            break;
        case ("rainha"):
            console.log(`A ${piece} se move na ${allPieces[piece]}`)
            break;
        case ("rei"):
            console.log(`O ${piece} se move na ${allPieces[piece]}`)
            break;
        default:
            console.log("Peça inválida.")
    }   
}

const notePorcentage = (note) => {
    if (note < 50 ) {
        return "F"
    } else if (note >= 50 && note < 60) {
        return "E"
    } else if (note >= 60 && note < 70) {
        return "D"
    } else if (note >= 70 && note < 80) {
        return "C"
    } else if (note >= 80 && note < 90) {
        return "B"
    } else {
        return "A"
    }
}
