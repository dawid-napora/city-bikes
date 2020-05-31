import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

export interface State { [key: string]: any }

export const strict = true

export default new Vuex.Store<State>({
  strict,
  state: {},
  modules
})
