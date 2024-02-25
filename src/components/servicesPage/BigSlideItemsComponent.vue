<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { Autoplay, Navigation } from 'swiper/modules'
    import 'swiper/css'
    import 'swiper/css/navigation';

    import { computed, ref, onMounted } from 'vue';
    import { useStore } from 'vuex';
    import { useRoute } from 'vue-router';
    // import { useSwiper } from 'swiper/vue';
    
    const route = useRoute()
    const store = useStore()
    // const swiper = useSwiper();

    const props = defineProps({
        showSlides: {
            type: Function
        }
    })
    const modules = ref([Autoplay, Navigation])

    // const isActive = ref(true)

    const pageName = computed(() => {
        return route.name
    })

    const getImageUrl = (name) => {
   
        return new URL(`/src/assets/images/services/original/${pageName.value}/${name}`, import.meta.url)

    }

    const getServicesSlides = computed(() => {
        if(pageName.value === 'windows') {
            return store.getters['getServicesWindowsSlide']
        } else if(pageName.value === 'balconies') {
            return store.getters['getServicesBalconiesSlide']
        } else if(pageName.value === 'kitchens') {
            return store.getters['getServicesKitchensSlide']
        }
    })
    

    
    onMounted(() => {
        fetch(`https://plastic-windows-default-rtdb.firebaseio.com/db/${pageName.value}.json`)
        .then(res => res.json())
        .then((data) => {
            if(pageName.value === 'windows') {
              
                store.dispatch("setServicesWindowsSlide", data);
            } else if(pageName.value === 'balconies') {
               
                store.dispatch("setServicesBalconiesSlide", data);
            } else if(pageName.value === 'kitchens') {
             
                store.dispatch("setServicesKitchensSlide", data);
            }
            
        })
    })

    
</script>

<template>
    <Teleport to="body" >
        <swiper 
            :navigation="true" 
            :slides-per-view="1"
            :modules="modules" 
            :centeredSlides="true"
            class="mySwiper"
            :autoplay="{
                delay: 2500,
                pauseOnMouseEnter: true
            }"
            >
            <swiper-slide v-for="slide in getServicesSlides" :key="slide.id">
                <img :src="getImageUrl(slide.image)" :alt="slide.image" class="services_big_slide" />
            </swiper-slide>
    
        </swiper>
    </Teleport>

</template>

<style scoped>

.swiper {
  width: 100%;
  height: 100%;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background:rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100vw;
  height: 100vh;
  object-fit: contain;
}


</style>