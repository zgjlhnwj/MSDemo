const Layout = () => import(/* webpackChunkName: 'index' */ 'sysPlatform/layout')

const bussRoute = [
    {
        path: '/sysManagement',
        component: Layout,
        children: [
            {
                path: 'user',
                component: () => import(/* webpackChunkName: 'sysManagement' */ 'sysPage/systemManagement/user')
            },
            {
                path: 'order',
                    component: () => import(/* webpackChunkName: 'sysManagement' */ 'sysPage/systemManagement/order')
            }
        ]
    }
]

export default bussRoute
