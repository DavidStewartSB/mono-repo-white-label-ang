// libs/core/auth/src/lib/tenant/guards/tenant-auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { TenantAuthService } from '../tenant-auth.service';

@Injectable({ providedIn: 'root' })
export class TenantAuthGuard implements CanActivate {
  constructor(
    private readonly auth: TenantAuthService,
    private readonly router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    if (this.auth.getSnapshot().isAuthenticated) return true;
    return this.router.parseUrl('/login');
  }
}