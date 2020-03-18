import Vue from 'vue'
import Vuex from 'vuex'

import containerList from './containerList'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    containerListID: containerList
  },
  strict: process.env.NODE_ENV !== 'production'
})
