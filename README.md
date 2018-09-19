# Vue + ElementUI 后台管理系统框架

这个是我个人感觉比较好的OA 架构 

代码参考https://github.com/harsima/vue-backend 

这里的代码是我个人二次加工和对代码结构整过后的, 对代码的使用也有比较多的说明

star 请给 harsima 毕竟从0~1是harsima奉献的,我这里只是针对项目进行了二次处理,技术栈基本没变动

## **项目使用**
``` bash
# 安装项目依赖
npm install

# 开启本地服务，默认为localhost:7001
npm run dev

# 项目打包，构建生产环境
npm run build

# 打包过程中想查看具体报告则可以通过以下命令实现
npm run build --report
```

## Nginx简单部署配置

将打包后的文件放到Nginx安装目录中的html文件夹内，然后对Nginx进行简单配置即可。

```
...
# 以上保持默认配置即可

server {
    listen       8000;
    server_name  localhost;
    # 项目文件目录
    root   html/vue-backend;
    index  index.html index.htm;

    location / {
        # vue-router使用history模式下的必须配置
        try_files $uri $uri/ /index.html;
        index index.html;
    }
}
```
