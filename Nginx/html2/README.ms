
## ngixn学习


- try_files作用：`尝试找到请求的文件` 通常用于单页应用（SPA）的场景中。
  1.按照顺序依次尝试每个路径，直到找到一个存在的文件或目录为止。
  2.try_files会与root组合进行查找文件，如果root未设置，则会查找当前目录。
  3.try_files与alias组合式，不会跟alias拼接和替换，而是直接查找文件。
  4. 如果请求文件不存在，交给前端路由接管。
- index.html中 `href="/"` 其中的`/`像对于`nginx中的root`


- 项目一
前端打包 base: '/project21/'
打包文件夹：dist21


