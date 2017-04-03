import Vue from "vue";
import {store} from "./store/store";
import Component from "vue-class-component";
import '../theme/index.scss';
import AuthRoute from "./routes/auth.route";
import DashboardRoute from "./routes/dashboard.route";

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
    return <div class="app-container"> { this.getCurrentRoute(h) } </div>;
  }
}

new Vue({
  el: '#app',
  store,
  render (h) {
    return (
      <App />
    )
  }
});
