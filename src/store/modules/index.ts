import { ModuleTree } from 'vuex'
import { State } from '..'

import navigation from './navigation'
import search from './search'
import map from './map'

export default { navigation, search, map } as ModuleTree<State>