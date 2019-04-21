function containsCloseNums(nums: number[], k: number): boolean {
    const positions = {};

    for (let i = 0; i < nums.length; i++) {
        if (positions[nums[i]] && Math.abs(positions[nums[i]] - i) <= k) {
            return true;
        }

        positions[nums[i]] = i;
    }

    return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));