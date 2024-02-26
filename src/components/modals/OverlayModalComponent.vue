
<script setup>
    const props = defineProps({
       
       closeModal: {
           type: Function
       }
   })

</script>



<template>
    <Teleport  to="body">
        <div class="overlay" ref="overlay" @click="closeModal"></div>
    </Teleport>
</template>

<style scoped>
    .overlay{
        z-index: 9000;
    }
</style>