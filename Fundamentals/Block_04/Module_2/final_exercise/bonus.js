const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const bubbleSortIncrease = (array) => {
    for (let i = 1; i < array.length; i ++) {
        for (let secondIndex = 0; secondIndex < i; secondIndex ++) {
            if (array[i] < array[secondIndex]) {
                let position = array[i];
                array[i] = array[secondIndex];
                array[secondIndex] = position;
            }
        }
    }

    return array;
}

const bubbleSortDecrease = (array) => {
    for (let fixedIndex = 1; fixedIndex < array.length; fixedIndex++) {
        for (let eachIndex = 0; eachIndex < fixedIndex; eachIndex++) {
            if (array[fixedIndex] > array[eachIndex]) {
                let position = array[fixedIndex];
                array[fixedIndex] = array[eachIndex];
                array[eachIndex] = position;
            }
        }
    }

    return array;
}

const multNext = (array) => {
    const myArray = [];
    let size = array.length - 1;

    for (let i = 0; i <= size; i++) {
        myArray.push(array[i + 1] * array[i]);
    }

    myArray.pop();
    myArray.push(array[array.length - 1] * 2);

    return myArray;
}

console.log(multNext(numbers));
