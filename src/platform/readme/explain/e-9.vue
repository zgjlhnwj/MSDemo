<template>
    <div class="sys-page" v-once>
        <app-title title="一、router 平台级目录"></app-title>
        <div class="page-content">
            <app-notes>
                <app-section title="router 代码目录结构说明">
                    <div class="sys-article">
                        <pre v-pre class="sys-pre">
                            <code>
    --router
        --map  // 路由分层目录
            --bussRoute.js // 业务路由配置
            --demoRoute.js // 实例路由配置文件
        --commRoute.js // 平台级别路由配置,如登录、首页、系统统一的404、405、500等错误页面
        --routerWhiteList.js // 全局路由守护,使用的白名单配置,如果系统某些页面不需要权限控制,可以维护在白名单下
        --index.js // 路由引用入口文件
                        </code>
                        </pre>
                    </div>
                </app-section>
                <p>1、业务开发路径配置只需要维护 bussRoute.js 文件</p>
                <p>2、不需要权限控制的页面,只需要维护 routerWhiteList.js文件</p>
            </app-notes>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'components'
    }
</script>
