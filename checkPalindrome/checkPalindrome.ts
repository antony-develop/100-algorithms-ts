function checkPalindrome(inputString: string): boolean {
    const sideLength = Math.floor(inputString.length / 2);
    for (let i = 0; i < sideLength; i++) {
        if (inputString[i] !== inputString[inputString.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
