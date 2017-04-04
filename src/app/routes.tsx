import VueRouter from 'vue-router';
import AuthRoute from "./routes/auth.route";
import DashboardRoute from "./routes/dashboard.route";
import Vue from 'vue';
import Counter from "./components/counter/counter";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/auth',
      component: AuthRoute,
      beforeEnter: (from, to, next) => {
        if (window.localStorage.getItem('x-token')) {
          next('/');
          return;
        } else {
          next();
        }
      }
    },
    {
      path: '/',
      component: DashboardRoute,
      beforeEnter: (from, to, next) => {
        if (window.localStorage.getItem('x-token')) {
          next();
        } else {
          next('auth');
        }
      },
      children: [
        {
          path: '/counter',
          component: Counter
        }
      ]
    }
  ],
  mode: 'history',
  base: '/'
})