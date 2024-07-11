

## nginx -help

```sh
  -?,-h         : this help
  -v            : show version and exit
  -V            : show version and configure options then exit
  -t            : test configuration and exit
  -T            : test configuration, dump it and exit
  -q            : suppress non-error messages during configuration testing
  -s signal     : send signal to a master process: stop, quit, reopen, reload
  -p prefix     : set prefix path (default: /opt/homebrew/Cellar/nginx/1.25.4/)
  -e filename   : set error log file (default: /opt/homebrew/var/log/nginx/error.log)
  -c filename   : set configuration file (default: /opt/homebrew/etc/nginx/nginx.conf)
  -g directives : set global directives out of configuration file
```


## nginx 默认配置选项

```sh
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       8080;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   /opt/homebrew/etc/nginx/html;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}
    include servers/*;
}
```



## 替换nginx配置文件 - `方案不可行，会有很多报错情况`

1. 原来的配置文件位置 `/opt/homebrew/etc/nginx/nginx.conf`
> 希望将配置文件修改成 "/Users/even/Documents/connect/dom/Nginx/nginx.conf"
2. 执行 `nginx -c /Users/even/Documents/connect/dom/Nginx/nginx.conf`
> 报错：
```sh
chenxueweideMacBook-Pro:nginx even$ nginx -c /Users/even/Documents/connect/dom/Nginx/nginx.conf
nginx: [emerg] open() "/Users/even/Documents/connect/dom/Nginx/mime.types" failed (2: No such file or directory) in /Users/even/Documents/connect/dom/Nginx/nginx.conf:17
```
- nginx.conf配置文件中 `include  mime.types;`
> include  mime.types; => 作用：支持nginx识别哪些文件类型


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