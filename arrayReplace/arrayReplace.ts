function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
    inputArray.forEach((elem, i) => {
        if (elem === elemToReplace) {
            inputArray[i] = substitutionElem;
        }
    });

    return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));