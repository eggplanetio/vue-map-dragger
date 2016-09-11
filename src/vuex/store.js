import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const SANTA_MONICA = {
  left: -116,
  top: -3013,
}

const state = {
  mapName: "Los Angeles",
  coordinates: SANTA_MONICA,
  mapLoaded: false,
}

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
});
