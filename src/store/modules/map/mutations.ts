import { MutationTree } from 'vuex';
import { MapState } from '.';

export default {
  SET_MARKERS: (state, markers) => state.markers = markers ? markers : []
} as MutationTree<MapState>