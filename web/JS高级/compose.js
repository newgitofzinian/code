// 函数组合函数compose

function compose(...fn){
    if (fn.length === 0 ) return (num) => num
    if (fn.length === 1 ) return fn[0]
    return fn.reduce((pre, next) => {
        return (num) => {
            return next(pre(num))
        }
    })
}

// 测试

function f1(x){
    return x + 1;
}
function f2(x){
    return x + 2;
}
function f3(x){
    return x + 3;
}
function f4(x){
    return x + 4;
}

const a = compose(f1, f2, f3, f4);
console.log(a);
console.log(a(1));