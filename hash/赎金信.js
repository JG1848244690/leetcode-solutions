//判断magazine是否能组成ransomNote
const a = "abc";
const b = "abc";

function canConstruct(a, b) {
    const map = new Map();
    for (const c of b) {
        map.set(c, (map.get(c) || 0) + 1); //把b中的字符作为key，出现的次数作为value存入map中
    }
    for (const c of a) {
        if (!map.get(c)) return false;  //如果a中的字符在map中不存在，则返回false
        map.set(c, map.get(c) - 1); //如果a中的字符在map中存在，则将value减1
    }
    return true; //如果a中的字符在map中都存在，则返回true
}