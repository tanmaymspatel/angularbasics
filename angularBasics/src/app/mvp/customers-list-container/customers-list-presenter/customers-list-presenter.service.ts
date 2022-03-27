import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class CustomersListPresenterService {

  private _delete : Subject<number>;
  public delete$ : Observable<number>;


  constructor() {
    this._delete = new Subject();
    this.delete$ = this._delete.asObservable();
   }
  
  onDelete(id:number){
    // console.log(id);
    
    this._delete.next(id);
  }


}
