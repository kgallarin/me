import type {
  NavigationGuardNext,
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoaded,
  Router,
} from 'vue-router';

// import { useAuthStore } from '@/Store/Modules/Auth';

export default (router: Router): void => {
  router.beforeEach(
    async (
      to: RouteLocationNormalizedGeneric,
      from: RouteLocationNormalizedLoaded,
      next: NavigationGuardNext,
    ): Promise<void> => {
      // const auth = useAuthStore();
      // Ensure store is hydrated from server session (HttpOnly cookies) before making route decisions
      // try {
        // await (auth as unknown as { hydrateFromServer: () => Promise<void> }).hydrateFromServer();
      // } catch {
        // ignore, hydrateFromServer handles errors
      // }
      // const isUserLoggedIn = auth.isUserLoggedIn;
			const isUserLoggedIn = true;

      switch (true) {
        case Boolean(to.meta.guest):
          if (isUserLoggedIn) {
            next({
              name: 'admin.collections',
              query: { ...to.query },
              params: { ...to.params },
            });
          } else {
            next();
          }

          break;

        case Boolean(to.meta.admin):
          if (!isUserLoggedIn) {
            next({ name: 'login', query: { ...to.query } });
          } else {
            next();
          }

          break;

        default:
          next();
      }
    },
  );
};
