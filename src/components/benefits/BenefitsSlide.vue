
<script setup>
    const props = defineProps({
        slide: {
            type: Object,
            requared: true,
            default: {}
        }
    })

    const getImageUrl = (name) => {
        return new URL(`/src/assets/images/benefits/${name}`, import.meta.url)
       
    }
    
</script>


<template>
    <div class="benefits__item">
        <p class="benefit-image">
            <img 
            :src="getImageUrl(slide.img)"
            :alt="slide.img">
        </p>
        <p class="benefit-title">{{ slide.text }}</p>
    </div> 
</template>