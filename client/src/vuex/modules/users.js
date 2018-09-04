import AuthenticationService from '../../services/AuthenticationService'

export default {
  namespaced: true,
  state: {
    email: '',
    username: '',
    password: '',
    error: null
  },
  getters: {},
  actions: {
    async register({
      state,
      commit
    }) {
      try {
        await AuthenticationService.register({
          email: state.email,
          username: state.username,
          password: state.password
        })
      } catch (error) {
        commit('setError', error)
      }
    }
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    setEmail(state, email) {
      state.email = email
    },
    setUsername(state, username) {
      state.username = username
    },
    setPassword(state, password) {
      console.log(password)
      state.password = password
    }
  }
};
