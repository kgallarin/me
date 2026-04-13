import { PaginatorInfo, RecommendationDTO, RecommendationsResponseDTO } from '@/Types/Responses';

export interface RecommendationsState {
  recommendations: RecommendationsResponseDTO[];
  paginatorInfo: PaginatorInfo | null;
}
export interface RecommendationsModuleContext {
  recommendations: RecommendationDTO[];
  paginatorInfo: PaginatorInfo | null;
  setLoading?: (payload: { type: 'global' | 'recommendations'; flag: boolean }) => void;
}
