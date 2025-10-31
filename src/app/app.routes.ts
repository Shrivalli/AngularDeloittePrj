import { Routes } from '@angular/router';
import { EmpaddComponent } from './empadd/empadd.component';
import { EmplistComponent } from './emplist/emplist.component';
import { AccountComponent } from './account/account.component';
import { EmpeditComponent } from './empedit/empedit.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FirstComponent } from './first/first.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddProductComponent } from './add-product/add-product.component';

import { authGuard } from './auth.guard';
import { roleGuard } from './role.guard';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { 
      path: 'employees', 
      loadChildren: () => import('./features/employee/employee.module').then(m => m.EmployeeModule),
      canMatch: [roleGuard(['admin', 'user'])]
    },
    { 
      path: 'products', 
      loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule),
      canMatch: [roleGuard(['admin', 'user'])]
    },
    { path: 'account', component: AccountComponent, canMatch: [roleGuard(['admin', 'user'])] },
    { path: 'first', component: FirstComponent, canMatch: [roleGuard(['admin', 'user'])] }
];
