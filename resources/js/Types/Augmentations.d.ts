declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<string, string, never>;
  export default component;
}

declare module '@splidejs/vue-splide';
