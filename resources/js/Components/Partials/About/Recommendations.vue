<script setup lang="ts">
  import { FontAwesomeIcon as FaIcon } from '@fortawesome/vue-fontawesome';

  import { ref } from 'vue';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import BaseImage from '@/Components/Common/BaseImage.vue';
  import ScrollReveal from '@/Components/Motion/ScrollReveal.vue';

  const expandedIndexes = ref<number[]>([]);

  const toggleExpand = (index: number) => {
    if (expandedIndexes.value.includes(index)) {
      expandedIndexes.value = expandedIndexes.value.filter((i) => i !== index);
    } else {
      expandedIndexes.value.push(index);
    }
  };

  const isExpanded = (index: number) => expandedIndexes.value.includes(index);

  const recommendations = [
    {
      author: 'Brian M.',
      role: 'Full-stack developer',
      image: 'brian.png',
      alt: 'brian monsales',
      rating: 5,
      text: 'During the time we worked together, Kevin consistently demonstrated strong technical skills and professionalism. <br /><br />He contributed to the development and maintenance of frontend features, helping deliver clean, functional, and user-friendly interfaces.<br /><br />He was dependable on meeting deadlines and handled technical challenges with a practical and solution-oriented approach. Kevin was also a collaborative team member who communicated effectively with colleagues and worked well within the development team.<br /><br />His ability to adapt to project needs and contribute reliably made him a valuable part of the team.<br /><br />Although we are no longer affiliated with the company, I can confidently recommend Kevin for frontend development roles. I believe he will be a strong addition to any development team.',
    },

    {
      author: 'Diego R.',
      role: 'Growth Strategist',
      image: 'diego.png',
      alt: 'brian monsales',
      linkedIn: true,
      rating: 5,
      text: 'Kevin has a natural gift to interpret an idea or concept. His work is unique, intelligent insight and has an ability to put the right emotion to the narrative. I would always want to work with him in any projects, big or small. <br /><br />His dedication, passion, excellence in work and attitude earned my utmost respect.',
    },

    {
      author: 'Nida S.',
      role: 'HR Manager',
      image: 'nida.png',
      alt: 'brian monsales',
      rating: 5,
      text: 'While I did not manage his technical output directly, I had the opportunity to oversee his professional journey from an HR perspective and interact with him regularly within the office environment. Throughout his time here, Mr. Kevin Morales Gallarin distinguished himself as a reliable and highly professional individual. <br /><br /> What stands out most about Mr. Kevin Morales Gallarin is his contribution to workplace harmony. He possesses a calm and collaborative demeanor that makes him a pleasure to work with. He handles his responsibilities with integrity and maintains a positive attitude that naturally improves the team dynamic. <br /><br />It was truly a nice experience getting to know him and having him as part of our staff. I am confident that his future colleagues will find the working experience with him just as pleasant as we did.',
    },

    {
      author: 'Irawin P.',
      role: 'Lead UI/UX Designer',
      image: 'irawin.png',
      alt: 'brian monsales',
      linkedIn: true,
      rating: 5,
      text: 'I have worked with many developers, but Kevin is easily one of the best partners a designer could ask for. As a Lead UX/UI Designer, I appreciate that Kevin does not just build to spec. He genuinely cares about the user experience. <br /><br />He is a guy who stays curious, constantly levels up his skills, and never backs down from a complex challenge. If you want someone who delivers pixel-perfect work and thrives on problem-solving, hire Kevin.',
    },
  ];

  const images = import.meta.glob<{ default: string }>('/resources/images/kudos/*.{png,jpg,jpeg,webp}', {
    eager: true,
  });

  const getImageUrl = (name: string) => images[`/resources/images/kudos/${name}`]?.default || '';

  defineProps({
    animateOnce: {
      type: Boolean,
      default: false,
    },
    animateOnlyScrollDown: {
      type: Boolean,
      default: false,
    },
  });
</script>

<template>
  <section>
    <base-container class="pb-24">
      <scroll-reveal direction="up" :animate-once="animateOnce" :animate-only-scroll-down="animateOnlyScrollDown">
        <h2 class="pt-24 font-proxima text-4xl font-light">Kudos</h2>
        <p class="font-acumin text-xs font-light">from my highly respected people</p>
      </scroll-reveal>

      <div class="mb-12 grid grid-cols-1 gap-2 pt-12 md:grid-cols-3 lg:grid-cols-4">
        <scroll-reveal
          v-for="(recommendation, index) in recommendations"
          :key="index"
          direction="up"
          :delay="index * 0.1"
          :animate-once="animateOnce"
          :animate-only-scroll-down="animateOnlyScrollDown"
        >
          <div
            class="main-card relative flex flex-col rounded-md border border-gray-200 p-4 py-8 text-primary shadow-md"
            :class="
              isExpanded(index)
                ? 'max-h-fit max-w-full md:max-w-[300px]'
                : 'h-[300px] max-w-full overflow-hidden pb-12 md:max-w-[300px]'
            "
          >
            <fa-icon
              v-if="recommendation.linkedIn"
              class="absolute right-3 top-3 text-[#0982c0]"
              :icon="['fab', 'linkedin']"
            />
            <div class="flex justify-between border-b border-gray-200 pb-4">
              <div class="author flex flex-row items-center gap-3 leading-tight">
                <base-image
                  :src="getImageUrl(recommendation.image)"
                  class="h-12 w-12 object-contain"
                  rounded="rounded-full"
                  :alt="recommendation.alt"
                />
                <div class="flex flex-col text-left">
                  <p class="mb-0 leading-tight">{{ recommendation.author }}</p>
                  <p class="text-xs">{{ recommendation.role }}</p>
                </div>
              </div>

              <div>
                <fa-icon
                  v-for="i in recommendation.rating"
                  :key="i"
                  class="inline-block text-xs text-yellow-400"
                  :icon="['fas', 'star']"
                />
              </div>
            </div>

            <p class="text-content pb-4 pt-8 leading-relaxed" v-html="recommendation.text" />

            <div
              v-if="!isExpanded(index)"
              class="absolute bottom-0 left-0 flex w-full justify-center bg-gradient-to-t from-white via-white/80 to-transparent pb-4 pt-12"
            >
              <button class="text-xs font-semibold text-blue-500 hover:underline" @click="toggleExpand(index)">
                read more
              </button>
            </div>

            <div v-else class="mt-auto flex justify-center pb-4">
              <button class="text-xs font-semibold text-blue-500 hover:underline" @click="toggleExpand(index)">
                show less
              </button>
            </div>
          </div>
        </scroll-reveal>
      </div>
    </base-container>
  </section>
</template>

<style lang="scss" scoped>
  .text-content {
    position: relative;
    &:before,
    &:after {
      font-size: 2.5rem;
      line-height: 0;
    }

    &:before {
      content: open-quote;
      top: 0;
      left: 0;
    }

    &:after {
      position: absolute;
      right: 0;
      bottom: 0px;
      content: close-quote;
    }
  }
</style>
