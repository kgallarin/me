<script setup lang="ts">
  import howMe from '@images/me/how-me.png';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';

  const sections = {
    whyFrontend: {
      title: '/? why frontend',
      paragraphs: [
        `Since childhood, I've been fascinated by video games, and web UIs that transformed the way we interact
              with technology. I have used social media such as Friendster that you can modify its UI that could impress
              your friends. Apparently, it was all part of front-end development!`,
        `When starting my education journey, I was fortunate to meet my mentor(s), who introduced me to the world
              of frontend development that are mostly knowledgeable in both worlds (backend). It was like finding a
              hidden treasure, and tried my best to cope up with the different kinds of challenging problems that I can
              apply until today.`,
      ],
      image: {
        src: howMe,
        alt: 'how frontend - kevin gallarin',
      },
    },
    gists: {
      title: 'Gists about me',
      paragraphs: [
        `I'm a Manila-based developer that specializes in web development. Since 2014, I've been working on various
          projects with great minded people that have helped me grow and learn. As I'm enjoying working with different
          technologies, frameworks, and different complex problems from project requirements; it takes me to different
          kinds of stance to tackle challenges more efficiently.`,
        `Marking the longest chapter of my career, I had the opportunity to work with people from different cultures
          and backgrounds which has helped me grow as a person and as a developer with different kinds of ideas and
          perspectives.`,
      ],
    },
    facts: {
      title: 'Facts',
      items: [
        { title: 'Born and Raised', description: 'Manila, Philippines' },
        { title: 'Started my career as frontend', description: '2014 With my awesome thesis-mates in college!' },
        {
          title: 'Education',
          description:
            'Bachelor of Science in Information Technology, Specialized in Web Application Development, online tutorials, mentors, and self-learning.',
        },
        {
          title: 'Specialties',
          description: 'Front-end development, responsive design, state management, form handlings and animations.',
        },
        {
          title: 'Hobbies',
          description: 'Listening to Analog and High-res music, gaming occasionally, and playing stringed instruments.',
        },
        { title: "If I wasn't a developer", description: "I'd be an engineer." },
        { title: 'Favourite quote', description: '"Argue like you\'re right. Listen like you\'re wrong"' },
      ],
    },
    howIGotInto: {
      title: 'How I got into Web Development',
      paragraphs: [
        `Since childhood, I was an avid gamer that always curious how it works, and how pixels move around with such
          small amount of controls. Then I started to explore the trends in the browser and got into Friendster from my
          older cousins and friends. I was amazed when they have different styles of profiles unlike mine that is
          completely boring.`,
        `At the end of high school, I'm really not sure what to take, but I have a school in mind that I really wanted
          to attend to because of their exceptional engineers. I wanted to be an Electrical Engineer but overwhelmed by
          its Mathematical subjects and was afraid since my dad passed away too early to guide me through. Well yes, I
          never knew IT has a decent amount of maths too! We're not rich enough to pay for this school but my brother trusted me with his limited support. After freshman phase, I decided to
          take a gap year and continue work until I could make it to internship.`,
        `University was difficult, I was overwhelmed by the amount of work and the pressure to perform well in subjects
          due to my status as a working student. I was fortunate enough to be accepted into the university and
          surrounded by awesome and passionate classmates and friends that are advanced in using technologies that I'm
          trying to study. With these people, they pushed my limits to try and learn front-end development. They call me
          "Kevin, the frontend" as if I was knowledgeable enough (but of course not enough, yet) on the skill, and that's one of the best parts I
          consider as a pillar of my career development.`,
        `As I made it to internship, I left the job that supports my university education to pursue my passion for web. My leaders are really awesome and
          fully understood the purpose of signing up for the job. I was lucky enough to get hooked up with my thesis
          mates in a startup company that has a great minds, culture, and environment. From that point on, I learned a
          lot of techniques and different problems to solve as I grow towards web development.`,
      ],
    },
    lessons: {
      title: 'Lessons from the Journey',
      items: [
        {
          title: 'Practice, practice',
          description: `Practice is not just about coding, but also about understanding the problem and finding the best solution.
            When getting online resource as an example, don't just watch it. Try to code with the coach, it kinda sounds
            bad but as you follow along, muscle memory will kick in and you'll be able to code faster and more
            efficiently without much thinking of the syntax but focusing on the problem itself.`,
        },
        {
          title: 'Different preferences',
          description: `The code you write might be working, but it's not always the best solution. Every project or team has
            different preferences and requirements. The engineering part in coding is not just the logic, but also the
            art of problem-solving and communication. Structuring also plays a big role in refactoring for future +/-
            project features.`,
        },
        {
          title: 'Always assume there will be changes',
          description: `That's why its called development! The development process is all about iterating and improving. You will
            always encounter bugs, unexpected behavior, and new requirements. It's important to be flexible and adapt
            quickly to changes. Embrace the process and learn from every experience.`,
        },
        {
          title: 'Less is more',
          description: `More code does not always mean better code. It is always necessary to balance the functionality and
            maintainability. Over-engineering can lead to unnecessary complexity or worse "the spaghetti code" and makes
            everything harder to understand and maintain. Always keep it simple and focus on delivering value.`,
        },
        {
          title: 'Testing is the key',
          description: `Testing is the key to delivering high-quality software. It helps identify bugs, edge cases, and unexpected
            behavior without countless testing on the browser. Writing tests ensures that your code works as expected
            and prevents regressions. But be mindful of tests that the users couldn't possibly know or care about that
            will take your tests further, as they might not be relevant to the end-users' experience.`,
        },
        {
          title: 'TypeScript is your eagle eye',
          href: 'https://www.typescriptlang.org/',
          description:
            'Aside from TypeScript driving autocompletion and refactoring support that can save you time and effort, you can expect all the data transfer objects to be strongly typed, which lets your calls expect what it will receive and catch errors early in the development process. This leads to more reliable and maintainable code especially your declaration files are organized.',
        },
      ],
    },
    quote: {
      title: 'A Profane Quote from Ira Glass',
      paragraphs: [
        `" Nobody tells this to people who are beginners, I wish someone told me. All of us who do creative work, we
            get into it because we have good taste. But there is this gap. For the first couple years you make stuff,
            it’s just not that good. It’s trying to be good, it has potential, but it’s not. But your taste, the thing
            that got you into the game, is still killer.`,
        `And your taste is why your work disappoints you. A lot of people never get past this phase, they quit. Most
            people I know who do interesting, creative work went through years of this. We know our work doesn’t have
            this special thing that we want it to have. We all go through this.`,
        `And if you are just starting out or you are still in this phase, you gotta know its normal and the most
            important thing you can do is do a lot of work. Put yourself on a deadline so that every week you will
            finish one story.`,
        `It is only by going through a volume of work that you will close that gap, and your work will be as good as
            your ambitions. And I took longer to figure out how to do this than anyone I’ve ever met.`,
        'It’s gonna take awhile. It’s normal to take awhile. You’ve just gotta fight your way through. "',
      ],
    },
  };
