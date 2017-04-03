import {Component, Prop} from "vue-property-decorator";
import Vue from "vue";

@Component
export default class AuthRoute extends Vue {

  @Prop([String]) currentRoute: string;


  getInnerRoute(h) {
    switch (true) {
      case this.currentRoute.startsWith('/auth/signin'): return <span>signin</span>;
      case this.currentRoute.startsWith('/auth/signup'): return <span>signup</span>;
      default: return <span>signin</span>;
    }
  }

  render(h) {
    return (
      <div class="auth-container">
        { this.getInnerRoute(h) }
      </div>
    )
  }

}