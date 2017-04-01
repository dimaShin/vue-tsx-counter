import {counterActions, counterMutations} from './counter.actions';
import state from './counter.state';


export default {
  state,
  actions: counterActions,
  mutations: counterMutations
}
