//cardapio-online\libs\core\onboarding\src\lib\services\tour.service.ts
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { driver, Driver } from 'driver.js';
import { OnboardingTourOptions } from '../models/onboarding-tour-options.model';

@Injectable({
  providedIn: 'root'
})
export class TourService {
 private driverRef?: Driver;

  start(options: OnboardingTourOptions): void {
    this.destroy();

    const validSteps = options.steps.filter((step) =>
      typeof step.element === 'string' ? !!document.querySelector(step.element) : false
    );

    if (!validSteps.length) {
      return;
    }

    this.driverRef = driver({
      showProgress: options.showProgress ?? true,
      animate: true,
      smoothScroll: true,
      allowClose: options.allowClose ?? true,
      overlayOpacity: options.overlayOpacity ?? 0.78,
      stagePadding: options.stagePadding ?? 10,
      disableActiveInteraction: options.disableActiveInteraction ?? true,
      steps: validSteps,
      onDestroyed: () => {
        options.onDestroyed?.();
      },
    });

    this.driverRef.drive();
  }

  destroy(): void {
    this.driverRef?.destroy();
    this.driverRef = undefined;
  }

  isActive(): boolean {
    return !!this.driverRef;
  }
}
