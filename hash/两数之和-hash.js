const arr = [3, 3, 1, 4, 5, 7, 2, 1]
//这种方法有点像逆向
//求target-arr[i]的值，如果map中存在这个值，则返回这两个值的索引
//如果不存在，则将arr[i]作为key，i作为value存入map中
//最后返回map中的值和索引
function twoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {

    const complement = target - arr[i];

    if (map.has(complement)) return [map.get(complement), i];

    map.set(arr[i], i); //把值作为key 索引设置为value
  }
}

console.log(twoSum(arr, 8));