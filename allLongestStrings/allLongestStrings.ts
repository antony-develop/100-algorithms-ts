function allLongestStrings(inputArray: string[]): string[] {
    let maxLenght = 0;
    let longestArray: string[] = [];

    for (let str of inputArray) {
        if (str.length > maxLenght) {
            maxLenght = str.length;
            longestArray = [];
        }

        if (str.length == maxLenght) {
            longestArray.push(str);
        }
    }

    return longestArray;
}

console.log(allLongestStrings(["a", "aba", "aa", "ad", "vcd", "aba"]));