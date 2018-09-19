var data = [
    {
        path: '/home',
        name: '首页'
    },
    {
        name: '系统框架说明',
        child: [
            {
                name: '代码简介',
                child: [
                    {
                        path: '/readme',
                        name: '目录规划介绍'
                    },
                    {
                        path: '/readme/explain/e-0',
                        name: 'platform'
                    },
                    {
                        path: '/readme/explain/e-9',
                        name: 'router'
                    },
                    {
                        path: '/readme/explain/e-10',
                        name: 'mock'
                    }
                ]
            },
            {
                name: '功能集',
                child: [
                    {
                        path: '/readme/explain/e-3',
                        name: '权限控制'
                    },
                    {
                        path: '/readme/explain/e-4',
                        name: '表格分页'
                    }
                ]
            },
            {
                name: '页面布局集',
                child: [
                    {
                        path: '/readme/explain/e-5',
                        name: '页面标题'
                    },
                    {
                        path: '/readme/explain/e-6',
                        name: '子区域'
                    },
                    {
                        path: '/readme/explain/e-7',
                        name: '搜索条'
                    },
                    {
                        path: '/readme/explain/e-8',
                        name: '工具条'
                    }
                ]
            },
            {
                name: '辅助类',
                child: [
                    {
                        path: '/readme/explain/e-2',
                        name: '引用说明'
                    }
                ]
            },
            {
                name: '完整示例',
                child: [
                    {
                        path: '/demo/listPage',
                        name: '列表页面',
                        permission: ['edit']
                    },
                    {
                        path: '/demo/charts',
                        name: '图表页面'
                    },
                    {
                        path: '/demo/map',
                        name: '地图页面'
                    }
                ]
            },
            {
                path: '/theme',
                name: '主题切换'
            }
        ]
    }
]

export default data
