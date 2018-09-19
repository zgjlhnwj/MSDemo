<template>
    <div class="sys-page" v-once>
        <app-title title="前言"></app-title>
        <div class="page-content">
            <app-notes>
                <p>本项目以VueJS作为核心，ElementUI为UI框架，制作的单页面管理系统且实现完全前后端分离，前端高度组件化、模块化。</p>
                <p>本项目使用了VueJS全家桶（vuejs + vuex + vue-router）及webpack使用方法，ES6语法。</p>
            </app-notes>
            <app-section title="为什么选用VueJS？">
                <div class="sys-article">
                    <p>VueJS是当前流行的MVVM框架之一，其着重解决VM层，拥有轻量级、易上手、文档全、性能高的优点。 VueJS社区正蓬勃发展，是2016年发展最火速的前端框架。 因其轻量的关系，可以让它完全融入到之前的任何项目中，但个人仍然推荐使用它的单文件组件进行开发。 VueJS提供了一套完整的前端组件化、模块化编程方案，让前端组件化变的无比轻松。 结合Webpack的代码分割/合并、压缩、打包、热重载等功能更能实现一定程度的前端开发工程化。</p>
                    <p><strong>学习难度</strong>：Angular > React > Vue</p>
                    <p>Angular学习曲线即为陡峭已经成为不争的事实。React的纯JS编程写模板则过于复杂，而且
                        <strong>没有中文文档</strong>。Vue使用一种更为简练更为直白的模板语法并且拥有
                        <strong>十分完善的中文文档</strong>
                    </p>
                    <p><strong>框架性能</strong>：Angular < React < Vue</p>
                    <p><strong>未来发展</strong>：Angular < React = Vue</p>
                </div>
            </app-section>
            <app-section title="当前框架实现的功能">
                <div class="sys-article">
                    <ol>
                        <li>登录/注销(保留)</li>
                        <li>权限控制(保留)</li>
                        <li>自动登录(保留)</li>
                        <li>错误页面(保留)</li>
                        <li>表格组件(保留)</li>
                        <li>echart(保留)</li>
                        <li>高德地图(保留)</li>
                    </ol>
                </div>
            </app-section>
            <app-section title="框架涉及技术栈">
                <div class="sys-article">
                    <p><strong>你必须了解以下技术栈，否则无法基于该框架编写程序</strong></p>
                    <p>VueJS： <a target="_blank" href="http://cn.vuejs.org/">http://cn.vuejs.org/</a>&nbsp;&nbsp;&nbsp;——核心框架，必须掌握</p>
                    <p>VueJS-API： <a target="_blank" href="http://doc.vue-js.com/v2/api/">http://doc.vue-js.com/v2/api/</a>心框架，API</p>
                    <p>Vuex： <a target="_blank" href="https://vuex.vuejs.org/zh-cn/">https://vuex.vuejs.org/zh-cn/</a>&nbsp;&nbsp;&nbsp;——核心框架，必须掌握</p>
                    <p>ElementUI： <a target="_blank" href="http://element-cn.eleme.io/#/zh-CN">http://element-cn.eleme.io/#/zh-CN</a>&nbsp;&nbsp;&nbsp;——核心框架，必须掌握</p>
                    <p>Axios： <a target="_blank" href="https://github.com/mzabriskie/axios">https://github.com/mzabriskie/axios</a>&nbsp;&nbsp;&nbsp;——优秀的ajax库</p>
                </div>
                <div class="sys-article">
                    <p><strong>推荐熟知并会使用以下插件或技术。这些技术在实际开发中会遇到，请掌握</strong></p>
                    <p>ES6： <a target="_blank" href="http://es6.ruanyifeng.com/">http://es6.ruanyifeng.com/</a>&nbsp;&nbsp;&nbsp;——ES第6版本，实现了众多新功能。本框架引入babel后不用担心兼容性问题。</p>
                    <p>Lodash： <a target="_blank" href="https://lodash.com/docs">https://lodash.com/docs</a>&nbsp;&nbsp;&nbsp;——js工具库，增加众多对数组、对象、字符串的操作。比underscore要好</p>
                    <p>echarts3： <a target="_blank" href="http://echarts.baidu.com/">http://echarts.baidu.com/</a>&nbsp;&nbsp;&nbsp;——图表插件</p>
                    <p>高德地图： <a target="_blank" href="http://lbs.amap.com/api/javascript-api/summary/">http://lbs.amap.com/api/javascript-api/summary/</a>&nbsp;&nbsp;&nbsp;——地图插件</p>
                </div>
                <div class="sys-article">
                    <p><strong>建议了解以下技术。这些技术有的直接封入框架，有的因工作位置原因可能永远都用不上，但足够了解他们可以让你加深对该框架的理解。</strong></p>
                    <p>Vue-router： <a target="_blank" href="https://router.vuejs.org/zh-cn/">https://router.vuejs.org/zh-cn/</a>&nbsp;&nbsp;&nbsp;——单页面应用必备。实现页面路由功能，通过监听url的变更而加载不同的页面</p>
                    <p>Webpack中文： <a target="_blank" href="https://doc.webpack-china.org/">https://doc.webpack-china.org/</a>&nbsp;&nbsp;&nbsp;——最流行的打包工具。集合并、分割、打包等多功能于一身</p>
                    <p>MockJS： <a target="_blank" href="http://mockjs.com">http://mockjs.com</a>&nbsp;&nbsp;&nbsp;——截获ajax，并返回模拟数据。在后台接口未完成时先进行开发</p>
                </div>
                <div class="sys-article">
                    <p><strong>资料参考网站。</strong></p>
                    <p>Can I Use： <a target="_blank" href="http://caniuse.com/">http://caniuse.com/</a>&nbsp;&nbsp;&nbsp;——Web技术兼容性查找</p>
                    <p>MDN： <a target="_blank" href="https://developer.mozilla.org/zh-CN/">https://developer.mozilla.org/zh-CN/</a>&nbsp;&nbsp;&nbsp;——Mozilla基金会建立的Web技术网站</p>
                    <p>NodeJS： <a target="_blank" href="http://nodejs.cn/api/">http://nodejs.cn/api/</a>&nbsp;&nbsp;&nbsp;——运行于服务器端的JS引擎。想实现某些类似Webpack或者Gulp功能时需要学习一下。做服务端必学</p>
                </div>
            </app-section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home'
}
</script>
