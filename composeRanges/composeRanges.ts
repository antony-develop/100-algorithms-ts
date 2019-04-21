function composeRanges(nums: number[]): string[] {
    const ranges = [];
    let firstNum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 !== nums[i+1] || nums.length - 1 == i) {
            const range = (firstNum == nums[i]) ? String(firstNum) : `${firstNum}->${nums[i]}`;
            ranges.push(range);

            firstNum = nums[i+1];
        }
    }

    return ranges;
}


console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));