import { Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService implements OnInit{

  constructor() { }

  ngOnInit(): void {
    
  }

  generateForm(template:any){
    let formObj = {};
    template.content.controls.forEach((ctrl:any)=>{ 
      let validation = this.defaultValidation(ctrl);
      formObj[ctrl.name] = new FormControl({value: ctrl.defaultValue, disabled: ctrl.disabled}, validation);
    });
    return new FormGroup(formObj);
  }

  defaultValidation(control: any){
    let validationArray = [];
    while(control.validation.length > 0){
      switch (control){
        case control.required:
          validationArray.push(Validators.required);
          control.validation.splice(0,1);
          break;
        case control.maxLength:
          validationArray.push(Validators.maxLength(control.maxLength));
          control.validation.splice(0,1);
          break;
        case control.minLength:
          validationArray.push(Validators.maxLength(control.minLength));
          control.validation.splice(0,1);
          break;
      }
    }
    return validationArray
  }
}
