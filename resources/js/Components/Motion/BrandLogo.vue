<script setup lang="ts">
import { motion } from 'motion-v';

const props = defineProps({
    spinnerTrailColor: {
        type: String,
        default: 'border-r-[black]',
    },
    spinnerColorBorder: {
        type: String,
        default: 'border-[white]',
    },
    containerWidth: {
        type: String,
        default: 'w-10',
    },
    containerHeight: {
        type: String,
        default: 'h-10',
    },
    spinnerWidth: {
        type: String,
        default: 'w-20',
    },
    spinnerHeight: {
        type: String,
        default: 'h-20',
    }

});

</script>

<template>
    <div :class="`container ${props.containerWidth} ${props.containerHeight} relative flex justify-center items-center rounded-lg`">
        <motion.div
            :class="`absolute ${props.spinnerWidth} ${props.spinnerHeight} rounded-full will-change-transform border-2 border-solid ${props.spinnerColorBorder} ${props.spinnerTrailColor}`"
            :animate="{ transform: 'rotate(360deg)' }"
            :transition="{
                duration: 14.5,
                repeat: Infinity,
                ease: 'linear',
              }"
        />

        <img class="w-full h-full" alt="kevin gallarin" src="@images/imgkg_nb_white.png">
    </div>
</template>
