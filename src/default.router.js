export default [
    // 首页
    {
        path: '/',
        component: () => import('./layouts/BasicLayout'),
        routes: [
            {path: '/', redirect: '/index'},
            {
                path: '/index',
                component: () => import('./pages/index/Index')
            },
        ],
    },
];
