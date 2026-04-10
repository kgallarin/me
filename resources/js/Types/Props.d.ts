export interface NavLink {
  label: string;
  icon: string;
  to?: string;
  emit?: string;
}

export interface Link {
  name: string;
  href: string;
  icon: string[];
  class?: string;
}
