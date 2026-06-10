// 给定两个数组，编写一个函数来计算它们的交集。

const nums1 = [1, 2, 2, 1], nums2 = [2, 3, 2];

function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    return [...set1].filter(x => set2.has(x));
}