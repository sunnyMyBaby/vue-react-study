// 路由映射关系表
// import Todo from '../views/toto/todo.vue'
// import Login from '../views/login/login.vue'
export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    name: 'app',
    component: () => import('../views/toto/todo.vue'), // 加载异步组件，只有访问到的时候才加载
    meta: {
      title: 'app',
      description: 'app组件'
    },
    beforeEnter (to, from, next) {
      console.log('----------')
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  }
]
