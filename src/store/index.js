import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  state: {
    count: 0,
    defaultPageSize: 10,
    userInfo: null,
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },
    getCount(state) {
      return state.count;
    },
  },
  actions: {
    getUserInfo({ commit, state, dispatch, rootState }, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      }).then(() => {
        commit("setUserInfo", { name: "--newName" });
      });
    },
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload;
    },
    setCount(state, payload) {
      state.count = payload;
    },
  },
});
export default store;
