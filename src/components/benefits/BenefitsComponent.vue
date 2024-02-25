

<script setup>
    import BenefitsSlide from './BenefitsSlide.vue'

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

    const getBenefitsSlide = computed(() => {
        return store.getters['getBenefitsSlide']
    })

    onMounted(() => {
        fetch('https://plastic-windows-default-rtdb.firebaseio.com/db/benefits.json')
        .then(res => res.json())
        .then((data) => {
            store.dispatch("setBenefitsSlide", data);
        })
    })




    
    
</script>


<template>
    <div id="benefits" class="section">
        <div class="container">
            <div class="section-title">
                <div class="heading-image"><i class="benefit-ico"></i></div>
                <h2 class="heading"><span>Выгоды</span> для клиентов</h2>
            </div>
                <div class="benefits-inner">
                    <div class="benefits-wrap">

                        <swiper
                            :modules="modules"
                            :slides-per-view="3"
                            :space-between="30"
                            :loop="true"
                            :centeredSlides="true"
                            :navigation="{
                            prevEl: prev,
                            nextEl: next,
                            }"
                            :autoplay="{
                                delay:2500,
                                pauseOnMouseEnter: true
                            }"
                            class="benefits__slider"
                  
                        >
                            <swiper-slide v-for="slide in getBenefitsSlide"  :key="slide.id">
                                <benefits-slide :slide="slide" />
                            </swiper-slide>

                        </swiper>
                    </div>
                    
                </div>
                <div class="benefits-arrows">
                    <div ref="prev" class="benefits__arrow benefits__arrow--left ">
                        <img src="@/assets/images/benefits/left-arrow.svg" alt="">
                    </div>
                    <div ref="next" class="benefits__arrow benefits__arrow--right ">
                        <img src="@/assets/images/benefits/right-arrow.svg" alt="">
                    </div>
                </div>
        </div>
    </div>
</template>