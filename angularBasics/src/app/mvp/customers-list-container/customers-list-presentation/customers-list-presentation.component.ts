import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
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
  public dataList: Customers[];
  public isSort: boolean = false;
  public sortItems:any;

  @Input() public set customersData(value : Customers[] | null){
    console.log(value);
    if(value){
      if(!this._originalCustomersList){
        this._originalCustomersList = value;
      }
      this._customerData = value;
    }
  }

  @Output() public delete: EventEmitter<number>;

  public get customersData(): Customers[]{
    return this._customerData;
  }


  private _customerData!: Customers[];
  private _originalCustomersList : Customers[];
 

  constructor(
    private listPresenterService : CustomersListPresenterService,private cdr:ChangeDetectorRef
    ) { 
      this.delete = new EventEmitter();
      this.dataList = [];
    }

  ngOnInit(): void {
    this.deleteCustomer();
    this.getFilteredData();
  }

  public openOverlay(){
    this.listPresenterService.openFilter(this._originalCustomersList);
  }

  public onDelete(id:number){
    // console.log(id);
    
    this.listPresenterService.onDelete(id);
  }

  public deleteCustomer(){
    this.listPresenterService.delete$.subscribe((res)=>{
      // console.log(res);      
      this.delete.emit(res);      
    })
  }
  changePage(datalist:Customers[]){
    this.dataList = datalist;
    this.cdr.markForCheck();
  }

  drop(event: CdkDragDrop<Customers[]>) {
    moveItemInArray(this.dataList, event.previousIndex, event.currentIndex);
  }

  // get filtered data
  private getFilteredData(){
    this.listPresenterService.filterData$.subscribe((res)=>{
      // console.log(res);
      this._customerData = res;
      this.cdr.markForCheck();
    })
  }


  // data sorting
  sort(event:any){
    this.isSort = !this.isSort;
    this.sortItems = event.target.innerHTML;
    console.log(this.sortItems);
    
    this.listPresenterService.dataSort(this.sortItems, this.dataList, this.isSort);
  }
}


