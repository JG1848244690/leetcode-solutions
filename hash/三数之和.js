function threeSum(nums) {
    const results = [];
    const n = nums.length;
  
    // 排序：升序
    nums.sort((a, b) => a - b);
  
    for (let i = 0; i < n - 2; i++) {
  
      // 跳过重复的 i（防止重复三元组）比如[1,1,2,3,4] 1已经循环过一次了 
      if (i > 0 && nums[i] === nums[i - 1]) continue;
  
      let left = i + 1;
      let right = n - 1;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
  
        if (sum === 0) {
          results.push([nums[i], nums[left], nums[right]]);
  
          // 去重：跳过重复的 left 和 right
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
  
          // 指针正常移动
          left++;
          right--;
  
        } else if (sum < 0) {
          left++; // 小了，让左边变大
        } else {
          right--; // 大了，让右边变小
        }
      }
    }
  
    return results;
  }