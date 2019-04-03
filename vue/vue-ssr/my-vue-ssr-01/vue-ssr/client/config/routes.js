// 路由映射关系表
// import Todo from '../views/toto/todo.vue'
// import Login from '../views/login/login.vue'
export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app/:id',
    // props: true, // 会把id以props传到Todo组件中
    // props: {
    //   id: 456
    // },
    // props: (route) => ({ id: route.query.b }),
    path: '/app',
    name: 'app',
    // 这种加载异步组件的方法会报错，所以我们需要用到一个加载一步组件的插件
    // babel-plugin-syntax-dynamic-import -D 这是一个按需加载的插件
    // 安装完成这个插件之后需要在babelrc文件中加入"syntax-dynamic-import"
    component: () => import(/* webpackChunkName: "todo-view" */ '../views/toto/todo.vue'), // 加载异步组件，只有访问到的时候才加载
    // components: {
    //   // 同一个组件里边有多router-view可以用命名router-view
    //   default: Todo, // 没有名字的组件
    //   a: Login
    // },
    // meta保存路由的一些信息,有利于seo
    meta: {
      title: 'app',
      description: 'app组件'
    },
    beforeEnter (to, from, next) {
      next()
    }
  },
  {
    path: '/login',
    // name: 'login',
    // 使用路由懒加载时会ssr会报错'call' of undefined
    // 原因 当组件不是懒加载的时候正常，但是懒加载后就会报这个错误，server-bundle.js中调用浏览器document api来创建header中link标签
    // 问题应该是这里但是方法？？？？，所以需要在webpack里边配置allChunks: true
    component: () => import(/* webpackChunkName: "todo-view" */ '../views/login/login.vue')
    // components: {
    //   default: Login,
    //   a: Todo
    // }
  }
]
