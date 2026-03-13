<script setup lang="ts">
 import {motion} from 'motion-v';
 import BrandLogo from '@/Components/Motion/BrandLogo.vue';
</script>

<template>
    <section class="text-white w-full h-full">
        <header class="p-2 bg-gray-950 ">
            <div class="header-inner max-w-screen-xl mx-auto flex justify-between items-center">
                <brand-logo

                    spinnerWidth="w-6"
                    spinnerHeight="h-6"

                    containerWidth="w-5"
                    containerHeight="h-5" />

                <nav>
                    <ul class="flex gap-4 text-xs">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <div class="h-12">
            <!--        <img src="@images/kg_art_1.png" class="block mx-auto h-screen" alt="">-->
            <div class="h-[calc(100vh-250px)] bg-[url('@images/kg_art_2.png')] bg-contain bg-no-repeat bg-center"></div>
        </div>
    </section>
</template>
