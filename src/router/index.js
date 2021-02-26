import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)
//首先要保存原型上边的方法
const originPush = VueRouter.prototype.push;
//重写原型上的方法
VueRouter.prototype.push = function (location, onComplete, onAbort) {
    
    if (onComplete || onAbort) {
        
        originPush.call(this, location, onComplete, onAbort);
    } else {
        
        return originPush.call(this, location).catch(() => {
            
            return new Promise(() => { })
           
        })
    }
}
const router = new VueRouter({
    routes,
    scrollBehavior() {
        return {x:0,y:0}
    }
})
router.beforeEach((to, from, next) => {
    if (to.fullPath == "/responal") {
        let user = JSON.parse(localStorage.getItem('user'))
        if (!user) {
            next('/personal')
        }
    } else {
        next()
    }
    next()
    
})
export default router