export const balconies = {
    state() {
        return {
            balconies: []
        }
    },
    mutations: {
        setServicesBalconiesSlide(state, data) {
           state.balconies = data
        }
    },
    actions: {
        setServicesBalconiesSlide({commit}, data) {
            commit('setServicesBalconiesSlide', data)
        }
    },

    getters: {
        getServicesBalconiesSlide(state) {
            return state.balconies
        }
    }
}