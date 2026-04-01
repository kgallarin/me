import DefaultLayout from '@/Layouts/Default/index.vue';

import About from '@/Components/Pages/About/index.vue';
import Home from '@/Components/Pages/Home/index.vue';

// view:public routes
const publicRoutes = [
  {
    path: '/',
    redirect: { name: 'home' },
    component: DefaultLayout,
    guest: true,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: {
          guest: true,
          title: 'Collection',
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
  // {
  //     path: '/:pathMatch(.*)*',
  //     name: 'not-found',
  //     component: PublicLayout,
  //     // component: NotFound,
  //     meta: {
  //         mobileTitle: '404 Not Found',
  //     },
  // },
];

export default [...publicRoutes];
