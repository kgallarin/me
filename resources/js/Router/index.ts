// import authGuard from '@/Router/v1/Hooks/AuthGuard';
import routesV1 from '@/Router/v1/routes';
import { Router, createRouter, createWebHistory } from 'vue-router';

const router: Router = createRouter({
  history: createWebHistory(),
  routes: routesV1,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior: (): { left: number; top: number } => ({
    left: 0,
    top: 0,
  }),
});

// authGuard(router);

export default router;
