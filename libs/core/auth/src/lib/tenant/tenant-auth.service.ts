// libs/core/auth/src/lib/tenant/tenant-auth.service.ts
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { APP_CONFIG, AppConfig } from '@cardapio-online/config';
import { TenantAuthState } from '../types/tenant.state.type';
import { LoginPayload, LoginResponse } from '../types/login.type';



@Injectable({ providedIn: 'root' })
export class TenantAuthService {
  private readonly state$ = new BehaviorSubject<TenantAuthState>({
    accessToken: null,
    isAuthenticated: false,
  });

  constructor(
    private readonly http: HttpClient,
    @Inject(APP_CONFIG) private readonly cfg: AppConfig
  ) {
    const token = localStorage.getItem(this.cfg.authStorageKey);
    if (token) this.state$.next({ accessToken: token, isAuthenticated: true });
  }

  getSnapshot(): TenantAuthState {
    return this.state$.getValue();
  }

  async login(payload: LoginPayload): Promise<LoginResponse> {
    // ✅ relativo para respeitar host: ju-marmataria.localhost, blend-food.localhost...
    const res = await firstValueFrom(this.http.post<LoginResponse>('/auth/login', payload));

    localStorage.setItem(this.cfg.authStorageKey, res.token);
    this.state$.next({ accessToken: res.token, isAuthenticated: true });

    return res;
  }

  logout() {
    localStorage.removeItem(this.cfg.authStorageKey);
    this.state$.next({ accessToken: null, isAuthenticated: false });
  }
}