import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)
//首先要保存原型上边的方法
const originPush = VueRouter.prototype.push;
//重写原型上的方法
VueRouter.prototype.push = function (location, onComplete, onAbort) {
    
    if (onComplete || onAbort) {
        //如果传递了回调函数,则让原来的push方法进行处理, 
        //用call方法改变this的指向,让router可以调用原来的方法
        //this就是路由器对象 $router
        originPush.call(this, location, onComplete, onAbort);
    } else {
        //如果第二次传递了相同的参数,那么会抛出失败的promise,所以要用catch处理错误
        return originPush.call(this, location).catch(() => {
            //这样后边的链式就会中断
            return new Promise(() => { })
            // console.log('catch error');
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