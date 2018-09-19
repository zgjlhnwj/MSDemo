import Mock from 'mockjs'
import navlist from './navlist/index'
import login from './login'
import echarts from './echarts'
import table from './table'
import groupList from './groupList'
import getToken from './getToken'
import orderList from './order'

let data = [].concat(navlist, login, echarts, table, groupList, getToken, orderList)

data.forEach(function(res){
    Mock.mock(res.path, res.data)
})

export default Mock
