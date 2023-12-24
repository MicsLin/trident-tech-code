<script setup>
import { ref } from 'vue'
import NavBar from '../assets/js/navbar'
import BirdIcon from './BirdIcon.vue'
const navBar = ref(new NavBar())
</script>

<template>
    <main>
        <section class="container relative sidebar--container justify-center">
            <h1 class="sidebar--title fontWeight--bold">{{ navBar.siteName }}</h1>
            <div class="birdIcon absolute -right-12 z-50">
                <BirdIcon />
            </div>
        </section>
        <section class="sidebar--links fontWeight--light">
            <ul class="sidebar--ul">
                <li class="text-center" v-for="(item, index) in navBar.links" :key="'links' + index">
                    <a class="sidebar--a">{{ item?.name }}</a>
                </li>
            </ul>
        </section>
    </main>
</template>
<style scoped>
.container {
    height: 195px;
    position: relative;
}
</style>