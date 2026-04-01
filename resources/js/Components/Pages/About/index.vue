<script setup lang="ts">
  import Splider from '@/Components/Motion/Splider.vue';

  const socialImages = import.meta.glob<{ default: string }>('/resources/images/social_images/*.{png,jpg,jpeg,webp}', {
    eager: true,
  });

  const images = Object.values(socialImages).map((image) => image.default);
</script>

<template>
  <div class="mx-auto max-w-screen-xl">
    <section class="flex w-full items-center justify-between border-b border-gray-200">
      <div class="w-5/12 text-balance text-primary">
        <h1 class="font-acumin-bold mb-4 text-6xl tracking-tight text-tertiary">$ whoami</h1>
        <p class="mb-4 font-acumin text-xl font-light">
          I'm a frontend/software engineer from
          <br />
          ☀️ Manila, Philippines.
        </p>

        <p class="font-proxima text-base font-light leading-relaxed">
          With over a decade of experience, I bridge the gap between design and development, delivering intuitive client
          solutions with a natural instinct for the designer’s perspective. When I’m stepping away from the syntax, I
          enjoy spending time working out, gaming occasionally, exploring places, listening to music, cooking and
          learning new things.
        </p>
      </div>

      <div class="w-1/2 justify-self-end pt-8">
        <img class="rounded-lg object-cover shadow-lg" src="@images/me/kg_about.png" alt="kevin gallarin" />
      </div>
    </section>

    <section class="image-gallery py-2">
      <splider
        :items="images"
        :autoplay="true"
        :interval="8000"
        :show-indicators="true"
        :show-arrows="false"
        :items-to-show="8"
        fixed-height="100px"
      />
    </section>
  </div>
</template>

<style lang="scss">
  .image-gallery {
    img {
      @apply rounded-md border border-gray-300 p-[2px];
    }
  }
</style>
