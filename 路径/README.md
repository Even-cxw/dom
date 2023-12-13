## 路径测试

1. `./`代表当前路径
2. `js`也代表当前路径
3. `/.../`代表服务器文件夹下面的路径 (绝对路径);


```javascript
<script src="/subVue/b.js"></script>
```

验证步骤
1. 双击 index.html 通过`live server`插件打开。
> live server 会在index.html根目录开个服务器、服务器内有三个文件`a.js\b.js\index.html`, 并不会检索到`subVue`所以会报错。
2. 选择`路径`文件夹  利用http-server开服务 
> 完全模拟生产环境服务器下的文件了，直接点击index.html就可以加载到`b.js`文件。