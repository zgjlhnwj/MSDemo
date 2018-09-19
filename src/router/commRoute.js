const Layout = () => import(/* webpackChunkName: 'index' */ 'sysPlatform/layout')

const bussRoute = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/error',
        component: () => import(/* webpackChunkName: 'error' */ 'sysPlatform/error'),
        children: [
            {
                path: '401',
                component: () => import(/* webpackChunkName: 'error' */ 'sysPlatform/error/401')
            },
            {
                path: '403',
                component: () => import(/* webpackChunkName: 'error' */ 'sysPlatform/error/403')
            },
            {
                path: '404',
                component: () => import(/* webpackChunkName: 'error' */ 'sysPlatform/error/404')
            },
            {
                path: '500',
                component: () => import(/* webpackChunkName: 'error' */ 'sysPlatform/error/500')
            }
        ]
    },
    {
        path: '/login',
        component: () => import(/* webpackChunkName: 'login' */ 'sysPage/login')
    },
    {
        path: '/home',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: 'home' */ 'sysPage/home'),
            }
        ]
    },
    {
        path: '*',
        redirect: 'sysPlatform/error/404'
    }
]

export default bussRoute
