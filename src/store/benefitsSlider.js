

export const benefitsSlider = {
    state() {
        return {
            benefits: []
        }
    },
    mutations: {
        setBenefitsSlide(state, data) {
           state.benefits = data
        }
    },
    actions: {
        setBenefitsSlide({commit}, data) {
            commit('setBenefitsSlide', data)
        }
    },

    getters: {
        getBenefitsSlide(state) {
            return state.benefits
        }
    }
}