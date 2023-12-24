<script setup>
import NavbarLarge from './components/NavbarLarge.vue'
import NavbarSmall from './components/NavbarSmall.vue'
import { ref } from 'vue'

const bulbul = ref({
    title: '白頭翁 (Chinese bulbul)',
    subtitle: '又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。',
    introduction: [
        { title: '外觀', content: '白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。' },
        { title: '棲地', content: '白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。' },
        { title: '食性', content: '以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。' },
    ]
})
</script>

<template>
    <body class="Body flex xl:block">
        <nav class="sidebar flex-none">
            <div class="xl:hidden">
                <NavbarLarge />
            </div>
            <div class="hidden xl:block">
                <NavbarSmall />
            </div>
        </nav>
        <main class="flex-1">
            <section class="banner relative overflow-hidden bg-blue-400">
                <div class="banner--img">
                    <img class="w-full h-full" src="./assets/imgs/banner.png" alt="" srcset="">
                </div>
                <div class="text-white z-50">
                    <h2 class="banner--h2">{{ bulbul.title }}</h2>
                    <p class="text-right text-lg fontWeight--light">{{ bulbul.subtitle }}</p>
                </div>

            </section>
            <section class="px-12 py-14 sm:p-9 flex justify-center lg:flex-wrap gap-12">
                <article class="group" v-for="(item, index) in bulbul.introduction" :key="'introduction' + index">
                    <h2 class="group--h2">{{ item.title }}</h2>
                    <p class="text-base fontWeight--light">{{ item.content }}</p>
                </article>
            </section>
        </main>
    </body>
</template>