<script setup>
import { computed, ref } from 'vue'
import NavBar from '../assets/js/navbar'
import BirdIcon from './BirdIcon.vue'
const navBar = ref(new NavBar())
const isOpended = computed(() => navBar.value?.isOpendedMenuItems)
const menuBtn = () => navBar.value.click()

const onClickAway = () => navBar.value.close()
</script>

<template>
    <main class="xl:sidebar--shadow" v-click-away="onClickAway">
        <section class="container sidebar--container justify-between px-7">
            <div class="sidebar--hamburgerMenu" @click="menuBtn">
                <div class="w-full hamburgerMenu--bar" :class="[isOpended ? 'rotate-45 translate-y-2' : '']"></div>
                <div class="w-2/3 hamburgerMenu--bar" :class="[isOpended ? '-translate-x-8' : '']"></div>
                <div class="w-full hamburgerMenu--bar" :class="[isOpended ? '-rotate-45 -translate-y-2' : '']"></div>
            </div>
            <h1 class="sidebar--title fontWeight--bold">{{ navBar.siteName }}</h1>
            <div class="birdIcon z-50">
                <BirdIcon />
            </div>
        </section>
        <section class="sidebar--links fontWeight--light" :class="{ 'active': navBar.isOpendedMenuItems }">
            <ul class="sidebar--ul">
                <li class="text-center hover:transition-all hover:-translate-x-3 hover:scale-105" v-for="(item, index) in navBar.links" :key="'links' + index">
                    <a class="sidebar--a">{{ item?.name }}</a>
                </li>
            </ul>
        </section>
    </main>
</template>
<style scoped>
.container {
    height: 85px;
}
</style>