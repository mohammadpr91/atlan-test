import Vuex from 'vuex'
import Vue from 'vue'
import Service from "../plugins/Service";

let service = new Service();

Vue.use(Vuex);

const state = {
  data: []
}

const getters = {}

const actions = {
  getData({ commit }) {
    service.get( 
      "http://api.openweathermap.org/data/2.5/weather?q=London&appid=79c06f01f69f3f8a9cb88a7949c4a6d5",
      (response) => {
        commit('setData', response)
      },

    );
  }
}

const mutations = {
  setData(state, data) {
  state.data = data
  }
}
  
  //export store module
  export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
  })