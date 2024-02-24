import { createStore } from 'vuex'


import { benefitsSlider } from './benefitsSlider'
import { mainServices } from './mainServices'
import { pageText } from './pageText'
import { reviews } from './reviews'
import { documents } from './documents'
import { balconies } from './servicesSlides/balconies'
import { windows } from './servicesSlides/windows'
import { kitchens } from './servicesSlides/kitchens'

export const store = createStore({

    modules: {
   
        benefitsSlider,
        mainServices,
        pageText,
        reviews,
        documents,
        balconies,
        windows,
        kitchens
    }

    
})