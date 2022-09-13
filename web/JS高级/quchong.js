// 数组去重

// 第一种 Map记录
function quchong1(arr){
  const newArr = []
  arr.reduce((pre, next) => {
    if (!pre.has(next)){
      pre.set(next, 1)
      newArr.push(next)
    }
    return pre
  }, new Map())
  return newArr
}

// 第二种 Set去重
function quzhong2(arr){
  return [...new Set(arr)]
}
