// 需要变量周转才能工作；
function defineReactive(obj,key) {
  // 要有一个临时变量
  let _my = obj[key];
  Object.defineProperty(obj, key, {
    get() {
      return _my;
    },
    set(val) {
      _my = 2 + val;
    }
  })
}
var b = {a:1};
defineReactive(b, 'a');
console.log(b.a)
b.a = 2;
console.log(b.a);
console.log('-------------------')

