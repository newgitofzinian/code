// 原生AJAX请求

const ajax = {
  /**
  * get 请求
  *
  */
  get(url, fn){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true) // 异步与否
    xhr.onreadystatechange = function(){
      // 请求为4开头正常现实
      if(xhr.readyState === 4){
        fn(xhr.responeText)
      }
    }
    xhr.send()
  },

  post(url,data,fn){
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-type','application/x-www-from-urlencoded')
    xhr.onreadystatechange = function(){
      // 请求为4开头正常现实
      if(xhr.readyState === 4){
        fn(xhr.responeText)
      }
    }
    xhr.send(data)
  }


}
