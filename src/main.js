
// 项目的启动入口

import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 加载全局样式文件
import './style/index.less'

Vue.config.productionTip = false

// 创建vue 跟实例
// 把router,配置到跟实例中
// 通过render 方法把app 根组件渲染到 #app 入口节点
new Vue({
  router,
  render: h => h(App)
  // el: #app  等价于$mount('app')
}).$mount('#app')
