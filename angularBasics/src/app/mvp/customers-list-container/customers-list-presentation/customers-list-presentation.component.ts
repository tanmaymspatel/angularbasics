import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customers } from '../../model/customer.model';
import { CustomersListPresenterService } from '../customers-list-presenter/customers-list-presenter.service';

@Component({
  selector: 'app-customers-list-presentation',
  templateUrl: './customers-list-presentation.component.html',
  styleUrls: ['./customers-list-presentation.component.scss'],
  viewProviders:[CustomersListPresenterService],
  changeDetection : ChangeDetectionStrategy.OnPush
})

export class CustomersListPresentationComponent implements OnInit {

  @Input() public set customersData(value : Customers[] | null){
    console.log(value);
    this._customerData = value;
  }

  @Output() public delete: EventEmitter<number>;

  public get customersData(): Customers[] | null{
    return this._customerData;
  }


  private _customerData : Customers[] | null;
 

  constructor(
    private listPresenterService : CustomersListPresenterService
    ) { 
      this.delete = new EventEmitter();
    }

  ngOnInit(): void {
    this.deleteCustomer();
  }


  onDelete(id:number){
    // console.log(id);
    
    this.listPresenterService.onDelete(id);
  }

  deleteCustomer(){
    this.listPresenterService.delete$.subscribe((res)=>{
      // console.log(res);      
      this.delete.emit(res);      
    })
  }

}
