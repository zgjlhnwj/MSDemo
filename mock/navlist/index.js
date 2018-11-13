import demolist from './demoData'
import sysList from './sysData'
import orderList from './orderData'

var data = [].concat(demolist, sysList, orderList)

console.log('list',data)

export default [{
    path: '/user/navlist',
    data: data
}]
