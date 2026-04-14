import { getStoryHeroByKey, getStoryHeroes } from '@/Api/StoryHero';
import { defineStore } from 'pinia';

import { StoryHeroModuleContext, StoryHeroState } from '@/Types/Modules';
import { StoryHeroResponseDTO } from '@/Types/Responses';

const state = (): StoryHeroState => ({
  storyHero: {
    title: '',
    key: '',
    description: '',
    subtitle: '',
    heroImages: [],
    socialImages: [],
  },
  storyHeroes: [],
});

const mutations = {};
const getters = {
  getStoryHeroes: (state: StoryHeroState): StoryHeroResponseDTO[] => state.storyHeroes,
  getStoryHero: (state: StoryHeroState): StoryHeroResponseDTO => state.storyHero,
};
const actions = {
  async fetchStoryHeroes(this: StoryHeroModuleContext): Promise<void> {
    this.setLoading?.({ type: 'storyHero', flag: true });
    try {
      this.storyHeroes = await getStoryHeroes();
    } catch (error) {
      throw error;
    } finally {
      this.setLoading?.({ type: 'storyHero', flag: false });
    }
  },

  async fetchStoryHero(this: StoryHeroModuleContext, key: string): Promise<void> {
    this.setLoading?.({ type: 'storyHero', flag: true });
    try {
      this.storyHero = await getStoryHeroByKey(key);
    } catch (error) {
      throw error;
    } finally {
      this.setLoading?.({ type: 'storyHero', flag: false });
    }
  },
};

export const useStoryHeroStore = defineStore('storyHero', {
  state,
  getters,
  actions: {
    ...actions,
    ...mutations,
  },
});
