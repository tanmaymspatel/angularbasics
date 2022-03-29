import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { FilterPresentaionComponent } from '../customers-list-presentation/filter-presentaion/filter-presentaion.component';
import { Customers, CustomersForm } from '../../model/customer.model';

@Injectable()
export class CustomersListPresenterService {

  private _delete: Subject<number>;
  public delete$: Observable<number>;

  private _filterData: Subject<any>;
  public filterData$: Observable<any>;

  constructor(private overlay: Overlay) {

    this._delete = new Subject();
    this.delete$ = this._delete.asObservable();

    this._filterData = new Subject();
    this.filterData$ = this._filterData.asObservable();
  }

  onDelete(id: number) {
    // console.log(id);

    this._delete.next(id);
  }

  // overlay function
  public openFilter(originalData: Customers[]) {

    // Form Overlay Creation

    const config = new OverlayConfig();
    config.hasBackdrop = true,
      config.positionStrategy = this.overlay.position().global().right();

    const overlayRef = this.overlay.create(config);

    const componenet = new ComponentPortal(FilterPresentaionComponent);
    const componenetRef = overlayRef.attach(componenet);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    })

    // close overlay
    componenetRef.instance.close.subscribe(() => {
      overlayRef.detach();

    })

    // on submit from overlay form
    componenetRef.instance.filterFormData.subscribe((res: any) => {
      console.log(res);

      
      // filter data
      let filteredData = [...originalData];
      let data = filteredData.map((item) => { return Object.keys(item) });
      let dataKey = data[0];
      
      dataKey.forEach((item:any)=>{
        if(res[item]){
          filteredData = filteredData.filter((data:any)=>{
            return data[item].toString().toLowerCase() === res[item].toString().toLowerCase();
          })
          
        }
      })
      // console.log(filteredData);
      this._filterData.next(filteredData);
      overlayRef.detach();
    })
  }


  // sorting logic
  public dataSort(sortItem:string, sortData:Customers[], isSort:boolean){
    
    let direction = isSort ? 1 : -1;
    const property = sortItem.toString().toLowerCase()
   sortData.sort((a:any, b:any) : any=>{
      if(a[property] < b[property]){
        return -1 * direction
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    })
  }

}
