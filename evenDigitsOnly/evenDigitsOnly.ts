function evenDigitsOnly(n: number): boolean {
    for (let digitStr of n.toString()) {
        if (Number(digitStr) % 2 !== 0) {
            return false;
        }
    }

    return true;
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));