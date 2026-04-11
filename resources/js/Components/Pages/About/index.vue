<script setup lang="ts">
  import { ChartedSkillsResponseDTO, RecommendationsResponseDTO, TitledTextResponseDTO } from '@/Types/Responses';

  import ChartedSkills from '@/Components/Partials/About/ChartedSkills.vue';
  import GraphedSkills from '@/Components/Partials/About/GraphedSkills.vue';
  import RandomFacts from '@/Components/Partials/About/RandomFacts.vue';
  import Recommendations from '@/Components/Partials/About/Recommendations.vue';
  import Whoami from '@/Components/Partials/About/Whoami.vue';

  const testimonials: RecommendationsResponseDTO[] = [
    {
      author: 'Diego R.',
      title: 'Growth Strategist',
      image: 'diego.png',
      alt: 'Diego Jose Ramos',
      linkedIn: true,
      rating: 5,
      text: 'Kevin has a natural gift to interpret an idea or concept. His work is unique, intelligent insight and has an ability to put the right emotion to the narrative. I would always want to work with him in any projects, big or small. <br /><br />His dedication, passion, excellence in work and attitude earned my utmost respect.',
    },
    {
      author: 'Irawin P.',
      title: 'Lead UI/UX Designer',
      image: 'irawin.png',
      alt: 'Irawin Pengpitak',
      linkedIn: true,
      rating: 5,
      text: 'I have worked with many developers, but Kevin is easily one of the best partners a designer could ask for. As a Lead UX/UI Designer, I appreciate that Kevin does not just build to spec. He genuinely cares about the user experience. <br /><br />He is a guy who stays curious, constantly levels up his skills, and never backs down from a complex challenge. If you want someone who delivers pixel-perfect work and thrives on problem-solving, hire Kevin.',
    },
    {
      author: 'Brian M.',
      title: 'Senior Full-stack Developer',
      image: 'brian.png',
      alt: 'Brian Anthony Monsales',
      rating: 5,
      text: 'During the time we worked together, Kevin consistently demonstrated strong technical skills and professionalism. <br /><br />He contributed to the development and maintenance of frontend features, helping deliver clean, functional, and user-friendly interfaces.<br /><br />He was dependable on meeting deadlines and handled technical challenges with a practical and solution-oriented approach. Kevin was also a collaborative team member who communicated effectively with colleagues and worked well within the development team.<br /><br />His ability to adapt to project needs and contribute reliably made him a valuable part of the team.<br /><br />Although we are no longer affiliated with the company, I can confidently recommend Kevin for frontend development roles. I believe he will be a strong addition to any development team.',
    },
    {
      author: 'Max C.',
      title: 'Senior Software Engineer',
      image: 'max.png',
      alt: 'Max Cho',
      rating: 5,
      text: "It is my pleasure and honor to recommend Kevin for the role of Frontend Developer. I have worked with Kevin for 2 years as his superior at Intelvalue Services, where he used his skills(vanilla js, css or framework) to create amazing layout in the role of Frontend Developer.<br /><br /> I am confident that Kevin's exceptional skills, experience, and personal qualities will make hima powerful asset at Optimail. As an Frontend Developer, kevin constantly demonstrated an extensive knowledge of JS & CSS skills and techniques, as well as superb communication skills.<br /><br />During his present in Intervalue Services, he managed to reduce the amount of time tocomplete the projects(frontend part) by 50% using his expertise. Also whenever there are problems or flaws in the layout, he showcases his superb analytical qualities to quickly identify the issue and solve it.<br /><br />Kevin has my highest recommendation for this position. I have no doubt he will make a strong addition to your team.",
    },
    {
      author: 'Chang S.',
      title: 'Software Tester/Engineer',
      image: 'chang.png',
      alt: 'Chang Shenqyang',
      rating: 5,
      text: 'Kevin is a good frontend developer, we worked together in an international gaming company. As he worked independently, the page he developed was not many issues compared with the other developers<br /><br />He is a good communicator with me or other international co-workers when it comes to projects or tasks, I am glad to work with him',
    },
    {
      author: 'Nida S.',
      title: 'HR Manager',
      image: 'nida.png',
      alt: 'Nida Saetia',
      rating: 5,
      text: 'While I did not manage his technical output directly, I had the opportunity to oversee his professional journey from an HR perspective and interact with him regularly within the office environment. Throughout his time here, Mr. Kevin Morales Gallarin distinguished himself as a reliable and highly professional individual. <br /><br /> What stands out most about Mr. Kevin Morales Gallarin is his contribution to workplace harmony. He possesses a calm and collaborative demeanor that makes him a pleasure to work with. He handles his responsibilities with integrity and maintains a positive attitude that naturally improves the team dynamic. <br /><br />It was truly a nice experience getting to know him and having him as part of our staff. I am confident that his future colleagues will find the working experience with him just as pleasant as we did.',
    },
  ];
  const skills: ChartedSkillsResponseDTO = {
    leftTitle: 'Perceptive side',
    leftContent: [
      'Animation Fluidity',
      'Attention to details and typography',
      "Communicating with artist's perspective",
      'Design Feels',
      'Eye on design',
      'Finding beauty to everything',
      'User Experience',
    ],

    rightTitle: 'Developer side',
    rightContent: [
      'Front-end development',
      'Sass, LESS, S/CSS',
      'State Management',
      'Automated testing',
      'Form Manipulation',
      'JavaScript / TypeScript',
      'Laravel / GraphQL',
      'Eating Pizza',
      'Drinking Coffee',
    ],
  };
  const randomFactsContent: TitledTextResponseDTO = {
    title: 'Random Nuggets',
    text: [
      'Workout and driving is my Zen time!',
      'I love animals',
      'I love occasionally playing ARPGs',
      "I'm a bit sensitive to aesthetics",
      'I play guitar, and can sing (in tune)',
      'Analog/High-Fi audio enthusiast',
      'Always keen to adventures',
      'A bit of a clean freak',
      'Always wants improvement',
      'Loves cooking',
      'I drink a lot of coffee',
    ],
  };
</script>

<template>
  <div class="about-i">
    <whoami animate-once animate-only-scroll-down />

    <charted-skills :skills="skills" animate-once animate-only-scroll-down />

    <random-facts :facts="randomFactsContent" animate-only-scroll-down />

    <graphed-skills animate-once animate-only-scroll-down />

    <recommendations :testimonials="testimonials" animate-once animate-only-scroll-down />
  </div>
</template>
