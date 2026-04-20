import { CarouselConfig, FaIconSingle, FontAwesomeIconObject } from '@/Types/General';

export interface ImageDTO {
  url: string;
  alt: string;
}

export interface ProjectResponseDTO {
  id: string;
  title: string;
  description: string;
  link?: string;
  order: number;
  icon: FontAwesomeIconObject[];
  carouselSettings?: CarouselConfig;
  images: ImageDTO[];
}

export interface PaginatorInfo {
  count: number;
  currentPage: number;
  firstItem: number;
  hasMorePages: boolean;
  lastItem: number;
  lastPage: number;
  perPage: number;
  total: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  paginatorInfo: PaginatorInfo | null;
}

export interface RecommendationsResponseDTO {
  id: string;
  author: string;
  title: string;
  text: string;
  order: number;
  rating: number;
  linkedIn?: boolean;
  avatar?: ImageDTO;
}

export interface ContentSection {
  title?: string;
  text: string;
}

export interface ContentResponseDTO {
  id?: string;
  key: string;
  title: string;
  subtitle?: string;
  content: ContentSection[];
  heroImages: ImageDTO[];
  socialImages?: ImageDTO[];
}
export interface IconLinkResponseDTO {
  id: string;
  name: string;
  url: string;
  icon: FaIconSingle;
  classColor: string;
}
