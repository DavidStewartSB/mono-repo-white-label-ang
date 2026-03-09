import { DashboardWidgetDefinition } from "./dashboard.interfaces";

export const WIDGET_REGISTRY: DashboardWidgetDefinition[] = [
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
          description: 'Lorem ipsum dolor sit abet.',
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