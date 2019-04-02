function arrayConversion(inputArray: number[]): number {
    let i = 1;
    while (inputArray.length > 1) {
        inputArray = sumProduct(inputArray, i);
        i++;
    }

    return inputArray[0];

}

function sumProduct(nums: number[], iteration: number): number[] {
    const result: number[] = [];
    
    for (let i = 0; i < nums.length; i += 2) {
        if (iteration % 2 == 0) {
            result.push(nums[i] * nums[i+1]);
        } else {
            result.push(nums[i] + nums[i+1]);
        }
    }

    return result;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
