<script setup>
   
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute()


    const pageName = computed(() => {
        return route.name
    })

    

</script>


<template>
    <nav id="navigation" class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div id="navbar-collapse" class="collapse navbar-collapse">
                <ul id="menu" class="nav navbar-nav">

                    <li :class="pageName === 'windows'? 'active': ''">
                        <router-link to="/"><i class="menu-icons menu-window"></i> Окна</router-link>
                    </li>
                    <li :class="pageName === 'balconies'? 'active': ''">
                        <router-link to="/balconies"><i class="menu-icons menu-balcony"></i> Балконы</router-link>
                    </li>
                    <li :class="pageName === 'kitchens'? 'active': ''">
                        <router-link to="/kitchens"><i class="menu-icons menu-cupboard"></i> Шкафы-купе / кухни</router-link>
                    </li>
          
                </ul>          	
            </div>
        </div>
    </nav>
</template>