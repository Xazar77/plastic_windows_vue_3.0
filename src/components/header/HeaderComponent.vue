<script setup>
    import HeaderModalCallbackComponent from '../modals/HeaderModalCallbackComponent.vue';
    import OverlayModalComponent from '../modals/OverlayModalComponent.vue';

    import { ref, computed } from 'vue'
    import { useStore } from 'vuex';
    import { useRoute } from 'vue-router';
    
    const route = useRoute()
    const store = useStore()
    
    let isOpen = ref(false)

  


    const getTextPage = computed(() => {
        return store.getters['getTextPage']
    })

    const openModal = () => {
        isOpen.value = true
        window.addEventListener('keydown', (e) => closeModalEscape(e))
       
    }

    const closeModal = () => {
        return  isOpen.value = false  
    }



    const closeModalEscape = (e) => {

        if(e.keyCode === 27) {
            isOpen.value = false
            window.removeEventListener('keydown', (e) => closeModalEscape(e))
        }
    }

    const pageName = computed(() => {
        return route.name
    })




</script>

<template>
    <div id="header" v-for="text in getTextPage" :key="text.id">
        <div class="container">
            <div class="row" v-if="pageName===text.name">
                <div class="col-xs-6 col-sm-3 col-md-3 col-lg-2 block">
                    <div class="logotype">
                        <img src="@/assets/images/logotype.png" alt="Профремонт">
                    </div>	
                </div>
                <div class="col-sm-4 col-md-5 col-lg-5 hidden-xs" >
                    <div class="slogan">{{ text.title }}</div>
                </div>
                <div class="col-xs-6 col-sm-5 col-md-4 col-lg-5 block">
                    <div class="row">
                        <div class="col-sm-12 col-lg-6" >
                            <div class="phone"><a href="tel:89876543210">+7 (987) <span class="text-normal">654-32-10</span></a></div>
                        </div>
                        <div class="col-sm-12 col-lg-6">
                            <div class="button" @click.prevent="openModal">
                              <a href="#" class="btn btn-warning btn-block fancyboxModal"><i class="phone-icon"></i> Заказать звонок!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

   
    <overlay-modal-component v-if="isOpen"
    :closeModal="closeModal"/>
    <header-modal-callback-component v-if="isOpen"
    :closeModal="closeModal"/>

  

        
    
</template>