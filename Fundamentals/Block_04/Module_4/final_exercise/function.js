function isPalindrome(word) {
    const normalWord = word.split("");
    const reverseWord = [];
    let palindromeScore = word.length;
    let wordScore = 0;

    for (let i = normalWord.length - 1; i >= 0; i--) {
        reverseWord.push(normalWord[i]);
    }

    for (letter in word) {
        if (normalWord[letter] === reverseWord[letter]) {
            wordScore += 1;
        };
    }

    return palindromeScore === wordScore;
}

function greaterValue(arr) {
    let greaterIndex = 0;
    let greaterNumber = 0;
    for (value in arr) {
        if (arr[value] >= greaterNumber) {
            greaterIndex = value;
            greaterNumber = arr[value];
        }
    }
    
    return greaterIndex;
}

function smallerValue(arr) {
    let smallerIndex = 0;
    let smallerNumber = 0;
    for (value in arr) {
        if (arr[value] <= smallerNumber) {
            smallerIndex = value;
            smallerNumber = arr[value];
        }
    }
    
    return smallerIndex;
}

function greaterName(arr) {
    let greaterWord = "";
    for (n of arr) {
        if (n.length >= greaterWord.length) {
            greaterWord = n;
        }
    }

    return greaterWord;
}

function moreRepeats(arr) {
    let repeater = 0;
    let returnable = "";
    const objCompare = {};

    for (key of arr) {
        objCompare[key] = 0;
    }

    const objKeys = Object.keys(objCompare);
    for (let number = 0; number < arr.length; number++) {
        for (key of objKeys) {
            if (key == arr[number]) {
                objCompare[key] += 1;
            }
        }
    }

    for (i in objCompare) {
        if (objCompare[i] > repeater) {
            repeater = objCompare[i];
            returnable = i;
        }
    }

    console.log(returnable);
}

function sum(number) {
    let finalSum = 0;
    for (let i = 1; i <= number; i++) {
        finalSum += i;
    }

    return finalSum;
}

function compareFinalStrings(str1, str2) {
    let expectedScore = str2.length;
    let score = 0;
    for (let i1 = str1.length - str2.length; i1 < str1.length; i1++) {
        for (let i2 = 0; i2 < str2.length; i2++) {
            if (str1[i1] === str2[i]) {
                score += 1;
            }
        }
    }

    return score === expectedScore;
}
