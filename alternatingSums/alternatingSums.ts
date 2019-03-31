function alternatingSums(a: number[]): number[] {
    let evenSum = 0;
    let oddSum = 0;

    a.forEach((elem, index) => {
        if (index % 2 == 0) {
            evenSum += elem;
        } else {
            oddSum += elem;
        }
    });

    return [evenSum, oddSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))