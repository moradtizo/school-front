import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-devlopper',
  templateUrl: './add-devlopper.component.html',
  styleUrls: ['./add-devlopper.component.scss']
})
export class AddDevlopperComponent  {
  register: FormGroup | undefined;
  authForm!: UntypedFormGroup;
  isLinear = true; // or false, depending on your requirement
  firstFormGroup = this.fb.group({
    firstName:   new UntypedFormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('[0-9a-zA-Z]*')]),
    lastName: new UntypedFormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('[0-9a-zA-Z]*')]),
    email: new UntypedFormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    phone: new UntypedFormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)]),
    addresse:new UntypedFormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(25), Validators.pattern('[0-9a-zA-Z]*')]),
    gender:['', Validators.required]
  });
  secondFormGroup = this.fb.group({

      // firstName : new UntypedFormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10),Validators.pattern('[0-9a-zA-Z]*')]),
      // lastName : new UntypedFormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10)]),
      // color : new UntypedFormControl('',Validators.required ),

});
  therdFormGroup = this.fb.group({
    therdCtrl: '',
  });
  isOptional = false;
  constructor(private fb: FormBuilder) {}
// Custom validator function for phone field
phoneLengthValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (value && value.length !== 10) {
    return { phoneLength: true };
  }
  return null;
}
  // ngOnInit() {
  //   this.register = this.fb.group({
  //     firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
  //     last: [''],
  //     termcondition: [false, [Validators.requiredTrue]],
  // })
  // }
  // onSubmit(){

  // }
}
