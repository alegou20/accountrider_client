
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile.vue'
import Register from '@/views/Register.vue'
import About from '@/views/About.vue'
import OwnerCredentials from "../views/OwnerCredentials";
import Bills from "../views/Bills";
import PersonalData from "../views/PersonalData";
import Vehicles from "../views/Vehicles";
import Paypal from "../views/Paypal";

export default[
    {
        path: '/',
        name: 'login',
        component: Login,
    },
    {
        path: '/paypal',
        name: 'paypal',
        component: Paypal,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/owner',
        name: 'owner',
        component: OwnerCredentials,
    },
    {
        path: '/vehicle',
        name: 'vehicle',
        component: Vehicles,
    },
    {
        path: '/personaldata',
        name: 'personaldata',
        component: PersonalData,
    },
    {
        path: '/bills',
        name: 'bills',
        component: Bills,
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
]
