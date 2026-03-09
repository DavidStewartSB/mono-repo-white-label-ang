import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TutorialStorageService {
private readonly prefix = 'cardapio-online:tutorial';

  isCompleted(key: string): boolean {
    return localStorage.getItem(this.buildKey(key)) === 'done';
  }

  markAsCompleted(key: string): void {
    localStorage.setItem(this.buildKey(key), 'done');
  }

  reset(key: string): void {
    localStorage.removeItem(this.buildKey(key));
  }

  private buildKey(key: string): string {
    return `${this.prefix}:${key}`;
  }
}
