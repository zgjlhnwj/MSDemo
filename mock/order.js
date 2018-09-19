export default{
    path: '/order/list',
    data: {
        head: [
            {
                key: 'orderId',
                name: '订单编号'
            },
            {
                key: 'receiver',
                name: '收件人'
            },
            {
                key: 'phone',
                name: '联系电话'
            },
            {
                key: 'address',
                name: '地址'
            },
            {
                key: 'email',
                name: '邮件'
            },
            {
                key: 'remark',
                name: '备注'
            }
        ],
        body: [
            {
                'orderId': '@natural(10000000, 99999999)',
                'receiver': '@cname',
                'phone': /^1[385][1-9]\d{8}/,
                'address': '@city(true) ',
                'email': '@email()',
                'remark': '@cparagraph(1)',
                operation: 'edit,delete'
            },
            {
                'orderId': '@natural(10000000, 99999999)',
                'receiver': '@cname',
                'phone': /^1[385][1-9]\d{8}/,
                'address': '@city(true) ',
                'email': '@email()',
                'remark': '@cparagraph(1)',
                operation: 'edit,delete'
            },
            {
                'orderId': '@natural(10000000, 99999999)',
                'receiver': '@cname',
                'phone': /^1[385][1-9]\d{8}/,
                'address': '@city(true) ',
                'email': '@email()',
                'remark': '@cparagraph(1)',
                operation: 'edit,delete'
            }
        ]
    }
}
