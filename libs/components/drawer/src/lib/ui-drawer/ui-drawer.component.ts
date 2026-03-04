import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { distinctUntilChanged, map, Subscription } from 'rxjs';
import { DrawerId, DrawerService } from '../drawer.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'lib-ui-drawer',
  templateUrl: './ui-drawer.component.html',
  styleUrl: './ui-drawer.component.scss',
})
export class UiDrawerComponent  implements OnInit, OnDestroy {
  @Input({ required: true }) id!: DrawerId;
  @Input() title = '';

  /** stream “isOpen” para template */
  isOpen$ = this.drawer.opened$.pipe(
    map(openId => openId === this.id),
    distinctUntilChanged()
  );

  private sub?: Subscription;
  private prevOverflow = '';

  constructor(
    private readonly drawer: DrawerService,
    @Inject(DOCUMENT) private readonly doc: Document
  ) {}

  ngOnInit(): void {
    // trava scroll quando abrir
    this.sub = this.isOpen$.subscribe((open) => {
      const body = this.doc.body;
      if (open) {
        this.prevOverflow = body.style.overflow;
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = this.prevOverflow || '';
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.doc.body.style.overflow = this.prevOverflow || '';
  }

  close() {
    this.drawer.close();
  }

  onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') this.close();
  }
}