<template>
    <div class="sys-page">
        <app-title title="用户管理"></app-title>
        <!-- 搜索 -->
        <app-search>
            <el-form :inline="true" :model="searchForm">
                <el-form-item>
                    <el-date-picker v-model="searchForm.time" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="searchForm.type" placeholder="下拉选择">
                        <el-option label="选项一" value="选项一"></el-option>
                        <el-option label="选项二" value="选项二"></el-option>
                        <el-option label="选项三" value="选项三"></el-option>
                        <el-option label="选项四" value="选项四"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="searchForm.text" placeholder="请输入查询条件"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search">查询</el-button>
                </el-form-item>
            </el-form>
        </app-search>
        <!-- 工具条 -->
        <app-toolbar>
            <el-button type="primary">新增</el-button>
            <el-button type="primary" v-hasPermission="'edit'">修改</el-button>
        </app-toolbar>
        <!-- 表格体 -->
        <table-mixin pagination paginationAlign="center">
            <el-table v-loading="tableData.loading" :data="tableData.body" border :default-sort="{prop: 'date', order: 'descending'}">
                <el-table-column type="index" label="序号" width="64" align="center"></el-table-column>
                <el-table-column v-for="(item,index) in tableData.head" :prop="item.key" :label="item.name" sortable :key="index"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button v-if="scope.row.operation.indexOf('edit') >= 0" type="text" size="small">查看</el-button>
                        <el-button v-if="scope.row.operation.indexOf('delete') >= 0" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </table-mixin>
    </div>
</template>

<script>
    export default {
        name: 'sysManagement',
        data() {
            return {
                searchForm: {
                    time: '',
                    type: '',
                    text: ''
                },
                tableData: {
                    loading: true,
                    head: [],
                    body: []
                }
            }
        },
        mounted() {
            //this.getTableData()

            var url = 'https://easy-mock.com/mock/5a2759308ef919728f8cbd31/agency/api/v1/department/update'

            this.$axios.post(url, {
                name: 'zhugj'
            }).then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

            this.$axios({
                url: 'https://easy-mock.com/mock/5b61853ea2424b1c3be70bc6/sys/navlist',
                methods: 'post',
                data: {}
            }).then((res) => {
                console.error('用户树', res)
            })
        },
        methods: {
            // 获取table数据
            getTableData() {
                let url ='https://easy-mock.com/mock/5b61853ea2424b1c3be70bc6/sys/navlist';
                this.$axios.post(url, {
                    name: 'zhugj'
                }).then(res => {
                    this.tableData.loading = false
                    this.tableData.head = res.head
                    this.tableData.body = res.body
                })
            },
            search(){
                console.log(`欲提交的数据   日期:${this.searchForm.time}  下拉条件:${this.searchForm.type}  文本: ${this.searchForm.text}`)
            }
        }
    }
</script>
