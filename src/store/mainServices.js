

export const mainServices = {
    state() {
        return {
            services: []
        }
    },
    mutations: {
        setServicesSlide(state, data) {
            state.services = data
        }
    },
    actions: {
        setServicesSlide({commit}, data) {
            commit('setServicesSlide', data)
        }
    },

    getters: {
        getServicesSlide(state) {
            return state.services
        }
    }
}