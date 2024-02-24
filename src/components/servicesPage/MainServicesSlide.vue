
<script setup>
    import BigSlideItemsComponent from './BigSlideItemsComponent.vue';
    import OverlayModalComponent from '../modals/OverlayModalComponent.vue';
    import ServicesModalComponent from '../modals/ServicesModalComponent.vue';

    import { ref, computed } from 'vue'
    // import { useRoute } from 'vue-router';
    
    // const route = useRoute()

    const props = defineProps({
        slide: {
            type: Object,
            required: true,
            default: {}
        },

    })

    let isOpen = ref(false)
    let isShowSlides = ref(false)

    const openModal = () => {                       
        isOpen.value = true
        window.addEventListener('keydown', (e) => closeModalEscape(e))
    }

    const showSlides = () => {                       
        isShowSlides.value = true
        window.addEventListener('keydown', (e) => closeModalEscape(e))
    }

    const closeModal = () => { 
       return  isOpen.value = false
   }
    const closeModalEscape = (e) => {
        if(e.keyCode === 27) {
            isOpen.value = false
            isShowSlides.value = false
            window.removeEventListener('keydown', (e) => closeModalEscape(e))
        }
    }



    const getImageUrl = (name) => {
        return new URL(`/src/assets/images/services/${name}`, import.meta.url)

    }



   
</script>
<template>
    <div class="col-md-12">
        <div class="service-block">
            <div class="service-image">
                <img 
                    :src="getImageUrl(slide.img)"
                    :alt="slide.img"/>
                    <div class="services-image_overlay" @click="showSlides">
                        <span >Смотреть работы</span>
                    </div>
            </div>
            <div class="service-text">
                <h3>{{ slide.title }}</h3>
                <p>{{ slide.description }}</p>

                <p v-if="slide.price"><strong>От {{ slide.price }} руб./м<sup>2</sup></strong></p>
                <p v-else><strong> {{ slide.priceText }} </strong></p>

                <div class="service-button">
                    <a href="#application" 
                        data-subject="Стандартные ПВХ-окна" 
                        class="btn btn-success btn-sm"
                        @click.prevent="openModal">Вызвать замерщика</a></div>
            </div>
        </div>
    </div>
    <overlay-modal-component v-if="isOpen"
    :closeModal="closeModal"/>
    <big-slide-items-component v-if="isShowSlides"/>
    <services-modal-component v-if="isOpen"
    :closeModal="closeModal"/>
</template>

<style scoped>
    .services-image_overlay span{
        cursor: pointer;
    }
</style>