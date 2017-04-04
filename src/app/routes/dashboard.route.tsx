import {Component, Prop} from "vue-property-decorator";
import Vue from "vue";
import Counter from "../components/counter/counter";


@Component
export default class DashboardRoute extends Vue {

  render(h) {
    return (
      <div class="dash-container">
        <router-view />
      </div>
    )
  }

}