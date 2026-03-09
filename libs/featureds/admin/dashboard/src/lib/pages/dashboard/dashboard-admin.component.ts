//cardapio-online\libs\featureds\admin\dashboard\src\lib\pages\dashboard\dashboard-admin.component.ts
import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { ONBOARDING_RESTART_EVENT, TourService, TutorialStorageService } from '@cardapio-online/onboarding';
import { DASHBOARD_ADMIN_TOUR_KEY, DASHBOARD_ADMIN_TOUR_STEPS } from '../../utils/dashboard-admin-tour';
import { WIDGET_REGISTRY } from '../../utils/dashboard-widget.registry';
import { DashboardWidgetDefinition } from '../../utils/dashboard.interfaces';
import { DashboardStatusType, DashboardWidgetSize } from '../../utils/dashboard.types';

@Component({
  selector: 'lib-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardAdminComponent implements AfterViewInit {
  private readonly tutorialStorageService = inject(TutorialStorageService);
  private readonly tourService = inject(TourService);
  private readonly destroyRef = inject(DestroyRef);

  private readonly widgetVisibilityStorageKey =
    'cardapio-online:dashboard-admin:widgets:v1';

  protected readonly widgetRegistry: DashboardWidgetDefinition[] = WIDGET_REGISTRY

  protected widgets: DashboardWidgetDefinition[] = [];
  protected widgetVisibility: Record<string, boolean> = {};

  private readonly restartTutorialHandler = (): void => {
    this.restartTutorial();
  };

  ngOnInit(): void {
    this.widgetVisibility = this.loadWidgetVisibility();
    this.syncVisibleWidgets();

    window.addEventListener(
      ONBOARDING_RESTART_EVENT,
      this.restartTutorialHandler as EventListener
    );
  }

  ngAfterViewInit(): void {
    queueMicrotask(() => {
      if (!this.tutorialStorageService.isCompleted(DASHBOARD_ADMIN_TOUR_KEY)) {
        this.startTutorial();
      }
    });

    this.destroyRef.onDestroy(() => {
      this.tourService.destroy();
      window.removeEventListener(
        ONBOARDING_RESTART_EVENT,
        this.restartTutorialHandler as EventListener
      );
    });
  }

  protected startTutorial(): void {
    this.tourService.start({
      steps: DASHBOARD_ADMIN_TOUR_STEPS,
      onDestroyed: () => {
        this.tutorialStorageService.markAsCompleted(DASHBOARD_ADMIN_TOUR_KEY);
      },
    });
  }

  protected markTutorialAsSeen(): void {
    this.tutorialStorageService.markAsCompleted(DASHBOARD_ADMIN_TOUR_KEY);
    this.tourService.destroy();
  }

  protected restartTutorial(): void {
    this.tutorialStorageService.reset(DASHBOARD_ADMIN_TOUR_KEY);
    this.startTutorial();
  }

  protected resolveBadgeClass(statusType: DashboardStatusType): string {
    return `admin-dashboard__badge--${statusType}`;
  }

  protected resolveCardClass(size: DashboardWidgetSize): string {
    return `admin-dashboard__card--${size}`;
  }

  protected isWidgetVisible(widgetId: string): boolean {
    return this.widgetVisibility[widgetId] !== false;
  }

  protected toggleWidgetVisibility(widgetId: string): void {
    this.widgetVisibility = {
      ...this.widgetVisibility,
      [widgetId]: !this.isWidgetVisible(widgetId),
    };

    this.persistWidgetVisibility();
    this.syncVisibleWidgets();
  }

  protected resetWidgetVisibility(): void {
    this.widgetVisibility = this.createDefaultWidgetVisibility();
    this.persistWidgetVisibility();
    this.syncVisibleWidgets();
  }

  private syncVisibleWidgets(): void {
    this.widgets = this.widgetRegistry.filter((widget) =>
      this.isWidgetVisible(widget.id)
    );
  }

  private loadWidgetVisibility(): Record<string, boolean> {
    const defaults = this.createDefaultWidgetVisibility();

    try {
      const raw = localStorage.getItem(this.widgetVisibilityStorageKey);

      if (!raw) {
        return defaults;
      }

      const parsed = JSON.parse(raw) as Record<string, boolean>;

      return {
        ...defaults,
        ...parsed,
      };
    } catch {
      return defaults;
    }
  }

  private persistWidgetVisibility(): void {
    localStorage.setItem(
      this.widgetVisibilityStorageKey,
      JSON.stringify(this.widgetVisibility)
    );
  }

  private createDefaultWidgetVisibility(): Record<string, boolean> {
    return this.widgetRegistry.reduce<Record<string, boolean>>((acc, widget) => {
      acc[widget.id] = true;
      return acc;
    }, {});
  }
}