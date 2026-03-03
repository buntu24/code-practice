/*
Given an integer array nums,
return all the triplets [nums[i], nums[j], nums[k]]
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0
*/
function threeSum(nums) {
    let result = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            if (nums[i] + nums[j] + nums[k] > 0)
                k--;
            else if (nums[i] + nums[j] + nums[k] < 0)
                j++;
            else {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                while (nums[j] === nums[j - 1] && j < k) {
                    j++;
                }
            }
        }
    }
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0,0,0]));
console.log(threeSum([0])); 
