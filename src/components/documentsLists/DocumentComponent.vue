
<script setup>
import DocumentItemComponent from "./DocumentItemComponent.vue"

import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore()

const getDocumentsItem = computed(() => {
    return store.getters['getDocumentItem']
})

onMounted(() => {
    fetch('http://localhost:2601/documents')
        .then(res => res.json())
        .then((data) => {
            store.dispatch("setDocumentItem", data);
    })
})

</script>



<template>
    <div id="documents" class="section">
        <div class="container">
            <div class="section-title">
                <div class="heading-image"><i class="document-ico"></i></div>
                <h2 class="heading"><span>Сертификаты</span> и <span>документы</span></h2>
            </div>
            <div class="text-center">
                <document-item-component
                    v-for="item in getDocumentsItem"
                    :key="item.id"
                    :item="item"
                />
                <!-- <div class="col-sm-4">
                    <a href="@/assets/images/documents/original/document4.jpg" class="sertificate-document document-inner" data-fancybox-group="gallery-documents">
                        <img src="@/assets/images/documents/document4.jpg" class="img-responsive  " alt="">
                        <div class="document-overlay"></div>
                    </a>
                </div>
                <div class="col-sm-4">
                    <a href="@/assets/images/documents/original/document4.jpg" class="sertificate-document document-inner" data-fancybox-group="gallery-documents">
                        <img src="@/assets/images/documents/document4.jpg" class="img-responsive" alt="">
                        <div class="document-overlay"></div>
                    </a>
                </div>
                <div class="col-sm-4">
                    <a href="@/assets/images/documents/original/document4.jpg" class="sertificate-document document-inner" data-fancybox-group="gallery-documents">
                        <img src="@/assets/images/documents/document4.jpg" class="img-responsive" alt="">
                        <div class="document-overlay document-inner"></div>
                    </a>
                </div> -->
            </div>
        </div>
    </div>   
</template>