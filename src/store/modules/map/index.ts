import { Module } from 'vuex';
import { State } from '../..';

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export interface MapState {
  markers: {
    id: string;
    latLng: number[];
    name: string;
    onClick: (event: MouseEvent) => void;
  }[];
}

export const namespaced = true
export const state: MapState = {
  markers: []
}

export default { namespaced, state, mutations, actions, getters } as Module<MapState, State>