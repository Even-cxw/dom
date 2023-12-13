// obj => 当前返回值
// all => 值总和
// [111,222].reduce((obj,all) => {},[])


// 手写reduce prototype 
/**
 * @desc 手写reduce 
 * 1. 如何拿到原数组 通过this
 */
console.log(Array);
Array.prototype.haha = function() {
    console.log('this',this);
}

new Array().__proto__.reduce = function(callback,init) {
    // if (callback typeof 'Function') throw 11111
    // all, 所有总和    
    // cur, 当前元素
    let all = null;
    this.forEach((item,index) => {
        if(index == 0) {
            all = init
        } else {
            all = callback(all,item);
        }
    });
    return all;
}


Array.prototype.reduce = function(fn) {
    var arr = this   //this就是调用reduce方法的数组
    var total =  arr[0] // 默认为数组的第一项
    for (var i = 1; i < arr.length; i++) {
        total = fn(total, arr[i], i , arr)
    } 
    return total
}










// Array.prototype.reduce = function reduce(callback, initial) {
//     //先判断callback是不是回调函数，以及initial有没有传值。
//     var self = this, // this->arr
//         i = 0;
//     if (typeof callback !== "function") throw new TypeError('callback must be an function!');
//     if (typeof initial === "undefined") {
//         initial = self[0];
//         i = 1;
//     }
//     // 迭代数组每一项，每遍历数组中的一项，回调函数callback被触发执行一次
//     for (; i < self.length; i++) {
//         var item = self[i],
//             index = i;
//         initial = callback(initial, item, index);
//     }
//     return initial;
// };
// var arr = [10, 20, 30, 40];
// var total = arr.reduce((result, item) => {
//     return result + item;
// });
// console.log(total);

// console.log([].reduce())


/**
 * @dest  编写函数add(1)(2)(3)(4) == 10;  add(1,2)(3,4) == 10
 * 技术点
 * 1.toString()valueof()
*/
// let sum = 0;
// function add() {
//  const args = arguments;
//  const s = arguments.callee;
//  sum += Array.from(args).reduce((prev, next) => {
//   return prev + next;
//  }, 0);
//  s.valueOf = function () {
//   return sum;
//  };
//  return s;
// }

// console.log(add(1)(2, 3) == 6);



/**
 * @desc 每次调用forEach会执行我的自定义函数 fun01(){}
 * 技术点： 
 * 1. __proto__
 * 2. return 函数
 * 3. apply
*/
// new Array().__proto__.forEach = reigestForEach(new Array().__proto__.forEach)
// function monitor(){
//     console.log('我为什么没有执行！')
// }
// function reigestForEach(forEach) {
//     return function(){
//         monitor()
//         forEach.apply(this,arguments)kaifa
//     }
// }
// [1,2].forEach((item) => {console.log('item',item)});


/**
 * @desc 去重
 */
// 方法一
// let a1 = [1, 2, 3, 41, 1, 2, 2]
// function fun02(a1) {
//     let a2 = [];
//     a1.forEach((item) => {
//         !a2.includes(item) && a2.push(item)
//     })
//     return a2
// }

// 方法二
// let a3 = a1.reduce(function (prev, next) {
//     if (prev.includes(next)) { return prev; }
//     return [...prev, next]
// }, [])

// 方法三
// let a4 = [...new Set(a1)]
// console.log('a4', a4);


/**
 * @desc 排序
*/
// 方法一:冒泡排序
/**
 * 定义： 比较相邻的前后二个数据，如果前面数据大于后面的数据，就将二个 数据交换。
 * 这样对数组的第0个数据到N-1个数据进行一次遍历后，最大的一个数据就“沉”到数组第N-1个位置。
 * N=N-1，如果N不为0就重复前面二步，否则排序完成。
 *  第一组排序
 * [6,1,2,4,3,5]
 * [1,6,2,4,3,5]
 * [1,2,6,4,3,5]
 * [1,2,4,6,3,5]
 * [1,2,4,3,6,5]
 * [1,2,4,3,5,6]
 * 后续还n组
 */
// b1.forEach((m, i) => {
//     b1.forEach((mm, ii) => {
//         if (b1[ii] > b1[ii + 1]) {
//             var temp = b1[ii];
//             b1[ii] = b1[ii + 1];
//             b1[ii + 1] = temp
//         }
//     })
// })
// console.log(b1)


// 方法二

// 方法三
// let b5 = b1.sort(function(a,b){
//     return a - b
// })
// console.log('sort',b5)
