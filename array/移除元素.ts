// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并原地修改输入数组。

// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

// 示例 1: 给定 nums = [3,2,2,3], val = 3, 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。 你不需要考虑数组中超出新长度后面的元素。

// 示例 2: 给定 nums = [0,1,2,2,3,0,4,2], val = 2, 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。

// 你不需要考虑数组中超出新长度后面的元素。

// 数组的元素在内存地址中是连续的，不能单独删除数组中的某个元素，只能覆盖

// 快慢指针 快指针遍历数组，慢指针记录新数组的位置
const nums = [3, 2, 2, 3];
const val = 3; // 需要移除的值

function removeElement(nums: number[], val: number): number {
    let slowIndex: number = 0, fastIndex: number = 0;
    while (fastIndex < nums.length) {
        if (nums[fastIndex] !== val) {
            nums[slowIndex++] = nums[fastIndex];// 将快指针的值赋给慢指针
        }
        fastIndex++;// 快指针右移
    }
    return slowIndex;// 返回新数组的长度
};