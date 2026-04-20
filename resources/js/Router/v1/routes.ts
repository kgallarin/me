const PublicLayout = (): Promise<typeof import('@/Layouts/Public/index.vue')> => import('@/Layouts/Public/index.vue');

const About = (): Promise<typeof import('@/Components/Pages/About/index.vue')> =>
  import('@/Components/Pages/About/index.vue');
const Contact = (): Promise<typeof import('@/Components/Pages/Contact/index.vue')> =>
  import('@/Components/Pages/Contact/index.vue');
const Home = (): Promise<typeof import('@/Components/Pages/Home/index.vue')> =>
  import('@/Components/Pages/Home/index.vue');
const NotFound = (): Promise<typeof import('@/Components/Pages/NotFound/index.vue')> =>
  import('@/Components/Pages/NotFound/index.vue');
const Story = (): Promise<typeof import('@/Components/Pages/Story/index.vue')> =>
  import('@/Components/Pages/Story/index.vue');

// view:public routes
const publicRoutes = [
  {
    path: '/',
    redirect: { name: 'home' },
    component: PublicLayout,
    guest: true,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: {
          guest: true,
          title: 'home',
        },
      },
      {
        path: 'about',
        name: 'about',
        component: About,
        meta: {
          guest: true,
          title: 'whoami',
        },
      },
      {
        path: 'story',
        name: 'story',
        component: Story,
        meta: {
          guest: true,
          title: 'how',
        },
      },
      {
        path: 'contact',
        name: 'contact',
        component: Contact,
        meta: {
          guest: true,
          title: 'how',
        },
      },
    ],
  },

  // {
  //     path: 'somtWentWrong',
  //     name: '',
  //     component: PublicLayout,
  //     // component: Oops,
  //     meta: {
  //         title: 'Something went wrong',
  //     },
  // },
  {
    path: '/:pathMatch(.*)*',
    name: 'Page not found',
    component: NotFound,
    meta: {
      mobileTitle: '404 Not Found',
    },
  },
];

export default [...publicRoutes];
