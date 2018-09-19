import demolist from './demoData'
import sysList from './sysData'
import orderList from './orderData'
import activityList from './activityData'

var data = [].concat(demolist, sysList, orderList, activityList)

console.log('list',data)

export default [{
    path: '/user/navlist',
    data: data
}]
