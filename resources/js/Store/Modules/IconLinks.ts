import { getIconLinks } from '@/Api/IconLinks';
import { defineStore } from 'pinia';

import { IconLinksModuleContext, IconLinksState } from '@/Types/Modules';
import { IconLinkResponseDTO } from '@/Types/Responses';

const state = (): IconLinksState => ({
  iconLinks: [],
});

const mutations = {};
const getters = {
  getIconLinks: (state: IconLinksState): IconLinkResponseDTO[] => state.iconLinks,
  getIconLinkByName:
    (state: IconLinksState) =>
    (name: string): IconLinkResponseDTO | undefined =>
      state.iconLinks.find((link) => link.name === name),
};

const actions = {
  async fetchIconLinks(this: IconLinksModuleContext): Promise<void> {
    this.setLoading?.({ type: 'global', flag: true });
    try {
      this.iconLinks = await getIconLinks();
    } catch (error) {
      throw error;
    } finally {
      this.setLoading?.({ type: 'global', flag: false });
    }
  },
};

export const useIconLinksStore = defineStore('iconLinks', {
  state,
  getters,
  actions: {
    ...actions,
    ...mutations,
  },
});
