<script setup>

    import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'

    const props = defineProps({
        review: {
            type: Object,
            default: {}
        },
        index:{
            type: Number,
            required: true
        }
    })


    const getImageUrl = (name) => {
        return new URL(`/src/assets/images/users/${name}`, import.meta.url)
       
    }


</script>

<template >
    <div class="review-margin-bottom row comment-item " v-if="index < 3">
        
        <div class="col-xs-3 col-sm-2" v-if="index%2 === 0">
            <div class="review-user">
                <img 
                :src="review.img? getImageUrl(review.img) : getImageUrl('default.jpg')" 
                :alt="review.img" 
                class="img-responsive avatar">
            </div>
        </div>
        <div class="col-xs-9 col-sm-9">
            <div class="review-inner review-green review-arrow" 
                :class="index%2 === 0? 'review-green review-arrow-left': 'review-gray review-arrow-right'">
                <p class="text-normal">{{ review.name }}</p>
                <p>{{ review.description }}</p>
            </div>
        </div>
        <div class="col-xs-3 col-sm-2" v-if="index%2 !== 0">
            <div class="review-user">
                <img 
                :src="review.img? getImageUrl(review.img) : getImageUrl('default.jpg')" 
                :alt="review.img" 
                class="img-responsive avatar">
            </div>
        </div>
    </div>
</template>

<!-- v-if="index >= countStart && index <= countEnd" -->

