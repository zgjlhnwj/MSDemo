<template>
    <div class="sys-page">
        <app-title :title="$t('orderManage')"></app-title>
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
                    <el-form-item label="地址">
                        <span>{{ props.row.address }}</span>
                    </el-form-item>
                    <el-form-item label="邮件">
                        <span>{{ props.row.email }}</span>
                    </el-form-item>
                    <el-form-item label="备注">
                        <span>{{ props.row.remark }}</span>
                    </el-form-item>
                </el-form>
            </div>
            <div slot="opt-sort" slot-scope="props">
                <el-button type="text" size="small" v-hasPermission="'view'" v-on:click = "view(props.rowNum)">{{$t('look')}}</el-button>
                <el-button type="text" size="small" v-hasPermission="'del'">{{$t('modify')}}</el-button>
                <el-button type="text" size="small" v-hasPermission="'edit'">{{$t('delete')}}</el-button>
            </div>
        </app-table>
        <el-table
            :data="table.rowData"
            style="width: 100%;margin:50px 0;">
            <el-table-column prop="orderId" :label="$t('orderNo')"></el-table-column>
            <el-table-column prop="receiver" :label="$t('recievePerson')"></el-table-column>
            <el-table-column prop="phone" :label="$t('phoneNumber')"></el-table-column>
            <el-table-column prop="address" :label="$t('address')"></el-table-column>
            <el-table-column prop="email" :label="$t('email')"></el-table-column>
            <el-table-column prop="remark" :label="$t('remark')"></el-table-column>
            <el-table-column
                fixed="right"
                :label="$t('operation')"
                width="100">
                <template slot-scope="scope">
                    <el-button type="text" size="small" v-hasPermission="'view'" v-on:click = "view(props.rowNum)">{{$t('look')}}</el-button>
                    <el-button type="text" size="small" v-hasPermission="'del'">{{$t('modify')}}</el-button>
                    <el-button type="text" size="small" v-hasPermission="'edit'">{{$t('delete')}}</el-button>
                </template>
                </el-table-column>
        </el-table>
        <el-row>
            <el-col :span="6">
                <el-select v-model="langNowValue" placeholder="请选择语言" @change="changeLanguage">
                    <el-option
                    v-for="item in languageOpt"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="6">当前语言：{{$t('language')}}</el-col>
        </el-row>
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
                langNowValue:'',
                languageOpt:[{
                    label:'中文',
                    value:'zh'
                },{
                    label:'英文',
                    value:'en'
                }],
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
                    // var tempArr = res.head
                    // tempArr.forEach(element => {
                    //     element.name = "$t('"+ element.name +"')" 
                    //     console.log(element)
                    // });
                    // this.table.colData = tempArr
                    // console.log('tempArr', tempArr)
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
            },
            //切换语言
            changeLanguage(val){
                //this.$i18n.locale = val  //这是常规写法，但是已经把i18n挂为全局变量,所以可以使用如下写法
                i18n.locale = val
            }
        }
    }
</script>
