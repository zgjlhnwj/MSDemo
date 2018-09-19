<template>
    <div class="sys-page" v-once>
        <app-title title="介绍"></app-title>
        <div class="page-content">
            <app-notes>
                该部分组件为本系统自行开发的组件（包括对第三方组件的封装），不包括纯粹的第三方组件。系统组件仅为通用的大众化组件，需注意和项目组件进行区分。全部系统组件文件位于 src/components/platformCom
                <app-section title="SRC 代码目录结构">
                    <div class="sys-article">
                        <pre v-pre class="sys-pre">
                            <code>
    --src
        --assets // 静态资源目录,比如图片、字体等
        --demo // 实例代码页面目录
        --page // 业务代码页面目录
        --platform // 平台代码目录
        --plugins // 插件目录
        --router // 路由目录
        --store // vuex 数据管理目录
        --util // 工具库目录
        --main.js // 入口JS文件
        --index.vue // 入口模板文件
        --index.html // 打包模板文件
                        </code>
                        </pre>
                    </div>
                </app-section>
            </app-notes>
            <app-section title="分类说明">
                <div class="sys-article">
                    <p>系统组件主要分为三大类</p>
                    <p>功能类：以实现具体功能为主，包括对第三方组件的二次封装类，尽量不要修改。</p>
                    <p>布局类：以常用布局为主，包括标题、间距、搜索之类的纯布局组件，可按实际项目要求修改</p>
                    <p>辅助类：文档辅助说明及其他组件部分，可能不会应用在正式产品中，该类别可以不引入到正式产品中</p>
                </div>
            </app-section>
        </div>
    </div>
</template>
<script>
export default {
    name: 'readme'
}
</script>
