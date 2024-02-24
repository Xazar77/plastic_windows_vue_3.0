

<script setup>
    import MainServicesSlide from './MainServicesSlide.vue';
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { Autoplay, Navigation } from 'swiper/modules'
    import 'swiper/css'
    import 'swiper/css/pagination'

    import { computed, ref, onMounted } from 'vue';
    import { useStore } from 'vuex';


    const prev = ref(null);
    const next = ref(null);
    const modules = ref([Autoplay, Navigation])

    const store = useStore()


    const getServicesSlides = computed(() => {
        return store.getters['getServicesSlide']
    })

    onMounted(() => {
        fetch('http://localhost:2601/services')
        .then(res => res.json())
        .then((data) => {
            store.dispatch("setServicesSlide", data);
        })
    })






</script>

<template>
    <div id="services" class="section">
        <div class="container">
            <div class="section-title">
                <div class="heading-image"><i class="service-ico"></i></div>
                <h2 class="heading white">Наши <span>услуги</span></h2>
            </div>
            <div class="row">
                <swiper
                    :modules="modules"
                    :slides-per-view="2"
                    :space-between="30"
                    :loop="true"
                    :autoplay="{
                        delay:5000,
                        pauseOnMouseEnter: true
                    }"
                    :navigation="{
                    prevEl: prev,
                    nextEl: next,
                    }"
                    class="benefits__slider"
            
                >   
                    <swiper-slide
                        v-for="slide in getServicesSlides"
                        :key="slide.id"
                    >
                        <main-services-slide :slide="slide"/> 
                                             
                    </swiper-slide>

                </swiper>

                <div class="services-arrows">
                    <div ref="prev" class="services__arrow services__arrow--left">
                        <img src="@/assets/images/benefits/left-arrow.svg" alt="">
                    </div>
                    <div ref="next" class="services__arrow services__arrow--right">
                        <img src="@/assets/images/benefits/right-arrow.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>