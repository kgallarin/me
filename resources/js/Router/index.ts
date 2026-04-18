// import authGuard from '@/Router/v1/Hooks/AuthGuard';
import { RouteLocationNormalizedGeneric, Router, createRouter, createWebHistory } from 'vue-router';

import routesV1 from '@/Router/v1/routes';

const router: Router = createRouter({
  history: createWebHistory(),
  routes: routesV1,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  scrollBehavior: (): { left: number; top: number } => ({
    left: 0,
    top: 0,
  }),
});

router.beforeEach((to: RouteLocationNormalizedGeneric): void => {
  document.title = `KGallarin | ${String(to.name || '')}`;
});

export default router;
