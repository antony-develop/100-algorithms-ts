function factorializeANumber(num: number): number {
    let total = 1;

    for (let i = 1; i <= num; i++) {
        total *= i;
    }

    return total;
}

function factorializeANumberRecursion(num: number): number {
    if (num === 1) {
        return num;
    }

    return num * factorializeANumberRecursion(num - 1);
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));