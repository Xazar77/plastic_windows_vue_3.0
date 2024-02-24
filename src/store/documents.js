

export const documents = {
    state() {
        return {
            documents: []
        }
    },
    mutations: {
        setDocumentItem(state, data) {
           state.documents = data
        }
    },
    actions: {
        setDocumentItem({commit}, data) {
            commit('setDocumentItem', data)
        }
    },

    getters: {
        getDocumentItem(state) {
            return state.documents
        }
    }
}