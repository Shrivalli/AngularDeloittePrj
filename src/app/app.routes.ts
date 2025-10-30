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
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { authGuard } from './auth.guard';
import { roleGuard } from './role.guard';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'employees', component: EmplistComponent, canMatch: [roleGuard(['admin', 'user'])] },
    { path: 'products', component: ProductlistComponent, canMatch: [roleGuard([ 'admin','user'])] },
    { path: 'product/:id', component: ProductDetailComponent, canMatch: [roleGuard(['admin','user'])] },
    { path: 'account', component: AccountComponent, canMatch: [roleGuard(['admin', 'user'])] },
    { path: 'first', component: FirstComponent, canMatch: [roleGuard(['admin', 'user'])] },
    { path: 'empadd', component: EmpaddComponent, canMatch: [roleGuard(['admin'])] },
    { path: 'empedit/:id', component: EmpeditComponent, canMatch: [roleGuard(['admin'])] }
];
