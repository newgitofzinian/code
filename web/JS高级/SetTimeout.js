// 用setTimeout实现SetInterval
// setInterval 周期调用函数

function mySetTimeout(fn, delay) {
  let timer = null
  const interval = () => {
    fn()
    timer = setTimeout(interval, delay)
  }

  setTimeout(interval, delay)

  return {
    cancel : () => {
      clearTimeout(timer)
    }
  }
}

// 测试

const { cancel } = mySetTimeout(() => console.log('sss'), 1000)
setTimeout(()=>{
  cancel()
}, 4000)
