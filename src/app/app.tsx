import Vue from "vue";
import {store} from "./store/store";
import Component from "vue-class-component";
import '../theme/index.scss';
import AuthRoute from "./routes/auth.route";
import DashboardRoute from "./routes/dashboard.route";
import router from './routes';
console.log(router);
@Component
class App extends Vue {

  get currentRoute() {
    return window.location.pathname;
  }

  getCurrentRoute(h) {
    switch (true) {
      case this.currentRoute.startsWith('/auth'): {
        return <AuthRoute currentRoute={this.currentRoute} />;
      }
      default: {
        return <DashboardRoute currentRoute={this.currentRoute}/>;
      }
    }
  }

  render(h) {
    return <router-view />;
  }
}

new Vue({
  el: '#app',
  store,
  router,
  render (h) {
    return (
      <App />
    )
  }
});
