function extractMatrixColumn(matrix: number[][], column: number): number[] {
    const columnValues = [];
    for (let row of matrix) {
        columnValues.push(row[column]);
    }

    return columnValues;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));