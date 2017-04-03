import {Component, Prop} from "vue-property-decorator";
import Vue from "vue";
import Counter from "../components/counter/counter";


@Component
export default class DashboardRoute extends Vue {

  @Prop([String]) currentRoute: string;

  getInnerRoute(h) {
    switch (true) {
      case this.currentRoute.startsWith('/counter'): return <Counter title="Counter"/>;
      default: return <span>404</span>
    }
  }

  render(h) {
    return (
      <div class="dash-container">
        { this.getInnerRoute(h) }
      </div>
    )
  }

}