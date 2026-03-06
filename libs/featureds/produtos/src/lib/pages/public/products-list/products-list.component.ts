import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../data-access/products.service';

@Component({
  selector: 'lib-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  protuctService = inject(ProductsService)
  
  loadProducts() {
    this.protuctService.list().subscribe({
      next: (res) => {
        console.log('Resposta',res)
      },
      error: (err) => {
        console.log('erro', err)
      }
    })
  }
  ngOnInit(): void {
   this.loadProducts()
  }
}
