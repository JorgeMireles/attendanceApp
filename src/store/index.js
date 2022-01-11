import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    token: null,
    name: null,
    lastname: null,
    working: false,
  };
};



export default new Vuex.Store({
  state:getDefaultState,
  getters:{
    name: state => {
      return state.name;
    },

    lastname: state => {
      return state.lastname;
    },
    token: state => {
      return state.token;
    },

    working: state => {
      return state.working;
    },

  },
  mutations: {

    reset: state => {
      const s = getDefaultState();
      Object.keys(s).forEach(key => {
        state[key] = s[key];
      });
    },

    token: (state, payload) => {
      state.token = payload
    },

    working: (state, payload) => {
      state.working = payload;
    },

    name: (state, payload) => {
      state.name = payload;
    },

    lastname: (state,payload) => {
      state.lastname = payload;
    },

  },
  actions: {

    working: ({ commit }, payload) => {
      commit("working", payload);
    },

    token: ({ commit }, payload) => {
      commit("token", payload);
    },
    name: ({ commit }, payload) => {
      commit("name", payload);
    },

    lastname: ({ commit }, payload) => {
      commit("lastname", payload);
    },


  },
  plugins: [createPersistedState()]
});

