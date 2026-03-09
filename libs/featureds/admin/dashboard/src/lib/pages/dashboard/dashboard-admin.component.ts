import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { TutorialStorageService } from '../../services/tutorial-storage.service';
import { TourService } from '../../services/tour.service';

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

  protected readonly metrics = [
    { label: 'Receita mensal', value: 'R$ 48k' },
    { label: 'Conversão', value: '12,8%' },
    { label: 'Tickets médios', value: 'R$ 96' },
  ];

  protected readonly quickActions = [
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
  ];

  protected readonly recentProducts = [
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
  ];

  protected readonly insights = [
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
}