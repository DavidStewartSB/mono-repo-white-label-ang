import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { ProductsService } from '../../../data-access/products.service';
import { Router } from '@angular/router';
type ProductDisplayMode = 'list' | 'grid';
interface ProductItem {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  tag?: string;
}

interface ProductSection {
  id: string;
  title: string;
  display: ProductDisplayMode;
  items: ProductItem[];
}
@Component({
  selector: 'lib-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent  {
  private readonly router = inject(Router);

  protected readonly searchTerm = signal('');
  protected readonly selectedTag = signal<string>('all');
  protected readonly displayMode = signal<ProductDisplayMode>('grid');

  protected readonly sections = signal<ProductSection[]>([
    {
      id: 'bebidas',
      title: 'Bebidas',
      display: 'list',
      items: [
        {
          id: '1',
          name: 'Coca-Cola 350ml',
          price: 6.5,
          description: 'Refrigerante gelado, perfeito para acompanhar sua refeição.',
          imageUrl: 'https://placehold.co/600x600',
          tag: 'Promo',
        },
        {
          id: '2',
          name: 'Guaraná Lata',
          price: 5.5,
          description: 'Guaraná leve e refrescante para qualquer momento do dia.',
          imageUrl: 'https://placehold.co/600x600',
          tag: 'Novo',
        },
        {
          id: '3',
          name: 'Suco de Laranja',
          price: 8.9,
          description: 'Suco natural de laranja, feito na hora com frutas selecionadas.',
          imageUrl: 'https://placehold.co/600x600',
        },
        {
          id: '3',
          name: 'Suco de Laranja',
          price: 8.9,
          description: 'Suco natural de laranja, feito na hora com frutas selecionadas.',
          imageUrl: 'https://placehold.co/600x600',
        },
        {
          id: '3',
          name: 'Suco de Laranja',
          price: 8.9,
          description: 'Suco natural de laranja, feito na hora com frutas selecionadas.',
          imageUrl: 'https://placehold.co/600x600',
        },
        {
          id: '3',
          name: 'Suco de Laranja',
          price: 8.9,
          description: 'Suco natural de laranja, feito na hora com frutas selecionadas.',
          imageUrl: 'https://placehold.co/600x600',
        },
        {
          id: '3',
          name: 'Suco de Laranja',
          price: 8.9,
          description: 'Suco natural de laranja, feito na hora com frutas selecionadas.',
          imageUrl: 'https://placehold.co/600x600',
        },
        {
          id: '3',
          name: 'Suco de Laranja',
          price: 8.9,
          description: 'Suco natural de laranja, feito na hora com frutas selecionadas.',
          imageUrl: 'https://placehold.co/600x600',
        },
        {
          id: '3',
          name: 'Suco de Laranja',
          price: 8.9,
          description: 'Suco natural de laranja, feito na hora com frutas selecionadas.',
          imageUrl: 'https://placehold.co/600x600',
        },
        {
          id: '3',
          name: 'Suco de Laranja',
          price: 8.9,
          description: 'Suco natural de laranja, feito na hora com frutas selecionadas.',
          imageUrl: 'https://placehold.co/600x600',
        },
      ],
    },
    {
      id: 'combos',
      title: 'Combos',
      display: 'grid',
      items: [
        {
          id: '4',
          name: 'Combo Executivo',
          price: 28.9,
          description: 'Arroz, feijão, bife acebolado, batata frita e salada da casa.',
          imageUrl: 'https://placehold.co/600x600',
          tag: 'Mais pedido',
        },
        {
          id: '5',
          name: 'Combo Frango',
          price: 24.9,
          description: 'Arroz, feijão, filé de frango grelhado e legumes salteados.',
          imageUrl: 'https://placehold.co/600x600',
        },
        {
          id: '6',
          name: 'Combo Fit',
          price: 29.9,
          description: 'Proteína magra, mix de folhas, legumes e acompanhamento leve.',
          imageUrl: 'https://placehold.co/600x600',
          tag: 'Fit',
        },
        {
          id: '7',
          name: 'Combo Burger',
          price: 32.9,
          description: 'Hambúrguer artesanal, fritas crocantes e bebida inclusa.',
          imageUrl: 'https://placehold.co/600x600',
        },
      ],
    },
    {
      id: 'sobremesas',
      title: 'Sobremesas',
      display: 'list',
      items: [
        {
          id: '8',
          name: 'Pudim',
          price: 9.9,
          description: 'Pudim cremoso com calda artesanal e textura extremamente macia.',
          imageUrl: 'https://placehold.co/600x600',
        },
        {
          id: '9',
          name: 'Brownie',
          price: 12.9,
          description: 'Brownie intenso com casquinha crocante e interior macio.',
          imageUrl: 'https://placehold.co/600x600',
          tag: 'Chef',
        },
      ],
    },
  ]);

  protected readonly availableTags = computed(() => {
    const tags = new Set<string>();

    for (const section of this.sections()) {
      for (const item of section.items) {
        if (item.tag) {
          tags.add(item.tag);
        }
      }
    }

    return ['all', ...Array.from(tags)];
  });

  protected readonly filteredSections = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    const selectedTag = this.selectedTag();
    const displayMode = this.displayMode();

    return this.sections()
      .map((section) => {
        const filteredItems = section.items.filter((item) => {
          const matchesTerm =
            !term ||
            item.name.toLowerCase().includes(term) ||
            item.description.toLowerCase().includes(term);

          const matchesTag =
            selectedTag === 'all' || item.tag?.toLowerCase() === selectedTag.toLowerCase();

          return matchesTerm && matchesTag;
        });

        return {
          ...section,
          display: displayMode,
          items: filteredItems,
        };
      })
      .filter((section) => section.items.length > 0);
  });

  protected trackSection(_: number, section: ProductSection): string {
    return section.id;
  }

  protected trackProduct(_: number, product: ProductItem): string {
    return product.id;
  }

  protected onSearch(term: string): void {
    this.searchTerm.set(term);
  }

  protected onTagChange(tag: string): void {
    this.selectedTag.set(tag);
  }

  protected setDisplayMode(mode: ProductDisplayMode): void {
    this.displayMode.set(mode);
  }

  protected navigateToProduct(productId: string): void {
    this.router.navigate(['/products', productId]);
  }

  protected addProduct(event: Event, product: ProductItem): void {
    event.stopPropagation();
    console.log('Adicionar produto:', product);
  }

  protected addProductByIcon(event: Event, product: ProductItem): void {
    event.stopPropagation();
    console.log('Adicionar produto pelo ícone:', product);
  }
}
