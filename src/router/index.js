import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Main from '../components/Main.vue'
import Contact from '../components/Contact.vue'
import Login from '../components/Login.vue'
import Cart from '../components/Cart.vue'
import Checkout from '../components/Checkout.vue';
import Logout from '../components/Logout.vue';
import Home from '../components/Home.vue';
import Productdetails from '../components/Productdetails.vue';
import Profile from '../components/Profile.vue';
import Profileview from '../components/Profileview.vue';
import Changepassword from '../components/Changepassword.vue';
import Cms from '../components/Cms.vue'
import Wishlist from '../components/Wishlist.vue'
import Order from '../components/Order.vue'
import Paypal from '../components/Paypal.vue'
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path:'/cms/:id',
            name:'Cms',
            component:Cms
        },
        {
            path: '/product/:id',
            name: 'Productdetails',
            component: Productdetails,
            
        },
        {
            path: '/home/:id',
            name: 'Home',
            component: Home
        },
        {
            path: '/order',
            name: 'Order',
            component: Order
        },
        {
            path: '/wish',
            name: 'Wishlist',
            component: Wishlist
        },
        {
            path: '/editprofile',
            name: 'Profileview',
            component: Profileview
        },
        {
            path:'/changepass',
            name:'Changepassword',
            component:Changepassword
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }, {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/checkout',
            name: 'Checkout',
            component: Checkout
        },
       
        {
            path: '/logout',
            name: 'Logout',
            component: Logout
        },
        {
            path: '/paypal',
            name: 'Paypal',
            component: Paypal
        }
    ],

})