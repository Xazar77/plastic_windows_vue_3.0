
export const kitchens = {
    state() {
        return {
            kitchens: []
        }
    },
    mutations: {
        setServicesKitchensSlide(state, data) {
           state.kitchens = data
        }
    },
    actions: {
        setServicesKitchensSlide({commit}, data) {
            commit('setServicesKitchensSlide', data)
        }
    },

    getters: {
        getServicesKitchensSlide(state) {
            return state.kitchens
        }
    }
}