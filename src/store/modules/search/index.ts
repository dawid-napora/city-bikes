import { Module } from 'vuex'
import { State } from '../..'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export interface SearchState {
  query: string;
}

export const state: SearchState = {
  query: ''
}

export const namespaced = true

export default { namespaced, state, mutations, actions, getters } as Module<SearchState, State>