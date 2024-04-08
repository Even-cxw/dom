


class Test {

}

// 定义基类
class Component {
  constructor() {
    this.state = {
      num: 1
    }
  }
  setState(value) {
    this.state.num = value
  }
}


class Report extends Component {
  constructor() {
    super()
    console.log(this.state,this.state)
    this.changeNum()
  }

  changeNum(value) {
    this.setState(value)
  }
}

// let report = new Report();
// report.changeNum(3)
// console.log('report', report);

var a = 1,b = 1,c = 1,d = 1,e = 1;
function Add(name) {
  eval(`${name}+=1`)
}
Add('a')