import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { driver, Driver } from 'driver.js';
import 'driver.js/dist/driver.css';

type StartDashboardTourOptions = {
  force?: boolean;
  onDestroyed?: () => void;
};

@Injectable({
  providedIn: 'root',
})
export class TourService {
  private driverRef?: Driver;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  startDashboardTour(options?: StartDashboardTourOptions): void {
    this.destroy();

    this.driverRef = driver({
      showProgress: true,
      animate: true,
      smoothScroll: true,
      allowClose: true,
      overlayOpacity: 0.78,
      stagePadding: 10,
      disableActiveInteraction: true,
      steps: [
        {
          element: '#tour-sidebar',
          popover: {
            title: 'Menu lateral',
            description:
              'Aqui ficam os principais módulos do sistema. Em um produto real, você pode separar por domínio como dashboard, catálogo, pedidos, relatórios e configurações.',
          },
        },
        {
          element: '#tour-toolbar',
          popover: {
            title: 'Barra superior',
            description:
              'Este bloco pode concentrar pesquisa global, filtros, botões de ação rápida e atalhos como reiniciar ou ignorar o tutorial.',
          },
        },
        {
          element: '#tour-hero',
          popover: {
            title: 'Área de destaque',
            description:
              'Boa para contextualizar o usuário no primeiro acesso. Você pode explicar o objetivo da tela, mostrar CTA principal e destacar novidades do módulo.',
          },
        },
        {
          element: '#tour-kpi',
          popover: {
            title: 'Indicadores rápidos',
            description:
              'KPIs curtos ajudam o usuário a entender o estado atual do produto logo na entrada, sem precisar navegar em profundidade.',
          },
        },
        {
          element: '#tour-metrics',
          popover: {
            title: 'Métricas e gráfico',
            description:
              'Esta seção simula relatórios e evolução de dados. Depois você pode quebrar isso em widgets configuráveis.',
          },
        },
        {
          element: '#tour-actions',
          popover: {
            title: 'Ações rápidas',
            description:
              'Excelente lugar para ensinar fluxos de alta frequência, como cadastrar produto, editar preço ou sincronizar estoque.',
          },
        },
        {
          element: '#tour-products',
          popover: {
            title: 'Lista operacional',
            description:
              'Listas recentes dão senso de atividade. Você pode usar esse tipo de step para explicar status, badges e próximas ações.',
          },
        },
        {
          element: '#tour-help-card',
          popover: {
            title: 'Ajuda e reentrada do tutorial',
            description:
              'Mesmo depois do primeiro acesso, vale manter um ponto visível para reabrir o tour quando o usuário quiser revisar o sistema.',
          },
        },
      ],
      onDestroyed: () => {
        options?.onDestroyed?.();
      },
    });

    this.driverRef.drive();
  }

  destroy(): void {
    this.driverRef?.destroy();
    this.driverRef = undefined;
  }
}