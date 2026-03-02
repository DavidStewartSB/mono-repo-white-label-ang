// apps/blend-food/src/environments/environment.dev.ts
export const environment = {
  name: 'dev',
  production: false,
  apiBaseUrl: 'https://dev-api.seudominio.com',
  authStorageKey: 'blend-food.auth',
} as const;