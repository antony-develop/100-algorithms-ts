function circleOfNumbers(n: number, firstNumber: number): number {
    let position = n / 2 + firstNumber;
    position = position > n ? position - n : position;
    return position;
}

console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(10, 6));