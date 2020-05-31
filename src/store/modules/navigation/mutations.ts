import { MutationTree } from 'vuex'
import { LayoutState } from '.'

export default {
  SET: (state, model) => state.model = model
} as MutationTree<LayoutState>