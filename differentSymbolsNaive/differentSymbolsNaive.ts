function differentSymbolsNaive(string: string): number {
    const chars = new Set();
    for (let char of string) {
        chars.add(char);
    }

    return chars.size;
}

function differentSymbolsNaive2(s: string): number {
    const chars = {};
    for (let char of s) {
        chars[char] = char;
    }

    return Object.keys(chars).length;
}

console.log(differentSymbolsNaive('cabca'));
