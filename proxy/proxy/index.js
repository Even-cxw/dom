const handler = {
  /**
   * @dexc 参数
   * @param {Object} obj 当前对象
   * @param {String} prop 需要获取的属性值，
   * @returns 
   */
  get: function(obj, prop) {
    console.log('obj',obj);
    console.log('prop', prop);
    return prop in obj ? obj[prop] : 37;
  },
  has: function(obj, prop) {

  }
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

p.a
// console.log(p.a, p.b);      // 1, undefined
// console.log('c' in p, p.c); // false, 37