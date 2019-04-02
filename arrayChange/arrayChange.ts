function arrayChange(inputArray: number[]): number {
    let moves = 0;
    for (let i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i] >= inputArray[i+1]) {
            moves += inputArray[i] - inputArray[i+1] + 1;
            inputArray[i+1] = inputArray[i] + 1;
        }
    }

    return moves;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([3, 1, 1]));
console.log(arrayChange([7, 2, 4]));