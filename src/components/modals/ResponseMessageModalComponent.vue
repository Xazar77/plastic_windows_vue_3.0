

<script setup>

    const props = defineProps({
        isOpenResponse: {
            type: Boolean
        },
        closeResponseModal: {
            type: Function
        }
    })



</script>



<template>
    <Teleport to="body">
        <div class="box-modal response-modal" id="responseMessage" >
            <div class="box-modal_title">
                <h2>Статус отправки формы:</h2>
            </div>
            <div class="box-modal_body">
                <div class="modal-content"></div>
                <br /><br />
                <a href="#" class="btn btn-success fancyClose" @click.prevent="closeResponseModal">ok</a>
               
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
    .response-modal{
        display: block;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9998;
    }
</style>