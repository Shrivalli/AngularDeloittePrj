import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmplistComponent } from '../../emplist/emplist.component';
import { EmpaddComponent } from '../../empadd/empadd.component';
import { EmpeditComponent } from '../../empedit/empedit.component';
import { roleGuard } from '../../role.guard';

const routes: Routes = [
  { path: '', component: EmplistComponent },
  { path: 'add', component: EmpaddComponent, canMatch: [roleGuard(['admin'])] },
  { path: 'edit/:id', component: EmpeditComponent, canMatch: [roleGuard(['admin'])] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
