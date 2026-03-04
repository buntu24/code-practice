/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/
function twoSum(nums: number[], target: number): number[] {
   const valueToIndex: Record<number, number> = nums.reduce((acc, curr, index) => {
        acc[curr] = index;
        return acc;
   }, <Record<number, number>>{});
   for(let i =0; i< nums.length; i++) {
     if(valueToIndex[target - nums[i]] !== undefined && valueToIndex[target - nums[i]] !== i) {
        return [i, valueToIndex[target - nums[i]]];
     }
   }
   return [];
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));