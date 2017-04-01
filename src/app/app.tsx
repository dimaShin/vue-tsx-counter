import Vue from "vue";
import Counter from "./components/counter/counter";
import {store} from "./store/store";
import Component from "vue-class-component";
import '../theme/index.scss';

@Component
class App extends Vue {

  render(h) {
    return (<Counter
      title="Counter"
    />)
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
