import { getProjects } from '@/Api/Projects';
import { defineStore } from 'pinia';

import { ProjectsModuleContext, ProjectsState } from '@/Types/Modules';
import { PaginationParams } from '@/Types/Parameters';

const state = (): ProjectsState => ({
  projects: [],
  paginatorInfo: null,
});

const getters = {};

const mutations = {};

const actions = {
  async fetchProjects(this: ProjectsModuleContext, params: PaginationParams = {}): Promise<void> {
    this.setLoading?.({ type: 'projects', flag: true });
    try {
      const response = await getProjects(params);
      this.projects = response.data;
      this.paginatorInfo = response.paginatorInfo;
    } catch (error) {
      return Promise.reject(error);
    } finally {
      this.setLoading?.({ type: 'projects', flag: false });
    }
  },
};

export const useProjectsStore = defineStore('projects', {
  state,
  getters,
  actions: {
    ...actions,
    ...mutations,
  },
});
