function addTwoDigits(n: any): number {
    const str = n.toString();
    return Number(str[0]) + Number(str[1]);
}

console.log(addTwoDigits(29));