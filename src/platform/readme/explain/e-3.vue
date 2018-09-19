<template>
    <div class="sys-page">
        <app-title title="系统权限分两种"></app-title>
        <app-section title="一、页面访问权限">
            <p>1、功能在 <code>src/router/index.js</code> 的 <code>router.beforeEach()</code>函数的路由守护中实现的</p>
            <p>2、每次路由跳转前都会和菜单树进行比较,如果条件不满足,跳转error页面</p>
        </app-section>
        <app-section title="二、页面内按钮的操作权限">
            <p>1、菜单树中配置 <code> permission: ['edit']</code></p>
            <p>2、功能在 <code>src/router/index.js</code> 的 <code>initRoute()</code>函数中对菜单树和页面路由对象中配置的permission进行了处理</p>
            <p>3、最后页面加载时只需配置 需要加操作权限的地方 加上<code>v-hasPermission="'edit'"</code>即可,编辑dom就显示了</p>
            <p>4、dom是否构建由<code> src/platform/plugins/hasPermission/index.js</code>自定义指令完成的</p>
        </app-section>
        <div class="page-content">
            <app-section title="函数说明">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="name" label="指令名">
                    </el-table-column>
                    <el-table-column prop="detail" label="描述">
                    </el-table-column>
                    <el-table-column prop="type" label="参数类型">
                    </el-table-column>
                </el-table>
            </app-section>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'comPermission',
        data() {
            return {
                tableData: [
                    {
                        name: 'v-hasPermission',
                        detail: '根据传入值鉴别权限，并返回鉴别结果',
                        type: 'String'
                    }
                ]
            }
        }
    }
</script>
