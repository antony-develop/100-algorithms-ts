function centuryFromYear(year: number): number {
    if (year % 100 === 0) {
        return year / 100;
    }

    return Math.floor(year / 100) + 1;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
console.log(centuryFromYear(1701));
console.log(centuryFromYear(1));