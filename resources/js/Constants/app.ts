export const STORAGE_KEYS = {
  THEME: 'theme',
  AUTH_TOKEN: 'jwt:auth_token',
} as const;
export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];

export const API = {
  TIMEOUT_MS: 30_000,
} as const;

export const enum Theme {
  LIGHT = 0,
  DARK = 1,
}
