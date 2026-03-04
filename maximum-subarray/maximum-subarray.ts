function maxSubArray(nums: number[]): number {
    let maxSum = nums[0];
    let currentSum = 0;
    for (let i = 0; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6