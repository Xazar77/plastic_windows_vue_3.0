<script setup>
 import { computed } from 'vue';
 import { useRoute } from 'vue-router';
 const route = useRoute()


 const props = defineProps({
    text: {
        type: Object,
        required: true
    }
 })

 const pageName = computed(() => {
    return route.name
})



</script>

<template>
    <div class="offer-heading" v-if="pageName===text.name">
        <h1><span >{{ text.offerText }} <span 
            class="text-warning">Минске!</span></span>
        </h1>
    </div>
</template>