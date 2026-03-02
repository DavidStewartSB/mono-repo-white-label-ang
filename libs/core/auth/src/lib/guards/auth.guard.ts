// libs/core/auth/src/lib/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../data-access/auth.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private readonly auth: AuthService, private readonly router: Router) {}

  canActivate(): boolean | UrlTree {
    if (this.auth.getSnapshot().isAuthenticated) return true;
    return this.router.parseUrl('/login');
  }
}