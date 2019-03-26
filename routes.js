import Home from './component/Home';
import About from './component/About';

export default {
    mode: 'history',

    routes: [
        {
            path: '/',
            component: Home
        },

        {
            path: '/about',
            component: About
        },
    ]
};
