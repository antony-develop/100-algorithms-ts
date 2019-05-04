function digitDegree(n: number): number {
    let number = n;
    let degree = 0;
    while (number >= 10) {
        const strNums = number.toString();
        number = 0;
        for (let strNum of strNums) {
            number += Number(strNum);
        }
        degree++
    }

    return degree;
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));