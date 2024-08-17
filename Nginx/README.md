


## root配置讲解

### location配置 `/images/`
```sh
location /images/ { 
    root   /Users/even/Documents/connect/dom/Nginx; 
}
```
1. 如上配置 root 请求路径进行拼接
 - 当请求 http://localhost/images/test.jpg 时，nginx会将请求路径拼接到root指定的路径上
 - 拼接如下 /Users/even/Documents/connect/dom/Nginx/`images/test.jpg`
2. 请注意⚠️：以下访问并不会映射到资源文件
 - http://localhost/imagesasdf/test.jpg => 404 Not Found
 - http://localhost/images/ => 404 Not Found

### location配置 `/images`
```sh
location /images { 
    root   /Users/even/Documents/connect/dom/Nginx; 
}
```
1. 如上配置虽然请求路径拼接到root指定的路径上，但是末尾没有`/`，nginx会自动添加`/`
 - 当请求 http://localhost/images/test.jpg 时，nginx会将请求路径拼接到root指定的路径上
 - 拼接如下 /Users/even/Documents/connect/dom/Nginx`/images/test.jpg` => 依旧可以访问到资源文件
2. 请注意⚠️：区别在于当你访问 http://localhost/imagesasdf时候，nginx依旧会进行文件映射
 - http://localhost/imagesasdf/test.jpg => 寻找root/imagesasdf目录下是否有test.jpg文件，如果有则返回，如果没有则返回404 Not Found


### location配置 `root` 与 `alias`区别

- root：指定资源文件的根目录，nginx会将请求路径拼接到root指定的路径上
- alias：指定资源文件的别名，nginx会将请求路径映射到alias指定的路径上，但是不会拼接到root指定的路径上

```sh
# 当访问 http://localhost/images/test.jpg 时
location /images/ { 
    root   /Nginx; 
}
# 拼接如下 /Nginx/images/test.jpg

location /images/ { 
    alias   /Nginx; 
}
# 映射到 /Nginx/test.jpg
```

## 添加nginx配置文件

- 问题一： 如何映射其他配置文件
> 在http中添加 include属性
```sh
http {
    include       mime.types;
    default_type  application/octet-stream;

    access_log  /Users/even/Documents/connect/dom/Nginx/logs/access_log;
    sendfile        on;
    keepalive_timeout  65;

    include /Users/even/Documents/connect/dom/Nginx/servers/*;
}
```

- 问题二：access_log是否也包含错误日志输出
> 不包含需要额外配置错误输入日志文件
```sh
error_log  /Users/even/Documents/connect/dom/Nginx/logs/error.log;

```

- 问题三： servers里面文件后缀名是什么样的？
> 跟nginx.conf后缀一样，也要有conf


## nginx练习

### 配置（正常）、（异常）日志输出文件位置



### 一个服务不同URl存放俩个html



### 一个服务一个url根据不同终端呈现不同html