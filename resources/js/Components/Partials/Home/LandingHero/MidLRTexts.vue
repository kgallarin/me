<script setup lang="ts"></script>

<template>
  <div
    class="absolute left-0 right-0 z-10 mx-auto flex h-full w-full items-center justify-between px-2 pb-28 text-black sm:px-4 md:px-8 lg:max-w-screen-lg xl:max-w-screen-xl"
  >
    <div>
      <h3 class="font-proxima-bold 2xs:text-xl xs:text-2xl sm:text-4xl md:mb-1 lg:mb-3 xl:text-6xl">perceptive</h3>
      <p
        class="shadow-thickens mr-auto hidden text-left font-light md:inline-block md:text-sm lg:w-3/4 lg:text-xl xl:w-5/6"
      >
        an eye for design, feel<span class="md:hidden xl:inline-block">and attention to detail</span>
      </p>
    </div>

    <div>
      <h3 class="font-proxima-bold 2xs:text-xl text-right xs:text-2xl sm:text-4xl md:mb-1 lg:mb-3 xl:text-6xl">
        {{ '<coding />' }}
      </h3>
      <p
        class="shadow-thickens ml-auto hidden pl-2 text-right font-light md:inline-block md:text-sm lg:text-xl xl:w-5/6"
      >
        testing <span class="md:hidden xl:inline-block">, readability </span> <br class="md:hidden xl:inline-block" />
        and maintainability
      </p>
    </div>
  </div>
</template>
