<template>
    <div class="sys-page">
        <app-title title="订单管理"></app-title>
        <app-table
            :table-loading="table.loading"
            :is-expand-from="table.isExpand"
            :col-tags="table.colData"
            :row-data="table.rowData"
        >
            <div slot="expand-sort" slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="订单编号">
                        <span>{{ props.row.orderId }}</span>
                    </el-form-item>
                    <el-form-item label="收件人">
                        <span>{{ props.row.receiver }}</span>
                    </el-form-item>
                    <el-form-item label="联系电话">
                        <span>{{ props.row.phone }}</span>
                    </el-form-item>
                    <el-form-item label="备注">
                        <span>{{ props.row.remark }}</span>
                    </el-form-item>
                </el-form>
            </div>
            <div slot="opt-sort" slot-scope="props">
                <el-button type="text" size="small" v-hasPermission="'view'" v-on:click = "view(props.rowNum)">查看</el-button>
                <el-button type="text" size="small" v-hasPermission="'del'">删除</el-button>
                <el-button type="text" size="small" v-hasPermission="'edit'">修改</el-button>
            </div>
        </app-table>
    </div>
</template>

<script>
    import AppTable from 'sysPlatform/components/APPTable'
    export default {
        name: 'sysManagement',
        components: {
            'app-table': AppTable
        },
        data() {
            return {
                table: {
                    isExpand: true,
                    loading: true,
                    colData: [],
                    rowData: []
                }
            }
        },
        mounted() {
            this.getTableData()
        },
        methods: {
            // 获取table数据
            getTableData() {
                this.$axios({
                    url: '/order/list',
                    type: 'post',
                    data: {}
                }).then(res => {
                    this.table.loading = false
                    this.table.colData = res.head
                    this.table.rowData = res.body
                    console.log('orderList',this.table.rowData)
                }).catch(err => {
                    this.$message.error(`获取数据失败，失败码：${err.response.status}`)
                })
            },
            search(){
                console.log(`欲提交的数据   日期:${this.searchForm.time}  下拉条件:${this.searchForm.type}  文本: ${this.searchForm.text}`)
            },
            view(rowNum) {
                console.log(
                    '当前查看行号为:' + rowNum, this.table.rowData[rowNum]
                )

            }
        }
    }
</script>
