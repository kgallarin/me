import { ContentResponseDTO, PaginatorInfo, ProjectResponseDTO, RecommendationsResponseDTO } from '@/Types/Responses';

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

export interface ContentState {
  content: ContentResponseDTO;
  contents: ContentResponseDTO[];
}
export interface ContentModuleContext {
  content: ContentResponseDTO;
  contents: ContentResponseDTO[];
  setLoading?: (payload: { type: 'global' | 'content'; flag: boolean }) => void;
}
