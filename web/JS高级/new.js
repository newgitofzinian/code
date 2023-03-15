function new(fn, ...args){
  //  创建一个新对象
  const obj = {}
  // 连接原型，新对象可以访问原型中的属性
  obj.__proto__ = fn.prototype
  //
  fn.apply(obj, args)

  return obj

}
