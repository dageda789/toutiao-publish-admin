import Vue from 'vue'
import VueRouter from 'vue-router'
// 在 VueCLI 创建的项目中 @ 表示src 目录
// 他是src 目录的路径别名
// 好处： 不受当前文件路径影响
import Login from '@/views/login/index.vue'

Vue.use(VueRouter)

// 路由配置表
const routes = [
  {
    path: '/login', name: 'login', component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
