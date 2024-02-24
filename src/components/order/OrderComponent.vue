

<script setup>
    import OrderModalComponent from "@/components/modals/OrderModalComponent.vue";
    import OrderCounterComponent from "./OrderCounterComponent.vue"

    import { ref, onMounted, onUnmounted, reactive } from 'vue';

   

    let intervalId = ref(undefined)
    let timerObj = ref({})
   

    const deadline = '11 february 2025 19:56:00.000'



    const getZero = (num) => {
        if(num >= 10){
            return num
        } else if( num < 10) {
            return `0${num}`
        }
    }


    const getTimeRemaining = () => {
		let currentTime = new Date().getTime()
		let stopTime = new Date(deadline).getTime()
		let timeRemaining = (stopTime - currentTime) / 1000
		let days = Math.floor(timeRemaining / 60 / 60 / 24)
		let hours = Math.floor((timeRemaining / 60 / 60) % 24)
		let minutes = Math.floor((timeRemaining / 60) % 60)
		let seconds = Math.floor(timeRemaining % 60)



        if(timeRemaining > 0) {
            timerObj.value =  {
                timeRemaining,
                days: getZero(days),
                hours: getZero(hours),
                minutes: getZero(minutes),
                seconds: getZero(seconds)
            }

        } else {
            timerObj.value =  {
                timeRemaining,
                days: getZero(0),
                hours: getZero(0),
                minutes: getZero(0),
                seconds: getZero(0)
            }
        }

	}

    onMounted(() => {
        intervalId = setInterval(() => {
            getTimeRemaining()
        }, 500)
    })
    onUnmounted(() => {
        clearInterval(intervalId)
    })

	

</script>

<template>
    <div id="order_1" class="order">
        <div class="container">
            <div class="col-md-offset-2 col-md-8">
                <div class="order-inner row">
                    <div class="col-md-6">
                        <h2 class="order-heading">Оставьте заявку <br/>прямо сейчас</h2>
                        <div class="order-subheading">и <span class="text-normal">получите скидку  20%</span> <br/>на установку окон</div>
                        <div class="countdown" data-days="7">
                            <div class="countdown-text">{{ timerObj?.timeRemaining > 0? 'До конца акции осталось:' : 'Акция закончилась!!!'}}
                                    
                                <order-counter-component :timerObj="timerObj"/>
                            </div>
                        </div>
                    </div>
                    <order-modal-component/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.countdown-text{
    font-size: 18px;
}



</style>