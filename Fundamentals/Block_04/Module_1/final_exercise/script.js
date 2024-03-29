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
    if (note < 0 || note > 100) {
        return "Nota inválida."
    } else {
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
}

const atLeastOneIsEven = (a, b, c) => {
    const numbers = [a, b, c];

    for (number of numbers) {
        if (number % 2 === 0) {
            return (number % 2 === 0);
        }
    }
    return (number % 2 === 0)
}

const atLeastOneIsOdd = (a, b, c) => {
    const numbers = [a, b, c];

    for (number of numbers) {
        if (number % 2 !== 0) {
            return (number % 2 !== 0);
        }
    }
    return (number % 2 !== 0)
}

const profit = (sell_price, cost_price) => {
    if (sell_price > 0 && cost_price > 0) {
        let totalCost = cost_price + cost_price * (0.2);
        let totalProfit = (sell_price * 1000) - (totalCost * 1000);
        return `The profit will be ${totalProfit}.00`;
    } else {
        return "Invalid values.";
    }
}

const taxesPayment = (salary) => {
    let salaryINSS = 0;
    let finalSalary = 0;

    if (salary <= 1556.94) {
        salaryINSS = salary - (salary * 0.08);
    } else if (salary >= 1556.95 && salary <= 2594.92) {
        salaryINSS = salary - (salary * 0.09);
    } else if (salary >= 2594.93 && salary <= 5189.82){
        salaryINSS = salary - (salary * 0.11);
    } else {
        salaryINSS = salary - 570.88;
    }

    if (salaryINSS <= 1903.98) {
        return finalSalary;
    } else if (salaryINSS >= 1903.99 && salaryINSS <= 2826.65) {
        finalSalary = salaryINSS - ((salaryINSS * 0.075) - 142.80);
    } else if (salaryINSS >= 2826.66 && salaryINSS <= 3751.05) {
        finalSalary = salaryINSS - ((salaryINSS * 0.15) - 354.80);
    } else if (salaryINSS >= 3751.06 && salaryINSS <= 4664.68) {
        finalSalary = salaryINSS - ((salaryINSS * 0.225) - 636.80);
    } else {
        finalSalary = salaryINSS - ((salaryINSS * 0.275) - 869.36);
    }

    return `O salário liquido após o INSS e IR será de R$ ${finalSalary}`;
}

console.log(taxesPayment(3000));