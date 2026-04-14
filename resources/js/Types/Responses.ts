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
  icon: Array<{
    icon: string[];
    color: string;
  }>;
  carouselSettings: {
    autoplay: boolean;
    showIndicators: boolean;
    showArrows: boolean;
  };
  images: ImageDTO[];
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

export interface StoryHeroResponseDTO {
  id?: string;
  key: string;
  title: string;
  subtitle?: string;
  description: string;
  heroImages: ImageDTO[];
  socialImages?: ImageDTO[];
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
