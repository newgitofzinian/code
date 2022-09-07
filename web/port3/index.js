// 定义一个函数
function fn() {}

// 两种调用方法
// 第一种
fn()
// 第二种
new fn()

// 举个例子
new Date()
Date()

class User()

console.log(typeof(User()));

function a(){
  // 禁用new调用
  if (new.target) {
    throw new Error("can't invoke with 'new' ");
  }
}

a();
new a();
