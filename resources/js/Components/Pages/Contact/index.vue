<script setup lang="ts">
  import { computed } from 'vue';

  import { useContentStore } from '@/Store/Modules/Content';
  import { useIconLinksStore } from '@/Store/Modules/IconLinks';

  import ContactHero from '@/Components/Partials/Contact/ContactHero.vue';
  import ContactForm from '@/Components/Partials/Contact/Form.vue';

  const contentStore = useContentStore();
  const iconLinksStore = useIconLinksStore();

  const iconLinks = computed(() => iconLinksStore.getIconLinks);

  contentStore.fetchContent('contact');

  const contactHeroData = computed(() => contentStore.content);
</script>

<template>
  <contact-hero :links="iconLinks" :contact-hero-data="contactHeroData" />
  <div class="flex flex-col">
    <section class="shadow-bottom flex-1 bg-gray-lighter shadow-custom-mid-inset">
      <!--	form starts-->
      <contact-form />
    </section>
  </div>
</template>
