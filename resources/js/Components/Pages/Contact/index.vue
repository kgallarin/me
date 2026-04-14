<script setup lang="ts">
  import { computed } from 'vue';

  import { useContentStore } from '@/Store/Modules/Content';

  import { Link } from '@/Types/Props';

  import ContactHero from '@/Components/Partials/Contact/ContactHero.vue';
  import ContactForm from '@/Components/Partials/Contact/Form.vue';

  const links: Link[] = [
    {
      name: 'linkedIn',
      href: 'https://www.linkedin.com/in/kmgallarin/',
      icon: ['fab', 'linkedin'],
      class: 'text-[#0982c0]',
    },
    {
      name: 'facebook',
      href: 'https://www.facebook.com/kevin.gallarin/',
      icon: ['fab', 'facebook'],
      class: 'text-[#006AFF]',
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com/kgallarin/',
      icon: ['fab', 'instagram'],
      class: 'text-[#E4405F]',
    },
    {
      name: 'download my resume',
      href: '/assets/pdf/resume.pdf',
      icon: ['fas', 'laptop-file'],
      class: 'text-green-500',
    },
  ];

  const contentStore = useContentStore();

  contentStore.fetchContent('contact');

  const contactHeroData = computed(() => contentStore.content);
</script>

<template>
  <contact-hero :links="links" :contact-hero-data="contactHeroData" />
  <div class="flex min-h-[calc(100vh-150px)] flex-col">
    <section class="shadow-bottom flex-1 bg-gray-lighter shadow-custom-mid-inset">
      <!--	form starts-->
      <contact-form />
    </section>
  </div>
</template>
