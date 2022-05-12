import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Customers } from '../../model/customer.model';
import { CustomersListPresenterService } from '../customers-list-presenter/customers-list-presenter.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customers-list-presentation',
  templateUrl: './customers-list-presentation.component.html',
  styleUrls: ['./customers-list-presentation.component.scss'],
  viewProviders: [CustomersListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomersListPresentationComponent implements OnInit {
  public dataList: Customers[];
  public isSort: boolean = false;
  public sortItems: any;
  public id: any;
  public CustomerDataById: Customers;

  @Input() public set customersData(value: Customers[] | null) {
    // console.log(value);
    if (value) {
      if (!this._originalCustomersList) {
        this._originalCustomersList = value;
      }
      this._customerData = value;
    }
  }

  @Output() public delete: EventEmitter<number>;
  @Output() public idTogetData: EventEmitter<number>;

  public get customersData(): Customers[] {
    return this._customerData;
  }


  private _customerData!: Customers[];
  private _originalCustomersList: Customers[];


  constructor(
    private listPresenterService: CustomersListPresenterService, private cdr: ChangeDetectorRef, private _customerService: CustomerService
  ) {
    this.delete = new EventEmitter();
    this.dataList = [];
    this.CustomerDataById = {} as Customers;
    this.idTogetData = new EventEmitter();
  }

  ngOnInit(): void {
    this.deleteCustomer();
    this.getFilteredData();
  }

  public openOverlay() {
    this.listPresenterService.openFilter(this._originalCustomersList);
  }

  public onDelete(id: number) {
    this.listPresenterService.onDelete(id);
  }

  public deleteCustomer() {
    this.listPresenterService.delete$.subscribe((res) => {
      // console.log(res);      
      this.delete.emit(res);
    })
  }
  public changePage(datalist: Customers[]) {
    this.dataList = datalist;
    this.cdr.markForCheck();
  }

  public drop(event: CdkDragDrop<Customers[]>) {
    moveItemInArray(this.dataList, event.previousIndex, event.currentIndex);
  }

  // get filtered data
  private getFilteredData() {
    this.listPresenterService.filterData$.subscribe((res) => {
      // console.log(res);
      this._customerData = res;
      this.cdr.markForCheck();
    })
  }


  // data sorting
  sort(event: any) {
    this.isSort = !this.isSort;
    this.sortItems = event.target.innerHTML;
    this.listPresenterService.dataSort(this.sortItems, this.dataList, this.isSort);
  }


  // on click showing the data
  public ShowData(id: any) {
    // this.idTogetData.emit(id);
    this.id = id;
    this._customerService.getCustomerDataById(id).subscribe((res) => {
      this.cdr.markForCheck();
      console.log(this.CustomerDataById);
      this.CustomerDataById = res;
    });
  }


}


