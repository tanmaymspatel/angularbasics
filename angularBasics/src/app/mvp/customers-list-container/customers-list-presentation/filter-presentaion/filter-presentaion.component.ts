import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomersForm } from 'src/app/mvp/model/customer.model';
import { FilterPresenterService } from '../filter-presenter/filter-presenter.service';

@Component({
  selector: 'app-filter-presentaion',
  templateUrl: './filter-presentaion.component.html',
  styleUrls: ['./filter-presentaion.component.scss'],
  viewProviders:[FilterPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FilterPresentaionComponent implements OnInit {

  public filterForm:FormGroup;
  @Output() close : EventEmitter<Event>;
  @Output() filterFormData : EventEmitter<CustomersForm>;

  constructor(
    private filterPresernterService : FilterPresenterService
    ) {

    this.filterForm = this.filterPresernterService.buildform();
    this.close = new EventEmitter();
    this.filterFormData = new EventEmitter();

   }

  ngOnInit(): void {

    // filterform data to list presenter
    this.filterPresernterService.filterFormData$.subscribe((res)=>{
      this.filterFormData.emit(res)
      
    })
  }

 public closeOverlayForm(){
    this.close.emit();
  }

  public onSumit(){
    // console.log(this.filterForm.value);
    this.filterPresernterService.OnSubmit(this.filterForm)
    
  }

}
