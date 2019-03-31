function adjacentElementsProduct(inputArray: number[]): number {
    let max = inputArray[0] * inputArray[1];

    for (let i = 1; i < inputArray.length - 1; i++) {
        let product = inputArray[i] * inputArray[i+1];
        max = product > max ? product : max;
    }

    return max;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));