import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[panMasking]'
})
export class MaskingDirective {

  constructor(public ngControl: NgControl) {}

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event : any) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event : any) {
    this.onInputChange(event.target.value, true);
  }

  onInputChange(event : any, backspace : any) {
    let newVal;
    console.log(event.length)
    if(event.length <= 5 ) {
      newVal = event.replace(/\d/g, '');
      console.log("first five")
    }else if(event.length <= 9 && event.length >= 6) {
      newVal = event.slice(0,5) + event.slice(5).replace(/\D/g, '');
    }
    else if(event.length == 10) {
      newVal = event.slice(0,9) + event.slice(-1).replace(/\d/g, '');
    }
    console.log(newVal);
    
    if (backspace && newVal.length <= 9) {
      newVal = newVal.substring(0, newVal.length - 1);
      console.log(newVal);
    }
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 5) {
      newVal = newVal.replace(/^([A-Z]{0,5})/, '$1');
      console.log(newVal);
    } else if (newVal.length <= 9) {
      newVal = newVal.replace(/^([A-Z]{0,5})(\d{0,4})/, '$1$2');
      console.log(newVal);
    } else if (newVal.length <= 10) {
      newVal = newVal.replace(/^([A-Z]{0,5})(\d{0,4})([A-Z]{0,1})/, '$1$2$3');
      console.log(newVal);
    } else {
      // newVal = newVal.substring(0, 10);
      console.log(newVal);
      // newVal = newVal.replace(/^([A-Z]{0,5})(\d{0,4})([A-Z]{0,1})/, '$1 $2 $3');
      console.log(newVal);
    }
    this.ngControl.valueAccessor?.writeValue(newVal);
  }

}
