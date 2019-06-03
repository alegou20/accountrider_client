import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/auth'
import bills from '@/store/bills'
import vehicle from '@/store/vehicle'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    auth,
    bills,
    vehicle
  }
})
