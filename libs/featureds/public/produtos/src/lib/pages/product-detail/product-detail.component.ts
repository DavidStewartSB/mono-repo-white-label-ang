import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
type OptionType = 'single' | 'multiple';

interface ProductOptionItem {
  id: string;
  label: string;
  price: number;
  selected?: boolean;
}

interface ProductOptionGroup {
  id: string;
  title: string;
  description?: string;
  required?: boolean;
  type: OptionType;
  min?: number;
  max?: number;
  items: ProductOptionItem[];
}

@Component({
  selector: 'lib-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {
  protected readonly quantity = signal(1);
  protected readonly note = signal(
    ''
  );

  protected readonly product = signal({
    id: '4',
    name: 'Combo Executivo Premium',
    category: 'Combos',
    badge: 'Mais pedido',
    rating: 4.9,
    reviews: 128,
    prepTime: '25-35 min',
    serves: '1 pessoa',
    basePrice: 28.9,
    imageUrl: 'https://placehold.co/1200x1200',
    description:
      'Um prato equilibrado, generoso e com apresentação premium. Ideal para almoço ou jantar, com proteínas selecionadas, acompanhamentos frescos e montagem pensada para entregar sabor, textura e saciedade.'
  });

  protected readonly optionGroups = signal<ProductOptionGroup[]>([
    // {
    //   id: 'proteina',
    //   title: 'Escolha a proteína',
    //   description: 'Selecione 1 opção',
    //   required: true,
    //   type: 'single',
    //   min: 1,
    //   max: 1,
    //   items: [
    //     {
    //       id: 'picanha',
    //       label: 'Picanha grelhada',
    //       price: 8,
    //       selected: true,
    //     },
    //     {
    //       id: 'frango',
    //       label: 'Frango grelhado',
    //       price: 0,
    //     },
    //     {
    //       id: 'parmegiana',
    //       label: 'Filé à parmegiana',
    //       price: 6,
    //     },
    //   ],
    // },
    {
      id: 'acompanhamentos',
      title: 'Acompanhamentos extras',
      description: 'Escolha até 2 adicionais',
      type: 'multiple',
      min: 0,
      max: 20,
      items: [
        {
          id: 'fritas',
          label: 'Batata frita crocante',
          price: 7.5,
          selected: false,
        },
        {
          id: 'salada',
          label: 'Salada da casa',
          price: 4.5,
                   selected: false,
        },
        {
          id: 'farofa',
          label: 'Farofa especial',
          price: 3.5,
          selected: false,
        },
      ],
    },
    {
      id: 'bebida',
      title: 'Bebida',
      description: 'Selecione 1 opção',
      type: 'single',
      min: 0,
      max: 20,
      items: [
        {
          id: 'coca',
          label: 'Coca-Cola 350ml',
          price: 6.5,
          selected: false,
        },
        {
          id: 'guarana',
          label: 'Guaraná lata',
          price: 5.5,
        },
        {
          id: 'suco',
          label: 'Suco natural de laranja',
          price: 8.9,
        },
      ],
    },
  ]);

  protected readonly extrasTotal = computed(() => {
    return this.optionGroups()
      .flatMap((group) => group.items)
      .filter((item) => item.selected)
      .reduce((acc, item) => acc + item.price, 0);
  });

  protected readonly unitTotal = computed(() => {
    return this.product().basePrice + this.extrasTotal();
  });

  protected readonly totalPrice = computed(() => {
    return this.unitTotal() * this.quantity();
  });

  protected decreaseQuantity(): void {
    this.quantity.update((value) => Math.max(1, value - 1));
  }

  protected increaseQuantity(): void {
    this.quantity.update((value) => value + 1);
  }

  protected formatPrice(value: number): string {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  protected onNoteInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.note.set(target.value);
  }

  protected isSelected(groupId: string, itemId: string): boolean {
    const group = this.optionGroups().find((entry) => entry.id === groupId);
    return !!group?.items.find((item) => item.id === itemId)?.selected;
  }

  protected toggleOption(groupId: string, itemId: string): void {
    this.optionGroups.update((groups) =>
      groups.map((group) => {
        if (group.id !== groupId) {
          return group;
        }

if (group.type === 'single') {
  const clickedItem = group.items.find((item) => item.id === itemId);

  if (!clickedItem) {
    return group;
  }

  const willSelect = !clickedItem.selected;

  return {
    ...group,
    items: group.items.map((item) => ({
      ...item,
      selected: item.id === itemId ? willSelect : false,
    })),
  };
}

        const selectedCount = group.items.filter((item) => item.selected).length;
        const clickedItem = group.items.find((item) => item.id === itemId);

        if (!clickedItem) {
          return group;
        }

        const willSelect = !clickedItem.selected;
        const max = group.max ?? Number.POSITIVE_INFINITY;

        if (willSelect && selectedCount >= max) {
          return group;
        }

        return {
          ...group,
          items: group.items.map((item) =>
            item.id === itemId
              ? { ...item, selected: !item.selected }
              : item
          ),
        };
      })
    );
  }
}
