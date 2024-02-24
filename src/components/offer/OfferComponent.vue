
<script setup>
  
    import { computed } from 'vue';
    import { useStore } from 'vuex';
   
    import OfferHeadingComponent from './OfferHeadingComponent.vue';

    const store = useStore()
 


    const getTextPage = computed(() => {
        return store.getters['getTextPage']
    })




</script>


<template>
    <div id="offer">
        <div class="container">
            <div class="offer-inner">
                <offer-heading-component v-for="text in getTextPage" :key="text.id" :text="text"/>
                <div class="clearfix"></div>
                <div class="offer-utp">
                    <div class="utp-inner">
                        <div class="utp-heading"><strong>До 11 июля</strong> проводится программа «Профремонт»</div>
                        <div class="utp-subheading">Рассрочка <span class="text-normal">без банка</span> и <span class="text-normal">скидки до 40%</span> для Вас!</div>
                        <div class="utp-button"><a href="#order" class="btn btn-success btn-lg fancyboxModal">Узнать свою скидку</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>