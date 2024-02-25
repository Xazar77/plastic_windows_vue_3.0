

<script setup>
    import ReviewsItemComponent from './ReviewsItemComponent.vue';

    import { computed, ref, onUnmounted, onMounted } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore()
    let intervalId = ref(undefined)
  

    const getReviewsItems = computed(() => {

        return store.getters['getReviewsSlide']
        
    })
    const runItem = () => {
        let item = getReviewsItems.value.shift()
        getReviewsItems.value.push(item)

    }

    intervalId = setInterval(runItem, 4000)

    onMounted(() => {
        fetch('https://plastic-windows-default-rtdb.firebaseio.com/db/reviews.json')
        .then(res => res.json())
        .then((data) => {
            store.dispatch("setReviewsSlide", data);
        })
    })
    onUnmounted(() => {
        clearInterval(intervalId)
    })

</script>

<template>
    <div id="reviews" class="section">
        <div class="container">
            <div class="section-title">
                <div class="heading-image"><i class="review-ico"></i></div>
                <h2 class="heading"><span>Отзывы</span> клиентов</h2>
            </div>
            <div class="row">
                <div class="col-sm-offset-1 col-xs-12 comments-container">
                   
                    <reviews-item-component 
                        v-for="(review, index) in getReviewsItems" 
                        :key="review.id"
                        :review="review"
                        :index="index"
                    
                    />

                </div>
            </div>
        </div>
    </div>
</template>