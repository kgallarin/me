<script setup lang="ts">
  import freeMe from '@images/social_images/10.png';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import BaseImage from '@/Components/Common/BaseImage.vue';
  import ContactForm from '@/Components/Partials/Contact/Form.vue';

  const links = [
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
      href: 'https://www.instagram.com/kgallarin/',
      icon: ['fas', 'laptop-file'],
      class: 'text-green-500',
    },
  ];
</script>

<template>
  <div class="flex min-h-[calc(100vh-150px)] flex-col">
    <section>
      <base-container>
        <div
          class="flex w-full flex-col items-center justify-between border-b border-gray-200 py-6 md:flex-row md:py-8 lg:py-16"
        >
          <div class="w-full text-balance text-primary md:w-5/12">
            <h1 class="mb-4 text-6xl lowercase tracking-tight text-tertiary">$ touch</h1>
            <p class="mb-4 font-acumin text-xl font-light">Let's get in touch! 👋🏼</p>
            <p class="font-proxima text-base font-light leading-relaxed">
              Let's connect and explore how we can work together. Whether you have a question, need assistance with a
              project, or just want to chat about design, development, or anything else, I'm here to help. Feel free to
              reach out via the contact methods below, or send me an email and let's collaborate on your next project!
            </p>

            <div class="grid grid-cols-2 gap-4 pt-8">
              <a
                v-for="link in links"
                :key="link.name"
                :href="link.href"
                target="_blank"
                class="flex items-center gap-2 text-center"
                :class="[
                  link.class,
                  {
                    'mb-4': link.name === 'facebook',
                    'justify-center hover:underline': link.name === 'download my resume',
                  },
                ]"
              >
                <fa-icon :icon="link.icon" class="mr-2 text-6xl" />
                <p class="capitalize leading-tight">{{ link.name }}</p>
              </a>
            </div>
          </div>

          <div class="w-full justify-self-end pt-8 md:w-1/2">
            <base-image
              class="object-cover shadow-lg"
              rounded="rounded-md"
              :src="freeMe"
              alt="kevin gallarin, skill pie"
              show-loader
            />
          </div>
        </div>
      </base-container>

      <!--	form starts-->
      <contact-form />
    </section>
  </div>
</template>

<style scoped></style>
