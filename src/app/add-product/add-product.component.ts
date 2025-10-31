import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../../Models/product';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  productForm: FormGroup;
  categories = ['Electronics', 'Education', 'Furniture'];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    public router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      price: ['', [Validators.required, Validators.min(0.01)]],
      category: ['', Validators.required],
      inStock: [true]
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const newProduct: Product = {
        id: Math.floor(Math.random() * 10000) + 1,
        ...this.productForm.value
      };
      this.productService.addProduct(newProduct);
      this.router.navigate(['/products']);
    }
  }

  get name() { return this.productForm.get('name'); }
  get price() { return this.productForm.get('price'); }
  get category() { return this.productForm.get('category'); }
}
