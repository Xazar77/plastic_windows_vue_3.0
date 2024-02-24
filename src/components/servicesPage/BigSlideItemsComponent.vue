<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { Navigation } from 'swiper/modules'
    import 'swiper/css'
    import 'swiper/css/navigation';

    import { computed, ref, onMounted } from 'vue';
    import { useStore } from 'vuex';
    import { useRoute } from 'vue-router';
    
    const route = useRoute()
    const store = useStore()

    const props = defineProps({
        showSlides: {
            type: Function
        }
    })
    const modules = ref([Navigation])

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
    console.log(getServicesSlides.value)

    
    onMounted(() => {
        fetch(`http://localhost:2601/${pageName.value}`)
        .then(res => res.json())
        .then((data) => {
            if(pageName.value === 'windows') {
                console.log(data)
                store.dispatch("setServicesWindowsSlide", data);
            } else if(pageName.value === 'balconies') {
                console.log(data)
                store.dispatch("setServicesBalconiesSlide", data);
            } else if(pageName.value === 'kitchens') {
               console.log(data)
                store.dispatch("setServicesKitchensSlide", data);
            }
            
        })
    })

    
</script>

<template>
    <Teleport to="body" >
        <Swiper :navigation="true" 
            :modules="modules" 
            class="mySwiper"
            :loop="true">
            <SwiperSlide v-for="slide in getServicesSlides" :key="slide.id" >
                <img :src="getImageUrl(slide.image)" :alt="slide.image" class="services_big_slide" />
            </SwiperSlide>
    
        </Swiper>
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