function areSimilar(a: number[], b: number[]): boolean {
    const aDiff = [];
    let bDiff = [];
    for (let i = 0; i < a.length; i++) {
       if (a[i] != b[i]) {
           aDiff.push(a[i]);
           bDiff.push(b[i]);
       }
    }
    
    if (aDiff.length <= 2) {
        bDiff = bDiff.reverse();
        return (aDiff.toString() == bDiff.toString());
    }

    return false;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3, 3], [2, 1, 3, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
