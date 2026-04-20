import { BASE_TOAST_RIGHT_POS, BASE_TOAST_TOP_POS } from '@/Constants/app';

export type ToastPosition = (typeof BASE_TOAST_TOP_POS | typeof BASE_TOAST_RIGHT_POS)[number];

type FaIconSingle = string[];

export interface FontAwesomeIconObject {
  icon: FaIconSingle;
  color: string;
}

export interface CarouselConfig {
  autoplay: boolean;
  showIndicators: boolean;
  showArrows: boolean;
}
