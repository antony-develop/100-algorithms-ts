function compareIntegers(a: string, b: string): string {
    const aInt = Number(a);
    const bInt = Number(b);

    if (aInt == bInt) {
        return 'equal';
    }
    if (aInt > bInt) {
        return 'greater';
    }
    if (aInt < bInt) {
        return 'less';
    }
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));