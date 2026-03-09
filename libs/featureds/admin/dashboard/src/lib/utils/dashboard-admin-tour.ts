//cardapio-online\libs\featureds\admin\dashboard\src\lib\utils\dashboard-admin-tour.ts
import { OnboardingStep } from '@cardapio-online/onboarding';

export const DASHBOARD_ADMIN_TOUR_KEY = 'admin-dashboard-v1';

export const DASHBOARD_ADMIN_TOUR_STEPS: OnboardingStep[] = [
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
        'Este bloco concentra informações globais do ambiente, tenant, plano, pesquisa geral e ações transversais do painel.',
    },
  },
  {
    element: '#tour-theme-toggle',
    popover: {
      title: 'Alternância de tema',
      description:
        'Este botão alterna entre tema claro e escuro. A ideia é manter essa preferência persistida para o usuário.',
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
];