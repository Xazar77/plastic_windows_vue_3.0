<script setup>
const props = defineProps({
    timerObj: {
        type: Object,
        default: {},
        required: true
    }
})


</script>

<template>
    <div class="count-wrap">
        <div class="count count_1">Дней:<span> {{timerObj.days}}</span></div>
        <div class="count count_2">Часов:<span>{{timerObj.hours}}</span></div>
        <div class="count count_3">Минут:<span>{{timerObj.minutes}}</span></div>
        <div class="count count_4">Секунд:<span>{{timerObj.seconds}}</span></div>
    </div>

             
</template>

<style scoped>
.count > span{
    margin-top: 10px;
}


</style>