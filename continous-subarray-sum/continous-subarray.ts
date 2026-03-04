function checkSubarraySum(nums: number[], k: number): boolean {
    let i = 0;
    let j = 1;
    let total = 0;
    while (i < nums.length) {
        total += nums [i];
        if (total % k === 0) {
            return true;
        }
        if (j = nums.length - 1) {
            i++;
            j=i+1;
        } else {
            j++;
        }
    }

    return false;
};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6)); // true


function checkSubarraySum2(nums: number[], k: number): boolean {
    const remainderToIndexMap: Record<number, number> = { 0: -1 };
    let runningSum: number = 0;
    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
        runningSum = (runningSum + nums[currentIndex]) % k;
        if (!remainderToIndexMap.hasOwnProperty(runningSum)) {
            remainderToIndexMap[runningSum] = currentIndex;
        } else if (currentIndex - remainderToIndexMap[runningSum] > 1) {
            return true;
        }
    }
    return false;
}



console.log(checkSubarraySum2([23, 2, 4, 6, 7], 6)); // true