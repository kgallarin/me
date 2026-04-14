import { PaginatorInfo, ProjectResponseDTO, RecommendationsResponseDTO, StoryHeroResponseDTO } from '@/Types/Responses';

// recommendations
export interface RecommendationsState {
  recommendations: RecommendationsResponseDTO[];
  paginatorInfo: PaginatorInfo | null;
}
export interface RecommendationsModuleContext {
  recommendations: RecommendationsResponseDTO[];
  paginatorInfo: PaginatorInfo | null;
  setLoading?: (payload: { type: 'global' | 'recommendations'; flag: boolean }) => void;
}

// projects
export interface ProjectsState {
  projects: ProjectResponseDTO[];
  paginatorInfo: PaginatorInfo | null;
}

export interface ProjectsModuleContext {
  projects: ProjectResponseDTO[];
  paginatorInfo: PaginatorInfo | null;
  setLoading?: (payload: { type: 'global' | 'projects'; flag: boolean }) => void;
}

export interface StoryHeroState {
  storyHero: StoryHeroResponseDTO;
  storyHeroes: StoryHeroResponseDTO[];
}
export interface StoryHeroModuleContext {
  storyHero: StoryHeroResponseDTO;
  storyHeroes: StoryHeroResponseDTO[];
  setLoading?: (payload: { type: 'global' | 'storyHero'; flag: boolean }) => void;
}
