export const state = () => ({
    authenticated: false,
  })
  
  export const mutations = {
    setAuthStatus (state, payload) {
      state.authenticated = payload
    }
  }