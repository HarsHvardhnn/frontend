import {createRouter ,createWebHistory} from 'vue-router';
import HelloWorld from '../components/HelloWorld'; 
import AuthPage from '../components/LoginSignup.vue'
const routes = [
    {
        path:'/',
        name:"Hello",
        component:HelloWorld
    },
    {
        path:'/Home',
        name:'auth',
        component:AuthPage
    }
]

const router = createRouter(
    { history:createWebHistory(),
        routes});
export default router;