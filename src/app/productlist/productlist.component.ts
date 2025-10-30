import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../Models/product';
import { ProductService } from '../product.service';
import { CategoryFilterPipe } from '../category-filter.pipe';
import { StockFilterPipe } from '../stock-filter.pipe';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-productlist',
  imports: [CommonModule, FormsModule, CategoryFilterPipe, StockFilterPipe, ProductItemComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit {
  products: Product[] = [];
  selectedCategory: string = '';
  selectedStock: string = 'All';
  categories: string[] = ['All', 'Electronics', 'Education', 'Furniture'];
  stockOptions: string[] = ['All', 'In Stock', 'Out of Stock'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
  }

  onProductDelete(productId: number): void {
    this.deleteProduct(productId);
  }
}
