export default [
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/Index.vue'),
    meta: {
      title: '欢迎来到...'
    }
  },
  {
    path: '/introduction',
    name: '简介',
    component: () => import('@/views/introduction/Introduction.vue'),
    meta: {
      title: '公司简介'
    }
  },
  {
    path: '/introduction',
    name: '详情',
    component: () => import('@/views/introduction/Introduction.vue'),
    children: [
      {
        path: '/detail',
        name: '公司详情',
        component: () => import('@/views/detail/Detail.vue'),
        meta: {
          title: '公司详情'
        }
      },
    ]
  },

  {
    path: '/not-found',
    name: '找不到页面',
    hidden: true,
    component: () => import('@/views/PageNotFound.vue'),
    meta: {
      title: '找不到页面'
    }
  },
  {
    path: '*',
    redirect: '/not-found'
  }
];
