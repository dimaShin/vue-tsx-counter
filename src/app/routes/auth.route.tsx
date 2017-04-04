import {Component, Prop} from "vue-property-decorator";
import Vue from "vue";

@Component
export default class AuthRoute extends Vue {

  render(h) {
    return (
      <div class="auth-container">
        <router-view />
      </div>
    )
  }

}