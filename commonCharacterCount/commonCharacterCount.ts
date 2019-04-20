function commonCharacterCount(s1: string, s2: string): number {
    const charCount1 = countCharacters(s1);
    const charCount2 = countCharacters(s2);
    let total = 0;

    for (let char in charCount1) {
        const count1 = charCount1[char];
        const count2 = charCount2[char];
        if (count2) {
            total += Math.min(count1, count2);
        }
    }

    return total;
}

function countCharacters(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }

    return charCount;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));