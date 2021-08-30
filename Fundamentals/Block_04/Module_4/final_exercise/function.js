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
