// 「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。

// 如果 n 是快乐数就返回 True ；不是，则返回 False 。

// 时间复杂度是O(log n)，空间复杂度是O(1)

//有好几种解法 这里先写hash相关的
//第一种 使用set
function isHappy(n) {
    const set = new Set();
    while(n!==1&&!set.has(n)){
        set.add(n);
        n = getNext(n);
    }
    return n === 1;
}

function getNext(n) {
    let sum = 0;
    while(n>0){
        const digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}

//第二种 使用快慢指针

//也就是说 把每次的和当成一个链表的节点 然后判断链表是否有环
// 第一步：把这题抽象成链表
// 每个数经过变换都会得到下一个数，可以把它想象成一条链：
// 19 → 82 → 68 → 100 → 1
// 4  → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4 → 16 → ...

// 快乐数：链走到 1 就停了
// 非快乐数：链会形成一个环

// 这跟链表有环的结构完全一样，所以可以套 Floyd 判环。

//第二步：Floyd 判环是什么
// 就是经典的龟兔赛跑：

// slow 每次走一步
// fast 每次走两步
// 如果有环，fast 一定会从后面追上 slow（在环里套圈）
// 如果无环，fast 会先到终点

//第三步：套用模板
// 1. 初始化 slow 和 fast
// 2. 移动 slow 和 fast
// 3. 判断是否有环
// 4. 返回结果

function isHappy(n) {
    let slow = n;
    let fast = getNext(getNext(n));
    while(fast!==1&&slow!==fast){
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast === 1;
}

function getNext(n) {
    let sum = 0;
    while(n>0){
        const digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}