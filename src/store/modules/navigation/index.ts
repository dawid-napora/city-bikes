import { Module } from 'vuex'
import { State } from '../..'

import mutations from './mutations'
import actions from './actions'

export interface LayoutState { model: boolean }
export const state: LayoutState = { model: true }
export const namespaced = true

export default { namespaced, state, mutations, actions } as Module<LayoutState, State>