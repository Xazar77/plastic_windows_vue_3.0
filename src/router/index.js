import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from '@/views/MainPageView.vue'



export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'windows',
      meta:{title: 'Установка пластиковых (ПВХ) окон'},
      component: MainPageView
    },
    {
      path: '/kitchens',
      name: 'kitchens',
      meta:{title: 'Шкафы-купе и кухни'},
      component: MainPageView
    },
    {
      path: '/balconies',
      name: 'balconies',
      meta:{title: 'Остекление балконов и лоджий'},
      component: MainPageView
    },
    
  ]
})
router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? "Пластиковые окна"
})


