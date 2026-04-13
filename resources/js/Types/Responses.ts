import { CarouselConfig, FontAwesomeIconObject } from '@/Types/General';

export interface ProjectResponseDTO {
  title: string;
  description: string;
  // @todo
  images: string[];
  icons: FontAwesomeIconObject[];
  carousel: CarouselConfig;
  link?: string;
}

export interface ChartedSkillsResponseDTO {
  leftTitle: string;
  rightTitle: string;
  leftContent: string[];
  rightContent: string[];
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
  paginatorInfo: PaginatorInfo;
}

export interface RecommendationsResponseDTO {
  id: string;
  author: string;
  title: string;
  text: string;
  rating: number;
  linkedIn?: boolean;
  avatar?: {
    url: string;
    alt: string;
  };
}

export interface StoryHero {
  title: string;
  paragraphs: string[];
  image: imageDTO;
}

export interface TitledParagraphsDTO {
  title: string;
  paragraphs: string[];
}

export interface ContentItemDTO {
  title: string;
  description: string;
  href?: string;
}

export interface TitledTextResponseDTO {
  title: string;
  text: string[];
}
export interface TitledContentDTO {
  title: string;
  items: ContentItemDTO[];
}

export interface imageDTO {
  src: string;
  alt: string;
}
