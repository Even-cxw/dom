
// class修饰器 => 将类作为修饰器的参数，并调用修饰器。
@btest
class Atest {
    constructor() {}
}
function btest(target) {
    target.isflage = true
}

Atest.isflage // true