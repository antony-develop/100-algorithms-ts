function containsDuplicates(a: number[]): boolean {
    const valuesCount = {};
    for (let num of a) {
        if (valuesCount[num]) {
            return true;
        }

        valuesCount[num] = 1;
    }

    return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
