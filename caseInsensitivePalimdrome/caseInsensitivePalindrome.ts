function isCaseInsensitivePalindrome(inputString: string): boolean {
    inputString = inputString.toLowerCase();

    const sideLength = Math.floor(inputString.length / 2);

    for (let i = 0; i < sideLength; i++) {
        if (inputString[i] != inputString[inputString.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
console.log(isCaseInsensitivePalindrome('abbc'));
console.log(isCaseInsensitivePalindrome('aCdcA'));
console.log(isCaseInsensitivePalindrome('asdfgggfdsa'));