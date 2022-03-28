import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MvpRoutingModule } from './mvp-routing.module';
import { MvpComponent } from './mvp.component';
import { CustomersFormContainerComponent } from './customers-form-container/customers-form-container.component';
import { CustomersListContainerComponent } from './customers-list-container/customers-list-container.component';
import { CustomersFormPresentationComponent } from './customers-form-container/customers-form-presentation/customers-form-presentation.component';
import { CustomersListPresentationComponent } from './customers-list-container/customers-list-presentation/customers-list-presentation.component';
import { SharedModule } from '../shared/shared.module';
import { CustomerService } from './services/customer.service';
import { FilterPresentaionComponent } from './customers-list-container/customers-list-presentation/filter-presentaion/filter-presentaion.component';



@NgModule({
  declarations: [
    MvpComponent,
    CustomersFormContainerComponent,
    CustomersListContainerComponent,
    CustomersFormPresentationComponent,
    CustomersListPresentationComponent,
    FilterPresentaionComponent
  ],
  imports: [
    CommonModule,
    MvpRoutingModule,
   SharedModule
  ],
  providers:[CustomerService]
})
export class MvpModule { }
