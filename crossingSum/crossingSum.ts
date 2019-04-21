function crossingSum(matrix: number[][], a: number, b: number): number {
    let sum = 0;

    matrix.forEach((row, i) => {
        sum += (i == a) ? row.reduce((a,b) => a+b) : row[b];
    });

    return sum;
}

console.log(crossingSum([[1, 1, 1, 1],
                                [2, 2, 2, 2],
                                [3, 3, 3, 3]], 1, 3));