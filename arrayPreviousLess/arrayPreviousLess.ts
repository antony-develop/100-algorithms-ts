function arrayPreviousLess(items: number[]): number[] {
    const result = [];
    for (let i = 0; i < items.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (items[j] < items[i]) {
                result.push(items[j]);
                break;
            }

            if (j == 0) {
                result.push(-1);
            }
        }
    }

    return result;
}

console.log(arrayPreviousLess([3, 9, 5, 2, 4, 5]));