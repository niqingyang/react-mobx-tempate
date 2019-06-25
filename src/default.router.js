export default [
    {path: '/', redirect: '/index'}, // 重定向
    // 首页
    {
        path: '/index',
        component: () => import('./layouts/BasicLayout'), // 布局
        routes: [
            {
                path: '/index',
                component: () => import('./pages/index/Index')
            },
            {redirect: '/404'}
        ],
    },
    // todos 实例
    {
        path: '/todos',
        models: () => import('./pages/Todos/models/todox'),
        component: () => import('./pages/Todos')
    },
    {
        path: '/403',
        component: () => import('./pages/Exception/403'), // 403
    },
    {
        path: '/404',
        component: () => import('./pages/Exception/404'), // 404
    },
    {
        path: '/500',
        component: () => import('./pages/Exception/500'), // 500
    },
    {redirect: '/404'} // 无匹配则重定向到 404
];
