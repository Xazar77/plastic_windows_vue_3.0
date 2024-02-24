

<script setup>
    import NavbarFixedTopComponent from '@/components/navbarFixed/NavbarFixedTopComponent.vue'
    import OfferComponent from '@/components/offer/OfferComponent.vue'
    import CalcComponent from '@/components/calcBlock/CalcComponent.vue'
    import BenefitsComponent from '@/components/benefits/BenefitsComponent.vue'
    import MainServicesComponent from '@/components/servicesPage/MainServicesComponent.vue'
    import OrderComponent from '@/components/order/OrderComponent.vue'
    import ReviewsComponent from '@/components/reviewsLists/ReviewsComponent.vue'
    import AboutComponent from '@/components/about/AboutComponent.vue'
    import DocumentComponent from '@/components/documentsLists/DocumentComponent.vue'
    import NavbarDefaultComponent from '@/components/navbarDefault/NavbarDefaultComponent.vue'
   
    import FooterComponent from '@/components/footer/FooterComponent.vue'
    import MapLocationComponent from '@/components/mapLocation/MapLocationComponent.vue'
    import ContactsComponent from '@/components/contacts/ContactsComponent.vue'
    import HeaderComponent from '@/components/header/HeaderComponent.vue'
    import SmoothScrollComponent from '@/components/smoothScroll/SmoothScrollComponent.vue'

    import { ref, computed, onMounted, onUnmounted } from 'vue'
    import { useRoute } from 'vue-router';
    import { scrollIntoView } from "seamless-scroll-polyfill";


    const isOpen = ref(false)
    
    const route = useRoute()

    const pageName = computed(() => {
        return route.name
    })

    const  smoothScroll = () => {
        scrollIntoView(document.getElementById('header'), { 
            behavior: "smooth",
                block: "start" 
        })
    }

    const scrollWindow = () => {
        if (window.scrollY > 800) {
            isOpen.value = true
        } else {
            isOpen.value = false
        }
    }

    onMounted(() => {
        window.addEventListener('scroll', scrollWindow);
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', scrollWindow);
    })


</script>


<template>
    <div :class=' pageName ' >
        
        <navbar-fixed-top-component/>
        <header-component/>
        <navbar-default-component/>
        <offer-component/>
        <calc-component v-if="pageName === 'balconies'"/>
        <benefits-component/>
        <main-services-component/>
        <order-component/>
        <reviews-component/>
        <about-component/>
        <document-component/>
        <order-component/>
        <contacts-component/>
        <map-location-component/>
        <footer-component/>
        <smooth-scroll-component @click.prevent="smoothScroll" v-if="isOpen"/>


    </div>



</template>