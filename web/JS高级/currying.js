// 柯里化函数
// 柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数 (最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。

/**
 * 
 * @param {*} fn 函数
 * @param  {...any} args 提取哪个参数 
 */
function currying(fn, ...args){
    // 获取fn的参数有几个
    const length = fn.length
    let allArgs = [...args]

    const res = (...arg1) => {
        allArgs = [...allArgs, ...arg1]
        // 长度相等就返回结果
        if (allArgs.length === length) {
            return fn(...allArgs)
        } else {
            // 不相等就返回函数
            return res
        }
    }

    return res

}

// 测试
const add = (a, b, c) => (a + b + c)
const a = currying(add, 2)
console.log(a(2, 3));