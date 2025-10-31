import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from '../../productlist/productlist.component';
import { AddProductComponent } from '../../add-product/add-product.component';
import { roleGuard } from '../../role.guard';

const routes: Routes = [
  { path: '', component: ProductlistComponent },
  { path: 'add', component: AddProductComponent, canMatch: [roleGuard(['admin'])] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
