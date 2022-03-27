import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersFormContainerComponent } from './customers-form-container/customers-form-container.component';
import { CustomersListContainerComponent } from './customers-list-container/customers-list-container.component';
import { MvpComponent } from './mvp.component';

const routes: Routes = [{
  path: '', component: MvpComponent,
  children: [
    {
      path: 'list', component: CustomersListContainerComponent,
    },
    {
      path: 'add', component: CustomersFormContainerComponent
    },
    {
      path: 'edit/:id', component: CustomersFormContainerComponent
    },
    {
      path: '', pathMatch:'full', redirectTo:'list'
    }
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MvpRoutingModule { }
