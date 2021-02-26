import Home from '../page/Home'
import Classify from '../page/classify'
import DeseverBuy from '../page/deseverBuy'
import Search from '../components/Search'
const routes = [
    { path: '/home', component: Home, name: 'home' },
    { path: '/classify', component: Classify, name: 'classify' },
    { path: '/deserveBuy', component: DeseverBuy, name: 'deserveBuy' },
    { path: '/search', component: Search, name: 'search' },
    { path: '/', redirect: '/home' }
]
export default routes