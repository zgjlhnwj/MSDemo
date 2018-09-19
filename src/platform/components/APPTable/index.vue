<template>
    <!-- 表格体 -->
    <table-mixin pagination paginationAlign="center">
        <el-table highlight-current-row
                  row-key="id"
                  :expand-row-keys="entexpands"
                  :data="rowData"
                  :loading="tableLoading"
                  @row-click="rowExpand"
                  @current-change="handleCurrentChange"
                  @selection-change="handleSelectionChange"
                  >
            <el-table-column type="expand" v-if="isExpandFrom">
                <template slot-scope="scope">
                    <slot v-bind:row = "scope.row" name="expand-sort"></slot>
                </template>
            </el-table-column>
            <el-table-column  fixed type="selection" width="55"></el-table-column>
            <el-table-column type="index" label="序号" width="64" align="center"></el-table-column>
            <el-table-column v-for="(item,index) in colTags" :prop="item.key" :label="item.name" :key="index"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <slot v-bind:row = "scope.row" v-bind:rowNum="scope.$index" name="opt-sort"></slot>
                </template>
            </el-table-column>
        </el-table>

    </table-mixin>

</template>

<script>
    export default {
        name: 'AppTable',
        props: {
            'colTags': {
                type: Array,
                default: []
            },
            'rowData': {
                type: Array,
                default: []
            },
            'tableLoading': {
                type: Boolean,
                default: false
            },
            'isExpandFrom': {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                table: {
                    colTags: [],
                    rowData: [],
                    currentRow: '',
                    multipleSelection:[]
                },
                entexpands: []
            }
        },
        methods: {
            handleCurrentChange(val) {
                //console.log('选中当前行', val);
                this.table.currentRow = val;

            },
            handleSelectionChange(val) {
                this.table.multipleSelection = val;
                console.log('多选内容', this.table.multipleSelection)
            },
            rowExpand(row) {
                Array.prototype.remove = function (val) {
                    let index = this.indexOf(val);
                    if (index > -1) {
                        this.splice(index, 1);
                    }
                };
                if (this.entexpands.indexOf(row.id) < 0) {
                    this.entexpands= [];
                    row.id = this.generateUUID();
                    this.entexpands.push(row.id);
                } else {
                    this.entexpands.remove(row.id);
                }
            },
            generateUUID() {
                var d = new Date().getTime();
                var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                    console.log('c=' + c)
                    var r = (d + Math.random()*16)%16 | 0;
                    d = Math.floor(d/16);
                    return (c=='x' ? r : (r&0x3|0x8)).toString(16);
                });
                console.log('uuid = ' + uuid)
                return uuid;
            },
        }
    }
</script>
<style>
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>

