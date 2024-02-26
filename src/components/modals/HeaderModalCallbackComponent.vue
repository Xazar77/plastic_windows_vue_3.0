

<script setup>
    import FormComponent from '../form/FormComponent.vue';
    

 
    const props = defineProps({
       
        closeModal: {
            type: Function
        },
        isOpen: {
            type: Boolean
        }
    })


    

</script>


<template>
    <Teleport  to="body">
        
        <div class="header-modal " :class="isOpen? 'header-modal--opened' : 'hidden'" >
            <div class="fancybox-skin" style="padding: 0px; width: auto; height: auto;">
                <div class="fancybox-outer">
                    <div class="fancybox-inner" style="overflow: hidden; width: 580px; height: 495px;">
                        <div id="callback" class="order-call-modal box-modal" style="display: block;">
                            <div class="box-modal_title">
                                <div class="box-modal_topic text-center text-warning" style="margin-left: 0px;">Заказ звонка</div>
                            </div>
                            <div class="box-modal_body rf">
                                <p class="text-center">Оставьте, пожалуйста, заявку. Мы позвоним Вам в ближайшее время и ответим на все вопросы!</p>
                                <form-component 
                                    @submit.prevent="closeModal"
                                    nameAttbr="callback-form"
                                    buttonText="Свяжитесь со мной!"
                                    classBtn="btn-warning"/>
                                <span class="help-block">Гарантируем 100% конфиденциальность. Ваша информация не будет распространяться.</span>
                                {{ isOpen }}
                            </div>
                        </div>
                    </div>
                </div>
                <span  title="Close" class="header-modal__close" @click="closeModal">x</span>    
            </div>
        </div>
        
        
    </Teleport>

</template>

<style scoped>

</style>

