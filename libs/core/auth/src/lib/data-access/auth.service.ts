import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { APP_CONFIG, AppConfig } from '@cardapio-online/config';

export type AuthState = {
  accessToken: string | null;
  isAuthenticated: boolean;
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private readonly state$ = new BehaviorSubject<AuthState>({
    accessToken: null,
    isAuthenticated: false,
  });

  constructor(@Inject(APP_CONFIG) private readonly cfg: AppConfig) {
    const token = localStorage.getItem(this.cfg.authStorageKey);
    if (token) this.state$.next({ accessToken: token, isAuthenticated: true });
  }

  getSnapshot(): AuthState {
    return this.state$.getValue();
  }

  setToken(token: string) {
    localStorage.setItem(this.cfg.authStorageKey, token);
    this.state$.next({ accessToken: token, isAuthenticated: true });
  }

  logout() {
    localStorage.removeItem(this.cfg.authStorageKey);
    this.state$.next({ accessToken: null, isAuthenticated: false });
  }
}
