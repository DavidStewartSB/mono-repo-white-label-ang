//cardapio-online\libs\featureds\admin\dashboard\src\lib\pages\dashboard\dashboard-admin.component.ts
import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { TutorialStorageService } from '../../services/tutorial-storage.service';
import { TourService } from '../../services/tour.service';
type DashboardWidgetSize = 'span-4' | 'span-6' | 'span-8';
type DashboardWidgetType = 'metrics' | 'list';
type DashboardStatusType = 'success' | 'warning' | 'danger';
interface DashboardMetricItem {
  label: string;
  value: string;
}

interface DashboardListItem {
  title: string;
  description: string;
  status: string;
  statusType: DashboardStatusType;
}

interface DashboardWidget {
  id: string;
  title: string;
  description: string;
  type: DashboardWidgetType;
  size: DashboardWidgetSize;
  tourId: string;
  metrics?: DashboardMetricItem[];
  items?: DashboardListItem[];
}

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

  protected readonly widgets: DashboardWidget[] = [
    {
      id: 'metrics',
      title: 'Métricas principais',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies velit ut blandit suscipit. Suspendisse potenti.',
      type: 'metrics',
      size: 'span-8',
      tourId: 'tour-metrics',
      metrics: [
        { label: 'Receita mensal', value: 'R$ 48k' },
        { label: 'Conversão', value: '12,8%' },
        { label: 'Tickets médios', value: 'R$ 96' },
      ],
    },
    {
      id: 'quick-actions',
      title: 'Ações rápidas',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed eros nec arcu gravida tristique.',
      type: 'list',
      size: 'span-4',
      tourId: 'tour-actions',
      items: [
        {
          title: 'Cadastrar produto',
          description: 'Lorem ipsum dolor sit amet.',
          status: 'Ativo',
          statusType: 'success',
        },
        {
          title: 'Editar preço',
          description: 'Lorem ipsum dolor sit amet.',
          status: 'Revisão',
          statusType: 'warning',
        },
        {
          title: 'Sincronizar estoque',
          description: 'Lorem ipsum dolor sit amet.',
          status: 'Atenção',
          statusType: 'danger',
        },
      ],
    },
    {
      id: 'recent-products',
      title: 'Produtos recentes',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu leo eu neque posuere tempor.',
      type: 'list',
      size: 'span-6',
      tourId: 'tour-products',
      items: [
        {
          title: 'Produto Alpha Premium',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          status: 'Publicado',
          statusType: 'success',
        },
        {
          title: 'Produto Beta Plus',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          status: 'Rascunho',
          statusType: 'warning',
        },
        {
          title: 'Produto Gamma Fit',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          status: 'Publicado',
          statusType: 'success',
        },
      ],
    },
    {
      id: 'insights',
      title: 'Insights do sistema',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere ipsum vel massa vehicula, a ullamcorper leo posuere.',
      type: 'list',
      size: 'span-6',
      tourId: 'tour-insights',
      items: [
        {
          title: 'Estoque abaixo do ideal',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          status: 'Crítico',
          statusType: 'danger',
        },
        {
          title: 'Categoria com alta saída',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          status: 'Bom',
          statusType: 'success',
        },
        {
          title: 'Preço sugerido',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          status: 'Analisar',
          statusType: 'warning',
        },
      ],
    },
  ];

  ngAfterViewInit(): void {
    queueMicrotask(() => {
      if (!this.tutorialStorageService.isCompleted('admin-dashboard-v1')) {
        this.startTutorial();
      }
    });

    this.destroyRef.onDestroy(() => {
      this.tourService.destroy();
    });
  }

  protected startTutorial(force = true): void {
    this.tourService.startDashboardTour({
      force,
      onDestroyed: () => {
        this.tutorialStorageService.markAsCompleted('admin-dashboard-v1');
      },
    });
  }

  protected markTutorialAsSeen(): void {
    this.tutorialStorageService.markAsCompleted('admin-dashboard-v1');
    this.tourService.destroy();
  }

  protected restartTutorial(): void {
    this.tutorialStorageService.reset('admin-dashboard-v1');
    this.startTutorial(true);
  }

  protected resolveBadgeClass(statusType: DashboardStatusType): string {
    return `admin-dashboard__badge--${statusType}`;
  }

  protected resolveCardClass(size: DashboardWidgetSize): string {
    return `admin-dashboard__card--${size}`;
  }
}