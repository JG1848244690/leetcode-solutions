// 字符串的右旋转操作是把字符串尾部的若干个字符转移到字符串的前面。给定一个字符串 s 和一个正整数 k，请编写一个函数，将字符串中的后面 k 个字符移到字符串的前面，实现字符串的右旋转操作。

// 例如，对于输入字符串 "abcdefg" 和整数 2，函数应该将其转换为 "fgabcde"。

// 输入：输入共包含两行，第一行为一个正整数 k，代表右旋转的位数。第二行为字符串 s，代表需要旋转的字符串。

// 输出：输出共一行，为进行了右旋转操作后的字符串。

// 样例输入：
// 2
// abcdefg 

// 样例输出：
// fgabcde


function rightRotateString(str, k) {
    // 处理 k 大于字符串长度的情况
    k = k % str.length;
    if (k === 0) return str;
    
    // 方法1：使用原代码的思路（三次反转）
    let arr = str.split('');
    
    // 反转前 n-k 个字符
    arr = reverseRange(arr, 0, arr.length - k - 1);
    // 反转后 k 个字符
    arr = reverseRange(arr, arr.length - k, arr.length - 1);
    // 反转整个数组
    arr = reverseRange(arr, 0, arr.length - 1);
    
    return arr.join('');
}

// 反转数组中指定范围的元素 双指针
function reverseRange(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}

// 使用示例
const str = "abcdefg";
const k = 2;
const result = rightRotateString(str, k);
console.log(result); // "fgabcde"