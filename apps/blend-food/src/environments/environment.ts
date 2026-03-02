// apps/blend-food/src/environments/environment.ts
export const environment = {
  name: 'local',
  production: false,
  apiBaseUrl: 'http://localhost:3000',
  authStorageKey: 'blend-food.auth',
} as const;