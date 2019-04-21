function convertString(s: string, t: string): boolean {
    let poisition = 0;
    let word = '';
    for (let char of t) {
        poisition = s.indexOf(char, poisition);
        if (poisition === -1) {
            return false;
        }

        word += s[poisition];
        if (word === t) {
            return true;poisition
        }
    }

    return true;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
