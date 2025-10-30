import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Models/product';

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  transform(products: Product[], stockFilter: string): Product[] {
    if (!products || !stockFilter || stockFilter === 'All') {
      return products;
    }
    const inStock = stockFilter === 'In Stock';
    return products.filter(product => product.inStock === inStock);
  }

}