</script>

<template>
  <section>
    <base-container>
      <div
        class="flex w-full flex-col items-center justify-between border-b border-gray-200 py-6 md:flex-row-reverse md:py-8 lg:py-16"
      >
        <div class="w-full text-balance text-primary md:w-5/12">
          <h1 class="mb-4 text-4xl capitalize tracking-tight text-tertiary md:text-4xl xl:text-6xl">
            {{ sections.whyFrontend.title }}
          </h1>

          <div class="font-proxima text-base font-light">
            <p
              v-for="(paragraph, index) in sections.whyFrontend.paragraphs"
              :key="index"
              class="leading-loose"
              :class="{ 'mt-4': index > 0 }"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div class="w-full justify-self-end pt-8 md:w-1/2">
          <img
            class="rounded-md object-cover shadow-lg"
            :src="sections.whyFrontend.image.src"
            :alt="sections.whyFrontend.image.alt"
          />
        </div>
      </div>
    </base-container>
  </section>

  <section class="shadow-bottom bg-gray-lighter shadow-custom-mid-inset">
    <base-container class="py-12 md:py-16">
      <div class="mx-auto max-w-screen-md border-b border-gray-200 pb-12">
        <h1 class="mb-6 text-4xl capitalize tracking-tight text-tertiary">
          {{ sections.gists.title }}
        </h1>

        <p
          v-for="(paragraph, index) in sections.gists.paragraphs"
          :key="index"
          :class="{ 'mb-4': index < sections.gists.paragraphs.length - 1 }"
        >
          {{ paragraph }}
        </p>
      </div>

      <div class="mx-auto max-w-screen-md border-b border-gray-200 py-12">
        <h1 class="mb-6 text-4xl capitalize tracking-tight text-tertiary">
          {{ sections.facts.title }}
        </h1>

        <div v-for="(fact, index) in sections.facts.items" :key="index" class="mb-6">
          <h2 class="mb-1 font-acumin font-semibold leading-tight">{{ fact.title }}</h2>
          <p>{{ fact.description }}</p>
        </div>
      </div>

      <div class="mx-auto max-w-screen-md border-b border-gray-200 py-12">
        <h1 class="mb-6 text-4xl capitalize tracking-tight text-tertiary">
          {{ sections.howIGotInto.title }}
        </h1>

        <p v-for="(paragraph, index) in sections.howIGotInto.paragraphs" :key="index" class="mb-6">
          {{ paragraph }}
        </p>
      </div>

      <div class="mx-auto max-w-screen-md py-12">
        <h1 class="mb-12 text-4xl capitalize tracking-tight text-tertiary">
          {{ sections.lessons.title }}
        </h1>

        <div v-for="(lesson, index) in sections.lessons.items" :key="index" class="mb-8">
          <h2 class="mb-2 font-acumin font-semibold leading-tight">
            <template v-if="lesson.href">
              <a :href="lesson.href" target="_blank" rel="noopener noreferrer" class="hover:underline">
                {{ lesson.title }}
              </a>
            </template>

            <template v-else>
              {{ lesson.title }}
            </template>
          </h2>
          <p>{{ lesson.description }}</p>
        </div>

        <div class="mb-6">
          <h2 class="mb-2 font-acumin font-semibold leading-tight">{{ sections.quote.title }}</h2>

          <p v-for="(paragraph, index) in sections.quote.paragraphs" :key="index" class="mb-6">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </base-container>
  </section>
</template>

<style scoped></style>
