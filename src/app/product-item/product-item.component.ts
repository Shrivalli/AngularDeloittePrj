import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../../Models/product';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();
  showDetails: boolean = false;

  constructor(private router: Router) {}

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  onDelete(): void {
    this.deleteProduct.emit(this.product.id);
  }
}
