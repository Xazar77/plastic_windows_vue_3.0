

export const windows = {
    state() {
        return {
            windows: []
        }
    },
    mutations: {
        setServicesWindowsSlide(state, data) {
           state.windows = data
        }
    },
    actions: {
        setServicesWindowsSlide({commit}, data) {
            commit('setServicesWindowsSlide', data)
        }
    },

    getters: {
        getServicesWindowsSlide(state) {
            return state.windows
        }
    }
}