const state = {
  showLogin: false,
  showModuleUpload: false,
}

const mutations = {
  SET_SHOW_LOGIN (state, val) {
    state.showLogin = val
  },
  SET_SHOW_MODULEUPLOAD (state, val) {
    state.showModuleUpload = val
  }
}

const actions = {
  setShowLogin ({ commit }, val) {
    commit('SET_SHOW_LOGIN', val)
  },
  showModuleUpload ({ commit }, val) {
    commit('SET_SHOW_MODULEUPLOAD', val)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
