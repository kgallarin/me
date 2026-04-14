import { getContentByKey, getContents } from '@/Api/Content';
import { defineStore } from 'pinia';

import { ContentModuleContext, ContentState } from '@/Types/Modules';
import { ContentResponseDTO } from '@/Types/Responses';

const state = (): ContentState => ({
  content: {
    title: '',
    key: '',
    content: [],
    subtitle: '',
    heroImages: [],
    socialImages: [],
  },
  contents: [],
});

const mutations = {};
const getters = {
  getContents: (state: ContentState): ContentResponseDTO[] => state.contents,
  getContent: (state: ContentState): ContentResponseDTO => state.content,
};
const actions = {
  async fetchContents(this: ContentModuleContext): Promise<void> {
    this.setLoading?.({ type: 'content', flag: true });
    try {
      this.contents = await getContents();
    } catch (error) {
      throw error;
    } finally {
      this.setLoading?.({ type: 'content', flag: false });
    }
  },

  async fetchContent(this: ContentModuleContext, key: string): Promise<void> {
    this.setLoading?.({ type: 'content', flag: true });
    try {
      this.content = await getContentByKey(key);
    } catch (error) {
      throw error;
    } finally {
      this.setLoading?.({ type: 'content', flag: false });
    }
  },
};

export const useContentStore = defineStore('content', {
  state,
  getters,
  actions: {
    ...actions,
    ...mutations,
  },
});
