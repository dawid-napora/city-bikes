import { GetterTree } from 'vuex';

import { MapState } from '.';
import { State } from '../..';

export default {
  getMarkers: (state) => state.markers ? state.markers : []
} as GetterTree<MapState, State>