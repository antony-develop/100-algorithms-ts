function depositProfit(deposit: number, rate: number, threshold: number): number {
    let compound = deposit;
    let years = 0;
    while (compound < threshold) {
        compound += compound / 100 * rate;
        years ++;
    }

    return years;
}

console.log(depositProfit(100, 20, 170))