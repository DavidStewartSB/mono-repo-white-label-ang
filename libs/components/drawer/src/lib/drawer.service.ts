//cardapio-online\libs\components\drawer\src\lib\drawer.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type DrawerId = 'cart' | 'config' | string;

@Injectable({ providedIn: 'root' })
export class DrawerService {
private readonly openIdSubject = new BehaviorSubject<DrawerId | null>(null);

  /** observable para templates */
  readonly opened$ = this.openIdSubject.asObservable();

  /** snapshot síncrono (pra guards/eventos) */
  get openedId(): DrawerId | null {
    return this.openIdSubject.value;
  }

  open(id: DrawerId) {
    this.openIdSubject.next(id);
  }

  close() {
    this.openIdSubject.next(null);
  }

  toggle(id: DrawerId) {
    this.openIdSubject.next(this.openIdSubject.value === id ? null : id);
  }

  isOpen(id: DrawerId): boolean {
    return this.openIdSubject.value === id;
  }
}