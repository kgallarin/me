import { vi } from 'vitest';

vi.mock('@/Layouts/Public/index.vue', (): { default: { template: string } } => ({
  default: { template: '<div><router-view /></div>' },
}));

vi.mock('@/Components/Pages/Home/index.vue', (): { default: { template: string } } => ({
  default: { template: '<div>Home</div>' },
}));

vi.mock('@/Components/Pages/About/index.vue', (): { default: { template: string } } => ({
  default: { template: '<div>About</div>' },
}));

vi.mock('@/Components/Pages/Story/index.vue', (): { default: { template: string } } => ({
  default: { template: '<div>Story</div>' },
}));

vi.mock('@/Components/Pages/Contact/index.vue', (): { default: { template: string } } => ({
  default: { template: '<div>Contact</div>' },
}));

vi.mock('@/Components/Pages/NotFound/index.vue', (): { default: { template: string } } => ({
  default: { template: '<div>Not Found</div>' },
}));
