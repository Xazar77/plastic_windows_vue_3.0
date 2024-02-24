export const reviews = {
    state() {
        return {
            reviews: []
        }
    },
    mutations: {
        setReviewsSlide(state, data) {
            state.reviews = data
        }
    },
    actions: {
        setReviewsSlide({commit}, data) {
            commit('setReviewsSlide', data)
        }
    },

    getters: {
        getReviewsSlide(state) {
            return state.reviews
        }
    }
}