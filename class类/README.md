
# React框架回顾Component

1. constructor是否可以省略
2. super有什么作用
3. super(...)参数会传递到哪里
```js
export default class Mypage extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        demo1
      </main>
    )
  }
}
```

## super的作用

```js
// 定义父类
class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Children extends Parent {
  constructor() {
    super('Even')
  }
}
```

## class函数特点

1. 子类继承父类

```js
class Parent {
  construtor() {
    this.ele = 'id';
  }
}

class Children extends Parent {
  constructor(
    super()
  )
}

console.log(new Parent())

```

- 页面元素有5个1, 1下面有+按钮，每点以下加号 对应上面数字加一。
```js
var a,b,c,d,e = 1;
function aAdd() {
  a+=1
}
function bAdd() {
  b+=1
}
// ...
```

```js
var a = 1,b = 1,c = 1,d = 1,e = 1;
function Add(name) {
  eval(`${name}+=1`)
}
Add('a')
```


