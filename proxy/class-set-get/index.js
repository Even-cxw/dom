class Obj1 {
  constructor() {
    this.va = 'Levi'
  }
  get age() {
    return this.va + '1'
  }
  set age(val) {
    console.log(222,this.va)
    this.va = val;
  }
}
let obj1 = new Obj1();
console.log(obj1.age)