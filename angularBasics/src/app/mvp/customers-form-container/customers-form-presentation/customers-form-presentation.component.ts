import { ChangeDetectionStrategy, EventEmitter, Output, Input} from '@angular/core';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomersFormPresenterService } from '../costomers-form-presenter/customers-form-presenter.service';
import { Customers, CustomersForm } from '../../model/customer.model';

@Component({
  selector: 'app-customers-form-presentation',
  templateUrl: './customers-form-presentation.component.html',
  styleUrls: ['./customers-form-presentation.component.scss'],
  viewProviders:[CustomersFormPresenterService],
  changeDetection : ChangeDetectionStrategy.OnPush
})


export class CustomersFormPresentationComponent implements OnInit {

  // edit data from container which is to be patched
  @Input() public set customerEditData(value : Customers | null | any){
    if(value){
      this._customerEditData = value;
      console.log(value);
      this.formTitle = "Edit Customer";
      this.customersForm.patchValue(value);
      this._customerEditData = value;
    }
  }
   public get customerEditData() :Customers | null{
     return this._customerEditData;
   }

  public customersForm : FormGroup;
  public formTitle : string = "Add Customer";

  private _customerEditData : Customers | null; 

  @Output() public add : EventEmitter<CustomersForm>;
  @Output() public edit : EventEmitter<CustomersForm>;

  constructor(private customerPresenterService : CustomersFormPresenterService,
    private location: Location) {
    this.customersForm = this.customerPresenterService.createForm();

    this.add = new EventEmitter();
    this.edit = new EventEmitter();
   }

  ngOnInit(): void {
    this.customerPresenterService.customersFormData$.subscribe(res =>{
      if (this.formTitle === "Edit Customer"){
        this.add.emit(res);
      }else{
        this.edit.emit(res);
      }
    })
  }


  onSubmit(){
    console.log(this.customersForm);
    this.customerPresenterService.submitData(this.customersForm);
    
  }

  // Data to the database
  // addCustomerData(){
  //   this.customerPresenterService.customersFormData$.subscribe((res:CustomersForm)=>{ 
  
  //     // Whether data is to bo added or edited
  //     // this.formTitle == "Edit Customer" ? this.edit.emit(res) : this.add.emit(res)
  //     if (this.formTitle === "Add Customer"){
  //       this.add.emit(res)
  //     }else
  //     {
  //       this.edit.emit(res)
  //     }
  //     debugger
  //     console.log(res);
      
  //   })
  // }

  onCancel(){
    this.location.back();
  }
}
