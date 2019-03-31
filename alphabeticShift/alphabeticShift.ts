function alphabeticShift(inputString: string): string {
    let result = '';
    for (let char of inputString) {
        let code = char.charCodeAt(0);
        code = (char === 'z') ? 'a'.charCodeAt(0) - 1 : code;
        code = (char === 'Z') ? 'A'.charCodeAt(0) - 1 : code;

        result += String.fromCharCode(code + 1);
    }

    return result;
}

console.log(alphabeticShift('crazy'));