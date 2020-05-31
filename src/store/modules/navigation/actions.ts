import { ActionTree } from 'vuex'

import { LayoutState } from '.'
import { State } from '../..'

export default {
  toggle: ({ commit, state }) => commit('SET', !state.model)
} as ActionTree<LayoutState, State>