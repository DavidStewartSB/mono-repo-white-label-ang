import { ApplicationRef, ComponentRef, createComponent, Directive, ElementRef, HostListener, Inject, Input, OnDestroy, Renderer2 } from '@angular/core';
import { TooltipPosition } from '../utils/tooltip-position.type';
import { DOCUMENT } from '@angular/common';
import { UiTooltipComponent } from './ui-tooltip.component';

@Directive({
  selector: '[libTooltip]',
})
export class TooltipDirective implements OnDestroy {
  @Input() tooltipMessage = '';
  @Input() tooltipDisabled = false;
  @Input() tooltipHideDelay = 100;
  @Input() tooltipShowDelay = 150;
  @Input() tooltipPosition: TooltipPosition = 'top';
  @Input() tooltipClass: any;

  private tooltipRef?: ComponentRef<UiTooltipComponent>;
  private showTimeoutId?: ReturnType<typeof setTimeout>;
  private hideTimeoutId?: ReturnType<typeof setTimeout>;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly appRef: ApplicationRef,
    private readonly renderer: Renderer2,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  @HostListener('mouseenter')
  @HostListener('focusin')
  onMouseEnter(): void {
    if (this.tooltipDisabled || !this.tooltipMessage?.trim()) return;

    this.clearHideTimeout();
    this.clearShowTimeout();

    this.showTimeoutId = setTimeout(() => {
      this.showTooltip();
    }, this.tooltipShowDelay);
  }

  @HostListener('mouseleave')
  @HostListener('blur')
  onMouseLeave(): void {
    this.clearShowTimeout();

    if (!this.tooltipRef) return;

    this.clearHideTimeout();
    this.hideTimeoutId = setTimeout(() => {
      this.hideTooltip();
    }, this.tooltipHideDelay);
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onViewportChange(): void {
    if (this.tooltipRef) {
      this.positionTooltip();
    }
  }

  ngOnDestroy(): void {
    this.clearShowTimeout();
    this.clearHideTimeout();
    this.hideTooltip();
  }

  private showTooltip(): void {
    if (this.tooltipRef || this.tooltipDisabled || !this.tooltipMessage?.trim()) return;

    this.tooltipRef = createComponent(UiTooltipComponent, {
      environmentInjector: this.appRef.injector,
    });

    this.tooltipRef.instance.message = this.tooltipMessage;
    this.tooltipRef.instance.position = this.tooltipPosition;
    this.tooltipRef.instance.tooltipClass = this.tooltipClass;

    this.appRef.attachView(this.tooltipRef.hostView);

    const tooltipElement = this.tooltipRef.location.nativeElement as HTMLElement;
    this.document.body.appendChild(tooltipElement);

    this.positionTooltip();

    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'aria-describedby',
      this.createTooltipId()
    );
  }

  private hideTooltip(): void {
    if (!this.tooltipRef) return;

    this.appRef.detachView(this.tooltipRef.hostView);
    this.tooltipRef.destroy();
    this.tooltipRef = undefined;

    this.renderer.removeAttribute(this.elementRef.nativeElement, 'aria-describedby');
  }

  private positionTooltip(): void {
    if (!this.tooltipRef) return;

    const host = this.elementRef.nativeElement;
    const tooltip = this.tooltipRef.location.nativeElement as HTMLElement;

    const hostRect = host.getBoundingClientRect();

    // Primeiro renderiza invisível para obter tamanho real
    tooltip.style.visibility = 'hidden';
    tooltip.style.top = '0px';
    tooltip.style.left = '0px';

    requestAnimationFrame(() => {
      const tooltipRect = tooltip.getBoundingClientRect();
      const spacing = 10;

      let top = 0;
      let left = 0;

      switch (this.tooltipPosition) {
        case 'top':
          top = hostRect.top - tooltipRect.height - spacing;
          left = hostRect.left + hostRect.width / 2 - tooltipRect.width / 2;
          break;

        case 'bottom':
          top = hostRect.bottom + spacing;
          left = hostRect.left + hostRect.width / 2 - tooltipRect.width / 2;
          break;

        case 'left':
          top = hostRect.top + hostRect.height / 2 - tooltipRect.height / 2;
          left = hostRect.left - tooltipRect.width - spacing;
          break;

        case 'right':
          top = hostRect.top + hostRect.height / 2 - tooltipRect.height / 2;
          left = hostRect.right + spacing;
          break;
      }

      const margin = 8;
      const maxLeft = window.innerWidth - tooltipRect.width - margin;
      const maxTop = window.innerHeight - tooltipRect.height - margin;

      left = Math.max(margin, Math.min(left, maxLeft));
      top = Math.max(margin, Math.min(top, maxTop));

      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top}px`;
      tooltip.style.visibility = 'visible';
    });
  }

  private clearShowTimeout(): void {
    if (this.showTimeoutId) {
      clearTimeout(this.showTimeoutId);
      this.showTimeoutId = undefined;
    }
  }

  private clearHideTimeout(): void {
    if (this.hideTimeoutId) {
      clearTimeout(this.hideTimeoutId);
      this.hideTimeoutId = undefined;
    }
  }

  private createTooltipId(): string {
    return `tooltip-${Math.random().toString(36).slice(2, 10)}`;
  }
}
