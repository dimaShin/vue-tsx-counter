import Vue from "vue";
import {counterConsts} from "../../store/counter/counter.actions";
import togglePending from "../../decorators/togglePending";
import asyncNoti from "../../decorators/asyncNoti";
import { Component, Prop } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

import './counter.scss';

@Component
export default class Counter extends Vue {

  @State('counter') counter;
  @Action(counterConsts.INCREMENT) increment;
  @Action(counterConsts.DECREMENT) decrement;
  pending: boolean = false;

  @Prop([String])
  title: string;

  showCount(h) {
    return this.pending
      ? <span class="fa fa-spinner fa-pulse" />
      : <span>{ this.count }</span>
  }

  render(h) {
    const { MIN, MAX } = this.counter;
    return (
      <div class="counter">
        <p>{this.title}</p>
        <button
          onClick={this.onDecreaseClicked}
          disabled={ this.count === MIN || this.pending }
        >-</button>
        { this.showCount(h) }
        <button
          disabled={ this.count === MAX || this.pending }
          onClick={this.onIncreaseClicked}
        >+</button>
      </div>
    );
  }

  get count(): number {
    return this.counter.count
  }

  @asyncNoti({
    successMsg: 'Success',
    failMsg: 'Fail'
  })
  @togglePending()
  onIncreaseClicked() {
    return this.increment();
  }

  @asyncNoti({
    successMsg: 'Success',
    failMsg: 'Fail'
  })
  @togglePending()
  onDecreaseClicked() {
    return this.decrement();
  }
}