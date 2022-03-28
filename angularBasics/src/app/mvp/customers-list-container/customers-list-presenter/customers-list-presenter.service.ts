import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { FilterPresentaionComponent } from '../customers-list-presentation/filter-presentaion/filter-presentaion.component';

@Injectable()
export class CustomersListPresenterService {

  private _delete : Subject<number>;
  public delete$ : Observable<number>;


  constructor(private overlay :Overlay){

    this._delete = new Subject();
    this.delete$ = this._delete.asObservable();
   }
  
  onDelete(id:number){
    // console.log(id);
    
    this._delete.next(id);
  }
 
 // overlay function
  public openFilter(){

    // Form Overlay Creation

    const config = new OverlayConfig();
    config.hasBackdrop = true,
    config.positionStrategy = this.overlay.position().global().right();

    const overlayRef = this.overlay.create(config);

    const componenet = new ComponentPortal(FilterPresentaionComponent);
    const componenetRef = overlayRef.attach(componenet);

    overlayRef.backdropClick().subscribe(()=>{
      overlayRef.detach();
    })
  }

}
