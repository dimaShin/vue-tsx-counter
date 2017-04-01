import Vuex from 'vuex';
import Vue from 'vue';
import counter from './counter';

Vue.use(Vuex);

export const store: Vuex.Store<any> = new Vuex.Store({
  modules: { counter }
});
