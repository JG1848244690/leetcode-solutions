//给定一个字符串 s 和一个整数 k
// 你需要对从字符串开头算起的每隔 2k 个字符的前 k 个字符进行反转。

var reverseStr = function (s, k) {
    const len = s.length;
    let resArr = s.split("");
    for (let i = 0; i < len; i += 2 * k) {  // 每隔 2k 个字符的前 k 个字符进行反转
        let l = i - 1, r = i + k > len ? len : i + k;
        while (++l < --r) [resArr[l], resArr[r]] = [resArr[r], resArr[l]];
    }
    return resArr.join("");
};