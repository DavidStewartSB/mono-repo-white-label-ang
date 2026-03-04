// libs/core/auth/src/index.ts
export * from './lib/auth.module';

// ✅ exports antigos (mantém)
export * from './lib/data-access/auth.service';
export * from './lib/guards/auth.guard';

// ✅ exports novos (tenant)
export * from './lib/tenant/tenant-auth.service'
export * from './lib/tenant/guards/tenant-auth.guard'

export * from './lib/types/login.type';
export * from './lib/types/tenant.state.type';