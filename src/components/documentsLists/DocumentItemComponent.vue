<script setup>
    import { ref } from 'vue'

    const props = defineProps({
        item: {
            type: Object,
            default: {},
            required: true
        }
    })

    const isOverlay = ref(false)
    const  overlay = ref(null)
    const img = ref(null)



    const getImageUrl = (name) => {
            return new URL(`/src/assets/images/documents/${name}`, import.meta.url)
        
    }

    const getOriginalImageUrl = (name) => {
            return new URL(`/src/assets/images/documents/original/${name}`, import.meta.url)
        
    }
    const showOverlay = (e) => {
        isOverlay.value = ! isOverlay.value

        if(e.target.closest('.col-sm-4')){
            if( isOverlay.value) {
            overlay.value.style.cssText = `
                background: black;
                position: fixed;
                z-index: 1;
                width: 100vw;
                height: 100vh;
                opacity: 0.7;
            `;
            img.value.style.cssText = `
                position: fixed;
                z-index: 2;
                max-width: 90vw;
                height: 90vh;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                object-fit: contain;
                `
            } else {
               
                img.value.style.cssText = `
                    position: relative;
                    z-index: 0;
                `;
                overlay.value.style.cssText = `
                    position: relative;
                    z-index: 0;
                `;
            }
        }
            
        
    }

</script>


<template>
    <div class="col-sm-4 documents_item" @click.prevent="showOverlay($event)" >
        <div class="sertificate-document document-inner" data-fancybox-group="gallery-documents">
            <img :src="isOverlay? getOriginalImageUrl(item.originalImg) : getImageUrl(item.img)" 
                class="img-responsive  " 
                :alt="item.img"
                ref="img"
            >
            <div class="document-overlay"  ref="overlay"></div>
        </div>
    </div>
</template>

<style scoped>
.documents_item{
    margin-top: 50px;
}
</style>