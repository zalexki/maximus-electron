/**
 * The file enables `@/store/index.js` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
  state,
  getters,
  mutations,
  actions,
}