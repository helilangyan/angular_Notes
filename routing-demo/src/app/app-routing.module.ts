import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DapartmentOverviewComponent } from  './dapartment-overview/dapartment-overview.component';
import { DapartmentContactComponent } from './dapartment-contact/dapartment-contact.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'/departments', pathMatch: 'full'},//default path
  {path:'departments', component: DepartmentListComponent},
  {
    path:'departments/:id', 
    component: DepartmentDetailComponent,
    children:[
      {path:'overview', component: DapartmentOverviewComponent},
      {path:'contact', component: DapartmentContactComponent}
    ]
  },
  {path:'employees', component: EmployeeListComponent},
  {path:"**", component: PageNotFoundComponent}// page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DepartmentListComponent, 
                                  EmployeeListComponent,
                                  PageNotFoundComponent,
                                  DepartmentDetailComponent];
