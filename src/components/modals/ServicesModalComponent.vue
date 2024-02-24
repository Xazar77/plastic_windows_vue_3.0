

<script setup>
    import FormComponent from '../form/FormComponent.vue';
    import { ref } from 'vue'
    
    const props = defineProps({
       
       closeModal: {
           type: Function
       }

    })
    const isClose = ref(false)
</script>


<template>
    <Teleport to="body">
        <div class="services-modal" :class="isClose? 'hidden' : 'services-modal--opened'">
            <div class="fancybox-skin" style="padding: 0px; width: auto; height: auto;">
                <div class="fancybox-outer">
                    <div class="fancybox-inner" style="overflow: hidden; width: 580px; height: 495px;">
                        <div id="application" class="order-call-modal box-modal" style="display: block;">
                            <div class="box-modal_title">
                                <div class="box-modal_topic text-center text-success" style="margin-left: 0px;">Вызов замерщика</div>
                            </div>
                            <div class="box-modal_body rf">
                                <p class="text-center">Оставьте заявку и специалист свяжется с Вами в ближайшее время!</p>
                                <form-component
                                    @submit.prevent="closeModal"
                                    nameAttbr="application-form"
                                    buttonText="Вызвать замерщика!"
                                    classBtn="btn-success"/>
                                <span class="help-block">Гарантируем 100% конфиденциальность. Ваша информация не будет распространяться.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <span title="Close" class="services-modal__close" @click="closeModal">x</span>
            </div>
        </div>
    </Teleport>
</template>