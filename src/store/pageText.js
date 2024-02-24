export const pageText = {
    state() {
        return {
            texts: [
                {
                    id: 0,
                    name: 'windows',
                    title: 'Установка пластиковых (ПВХ) окон',
                    offerText: 'Выгодное предложение по монтажу ПВХ-окон в',
                   
                },
                {
                    id: 1,
                    name: 'balconies',
                    title: 'Остекление балконов и лоджий',
                    offerText: 'Выгодное остекление балконов и лоджий в',
                },
                {
                    id: 2,
                    name: 'kitchens',
                    title: 'Шкафы-купе и кухни',
                    offerText: 'Выгодное изготовление кухонь и шкафов-купе',
                },
            ]
        }
    },

    getters: {
        getTextPage(state) {
            return state.texts
        }
    }
}