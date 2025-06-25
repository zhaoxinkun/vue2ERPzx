import Vue from 'vue'
import App from './App.vue'

// 使用element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


// 使用scss,放在了vue.config.js里了
import "./style/index.scss"

// 注册路由
import router from './router'

// 禁止生产提示
Vue.config.productionTip = false


new Vue({
    router,
    render: function (h) {
        return h(App)
    },
}).$mount('#app')
