<script setup lang="ts">
  import BaseHeaderNav from '@/Components/Common/BaseHeaderNav.vue';

  const nav = [
    {
      label: 'skills',
      href: '/',
      icon: 'home',
    },
    {
      label: 'work',
      href: '/',
      icon: 'home',
    },
    {
      label: 'kudos',
      href: '/',
      icon: 'home',
    },
    {
      label: 'contact',
      href: '/',
      icon: 'home',
    },
  ];

</script>

<template>
  <section class="text-white w-full h-full">
    <base-header-nav :nav="nav" />
    <div class="overflow-hidden">
      <div>
        <div class="flex font-acumin justify-between min-h-[39rem] max-h-[16.3rem] relative">

          <div class="flex justify-between text-black absolute w-full max-w-screen-xl left-0 right-0 mx-auto h-full items-center pb-28">
            <div>
              <h3 class="font-light text-6xl text-shadow-thickens">
                perceptive
              </h3>
              <p class="text-xl font-light pl-2 w-5/6">
                an eye for design and attention to detail
              </p>
            </div>

            <div>
              <h3 class="font-light text-6xl text-shadow-thickens">
                {{ '<coding />' }}
              </h3>
              <p class="text-xl font-light pl-2 text-right w-5/6">
                testing, readability and maintainability
              </p>
            </div>
          </div>

          <!-- middle-->
          <div class="text-black justify-center align-center flex flex-col w-full relative">
            <!-- i am absolute-->
            <div class="bg-[url('@images/kg_art_1.png')] bg-contain bg-center bg-no-repeat absolute w-full h-full z-20" />
            <div class="bg-[url('@images/kg_art_3.png')] bg-contain bg-center bg-no-repeat absolute w-full h-full z-30" />

            <div class="flex flex-col w-[700px] mt-auto mx-auto mb-12 relative text-5xl font-light">
              <div class="grid justify-items-stretch grid-cols-2 gap-4 mb-2">
                <span class="justify-self-end">
                  Figma
                </span>
                <span class="justify-self-start">
                  CSS
                </span>
              </div>

              <div class="grid justify-items-stretch grid-cols-2 gap-4 -ml-20 text-5xl mb-2">
                <span class="justify-self-end">
                  Adobe
                </span>
                <span class="justify-self-start">
                  JavaScript
                </span>
              </div>

              <div class="grid justify-items-stretch grid-cols-2 gap-4 -ml-20 text-3xl mb-2">
                <span class="justify-self-end">
                  User Experience
                </span>
                <span class="justify-self-start">
                  {{ '<html lang=["en", "fil"]>' }}
                </span>
              </div>

              <div class="grid justify-items-stretch grid-cols-2 gap-4 -ml-32 text-5xl w-[950px] mb-2">
                <span class="justify-self-center">
                  Feels
                </span>
                <span class="justify-self-center">
                  Mobile
                </span>
              </div>

              <div class="grid justify-items-stretch grid-cols-2 gap-4 -ml-24 text-4xl w-[900px] mb-2">
                <span class="justify-self-center">
                  Communication
                </span>
                <span class="justify-self-center">
                  {{ '<script lang=”ts” />' }}
                </span>
              </div>

              <div class="grid justify-items-stretch grid-cols-2 gap-4 -ml-32 text-5xl w-[870px] mb-2">
                <span class="justify-self-center">
                  Detail Oriented
                </span>
                <span class="justify-self-end">
                  Web
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="bg-black w-full h-full">
      div another line
    </section>
  </section>
</template>
