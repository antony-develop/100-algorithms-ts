function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let sums = [];
    for (let i = 0; i <= inputArray.length - k; i++) {
        let sum = inputArray.slice(i, i + k).reduce((a, b) => a + b);
        sums.push(sum);
    }

    return Math.max(...sums);
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));