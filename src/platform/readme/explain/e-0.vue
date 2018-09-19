<template>
    <div class="sys-page" v-once>
        <app-title title="一、platform 平台级目录"></app-title>
        <div class="page-content">
            <app-notes>
                <app-section title="SRC 代码目录结构">
                    <div class="sys-article">
                        <pre v-pre class="sys-pre">
                            <code>
    --platform
        --components  // 平台级组件目录,作为全局使用,注册到Vue对象上的
        --layout // 平台级布局组件目录
                        </code>
                        </pre>
                    </div>
                </app-section>
                <p>1、components部分组件为本系统自行开发的组件（包括对第三方组件的封装），不包括纯粹的第三方组件。系统组件仅为通用的大众化组件</p>
                <p>2、layout部分组件为本系统提供了整体的布局能力</p>
            </app-notes>
            <app-section title="layout布局使用方法">
                <div class="sys-article">
                    <p>1、菜单导航也就是 router 导航，需要在<code>src/router/index.js</code>中配置引用即可。如下所示</p>
                    <pre v-pre class="sys-pre">
                        <code>
    const Layout = () => import(/* webpackChunkName: 'index' */ '../platform/layout')
                        </code>
                    </pre>
                    <p>2、静态路由部分写法如下</p>
                    <pre v-pre class="sys-pre">
                        <code>
    {
        path: '/readme',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: 'readme' */ '../platform/readme')
            },
            {
                path: 'explain-1',
                    component: () => import(/* webpackChunkName: 'readme' */ '../platform/readme/explain-1.vue')
            }
        ]
    }
                        </code>
                    </pre>
                    <p>3、展示一下<code>src/platporm/layout/index.vue</code>代码内容,如下图</p>
                    <div class="layout-list">
                        <ul>
                            <li>
                                <img src="~sysStatic/images/layout.index.code.png" alt="" style="width: 800px">
                                <p>代码</p>
                            </li>
                        </ul>
                    </div>
                    <p>4、展示一下<code>src/platporm/layout/index.vue</code>代码布局结构如下图</p>
                    <div class="layout-list">
                        <ul>
                            <li>
                                <img src="~sysStatic/images/layout-top.png" alt="">
                                <p>上下布局</p>
                            </li>
                            <li>
                                <img src="~sysStatic/images/layout-left.png" alt="">
                                <p>左右布局</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <p>5、这里边需要注意的只要 <code>keep-alive</code>中的<code>router-view</code>这个就管理系统的主题显示区 </p>
            </app-section>
            <app-section title="全局组件使用方法">
                <div class="sys-article">
                    <p>1、系统组件默认使用全局注册，无需再次引入。如果需要按需引入，只需在<code>src/main.js</code>中配置引用即可。如下所示</p>
                    <pre v-pre class="sys-pre">
                        <code>
    import Vue from "vue"
    import VueRouter from 'vue-router'
    ...
-   // 引入全局组件
-   import './platform/components/install'
    ...
                        </code>
                    </pre>
                    <p>2、如果需要取消部分全局组件的应用，则修改<code>src/platform/components/install.js</code>的导入关系即可</p>
                </div>
            </app-section>

        </div>
    </div>
</template>
<script>
    export default {
        name: 'components'
    }
</script>
<style lang="scss" scoped>
    .layout-list{

    ul{
        padding: 5px;
        overflow: hidden;
    }
    ul li{
        float: left;
        background: #fff;
        margin-right: 20px;
        padding: 10px;
        box-shadow: 0 0 3px #ccc;

    img{
        width: 140px;
    }
    p{
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
    }
    }
    }
</style>
