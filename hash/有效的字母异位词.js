// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

//字母异位词：两个字符串中每个字符出现的次数都相同，但是字符的顺序不同。


const s = "anagram", t = "nagaram";

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const resSet = new Array(26).fill(0);
    const base = "a".charCodeAt();// 获取a的ASCII码
    for(const i of s) {
        resSet[i.charCodeAt() - base]++;// 将s中每个字符的ASCII码减去a的ASCII码，得到一个0-25的数组，数组中每个元素表示一个字符出现的次数
    }
    for(const i of t) {
        if(!resSet[i.charCodeAt() - base]) return false;
        resSet[i.charCodeAt() - base]--;
    }
    return true;
};

var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;
  let char_count = new Map();
  for(let item of s) {
    char_count.set(item, (char_count.get(item) || 0) + 1) ;
  }
  for(let item of t) {
    if(!char_count.get(item)) return false;
    char_count.set(item, char_count.get(item)-1);
  }
  return true;
};