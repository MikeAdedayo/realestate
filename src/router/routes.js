
const routes = [
  {
    path: '/',
    component: () => import('layouts/loginlayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') },
      { path: 'complains', component: () => import('pages/complains.vue') },
      { path: 'notice', component: () => import('pages/notice.vue') },
      { path: 'payment', component: () => import('pages/payment.vue') },
      { path: 'profile', component: () => import('pages/profile.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
