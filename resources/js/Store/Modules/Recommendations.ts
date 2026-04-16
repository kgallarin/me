import { getRecommendations } from '@/Api/Recommendations';
import { defineStore } from 'pinia';

import { RecommendationsModuleContext, RecommendationsState } from '@/Types/Modules';

const state = (): RecommendationsState => ({
  recommendations: [],
  paginatorInfo: null,
});

const getters = {};

const mutations = {};

const actions = {
  async fetchRecommendations(this: RecommendationsModuleContext, params = {}): Promise<void> {
    this.setLoading?.({ type: 'recommendations', flag: true });
    try {
      const response = await getRecommendations(params);
      this.recommendations = response.data;
      this.paginatorInfo = response.paginatorInfo;
    } catch (error) {
      return Promise.reject(error);
    } finally {
      this.setLoading?.({ type: 'recommendations', flag: false });
    }
  },
};

export const useRecommendationsStore = defineStore('recommendations', {
  state,
  getters,
  actions: {
    ...actions,
    ...mutations,
  },
});
