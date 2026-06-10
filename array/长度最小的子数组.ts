// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

// 示例：

// 输入：s = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
// 提示：

// 1 <= target <= 10^9
// 1 <= nums.length <= 10^5
// 1 <= nums[i] <= 10^5


function minSubArrayLen(target: number, nums: number[]): number {
    let left: number = 0,
        res: number = Infinity,
        subLen: number = 0,// 子数组长度
        sum: number = 0;// 子数组和
    for (let right: number = 0; right < nums.length; right++) {
        sum += nums[right];// 右指针右移，累加右指针元素
        while (sum >= target) {
            subLen = right - left + 1;// 计算子数组长度
            res = Math.min(res, subLen);
            sum -= nums[left];// 左指针右移，累减左指针元素
            left++;// 左指针右移
        }
    }
    return res === Infinity ? 0 : res;// 如果res为Infinity，则返回0，否则返回res
}