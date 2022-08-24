import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { EmployeesComponent } from './components/employees/employees.component';
import { AddComponent } from './components/employees/add/add.component';
import { EditComponent } from './components/employees/edit/edit.component';
import { DeleteComponent } from './components/employees/delete/delete.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'employees/add', component: AddComponent },
  { path: 'employees/edit/:id', component: EditComponent },
  { path: 'employees/delete/:id', component: DeleteComponent },
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
