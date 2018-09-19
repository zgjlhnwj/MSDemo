<template>
    <div class="sys-page" v-once>
        <app-title title="MockJS 数据模拟目录说明"></app-title>
        <p>备注: 首先要是一下 mock 目录本身并不在 SRC 目录下</p>
        <div class="page-content">
            <app-notes>
                <app-section title="mock 代码目录结构说明">
                    <div class="sys-article">
                        <pre v-pre class="sys-pre">
                            <code>
    --router
        --navlist  // 菜单树目录
            --demoData.js // 实例类页面菜单树配置文件
            --demoRoute.js // 业务类页面菜单树配置文件
            --index.js // 菜单树模拟数据集成配置文件
        --index.js // mock模拟接口数据统一入口配置文件
        --其他模拟数据配置文件
                        </code>
                        </pre>
                    </div>
                </app-section>
            </app-notes>
            <app-section title="使用方法">
                <div class="sys-article">
                    <p>1、需要在<code>src/main.js</code>中引用mock模拟接口数据统一入口配置文件 如下所示</p>
                    <pre v-pre class="sys-pre">
                        <code>
    import '../mock/index.js'
                        </code>
                    </pre>
                    <p>2、需要请数据的位置,直接配置URL为mock文件导出对象的 path</p>
                    <p>3、展示一段mock模拟的数据文件,文件目录为 mock/navlist 数据作为菜单树和权限数据使用</p>
                    <pre v-pre class="sys-pre">
                        <code>
    import demolist from './demoData'
    import sysList from './sysData'

    var data = [].concat(demolist, sysList)

    export default [{
        path: '/user/navlist',
        data: data
    }]
                        </code>
                    </pre>
                    <p>4、最后再呈现一段调用的实例</p>
                    <pre v-pre class="sys-pre">
                        <code>
    import axios from '@/util/ajax'

    axios({
        url: '/user/navlist',
        methods: 'post',
        data: {}
    }).then((res) => {
        console.log('菜单树', res)
        resolve(res)
    })
                        </code>
                    </pre>
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
