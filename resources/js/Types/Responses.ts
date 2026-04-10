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

export interface RecommendationsResponseDTO {
  author: string;
  image: string;
  alt: string;
  rating: number;
  title: string;
  text: string;
  linkedIn?: boolean;
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
