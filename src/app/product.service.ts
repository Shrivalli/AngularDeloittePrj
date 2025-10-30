import { Injectable } from '@angular/core';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics', inStock: true },
    { id: 2, name: 'Phone', price: 699.99, category: 'Electronics', inStock: true },
    { id: 3, name: 'Book', price: 19.99, category: 'Education', inStock: false },
    { id: 4, name: 'Chair', price: 149.99, category: 'Furniture', inStock: true },
    { id: 5, name: 'Tablet', price: 399.99, category: 'Electronics', inStock: false },
    { id: 6, name: 'Desk', price: 299.99, category: 'Furniture', inStock: true },
    { id: 7, name: 'Notebook', price: 9.99, category: 'Education', inStock: true },
    { id: 8, name: 'Monitor', price: 249.99, category: 'Electronics', inStock: false },
    { id: 9, name: 'Pen Set', price: 15.99, category: 'Education', inStock: true },
    { id: 10, name: 'Sofa', price: 799.99, category: 'Furniture', inStock: false }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  addProduct(product: Product): void {
    product.id = this.products.length + 1;
    this.products.push(product);
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }
}
