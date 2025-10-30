import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Models/product';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(products: Product[], category: string): Product[] {
    if (!products || !category || category.trim() === '') {
      return products;
    }
    return products.filter(product => 
      product.category.toLowerCase().includes(category.toLowerCase().trim())
    );
  }

}
