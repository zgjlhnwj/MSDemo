const Layout = () => import(/* webpackChunkName: 'index' */ 'sysPlatform/layout')

const demoRoute = [
    {
        path: '/readme',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: 'readme' */ 'sysPlatform/readme')
            },
            {
                path: 'explain/e-0',
                    component: () => import(/* webpackChunkName: 'readme' */ 'sysPlatform/readme/explain/e-0.vue')
            },
            {
                path: 'explain/e-2',
                component: () => import(/* webpackChunkName: 'readme' */ 'sysPlatform/readme/explain/e-2.vue')
            },
            {
                path: 'explain/e-3',
                component: () => import(/* webpackChunkName: 'readme' */ 'sysPlatform/readme/explain/e-3.vue')
            },
            {
                path: 'explain/e-4',
                component: () => import(/* webpackChunkName: 'readme' */ 'sysPlatform/readme/explain/e-4.vue')
            },
            {
                path: 'explain/e-5',
                    component: () => import(/* webpackChunkName: 'readme' */ 'sysPlatform/readme/explain/e-5.vue')
            },
            {
                path: 'explain/e-6',
                    component: () => import(/* webpackChunkName: 'readme' */ 'sysPlatform/readme/explain/e-6.vue')
            },
            {
                path: 'explain/e-7',
                component: () => import(/* webpackChunkName: 'readme' */ 'sysPlatform/readme/explain/e-7.vue')
            },
            {
                path: 'explain/e-8',
                component: () => import(/* webpackChunkName: 'components' */ 'sysPlatform/readme/explain/e-8.vue')
            },
            {
                path: 'explain/e-9',
                    component: () => import(/* webpackChunkName: 'components' */ 'sysPlatform/readme/explain/e-9.vue')
            },
            {
                path: 'explain/e-10',
                    component: () => import(/* webpackChunkName: 'components' */ 'sysPlatform/readme/explain/e-10.vue')
            }
        ]
    },
    {
        path: '/demo',
        component: Layout,
        children: [
            {
                path: 'listPage',
                component: () => import (/* webpackChunkName: 'demo' */ 'sysDemo/listPage.vue')
            },
            {
                path: 'charts',
                component: () => import(/* webpackChunkName: 'demo' */ 'sysDemo/charts')
            },
            {
                path: 'map',
                component: () => import(/* webpackChunkName: 'demo' */ 'sysDemo/map')
            }
        ]
    },
    {
        path: '/theme',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: 'themeChange' */ 'sysPlatform/themeChange')
            }
        ]
    },
]

export default demoRoute
