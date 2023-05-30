import { Component } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Developper } from 'src/app/core/models/developper/developper';
import { RegisterDev } from 'src/app/core/service/developper/registerDev.service';

@Component({
  selector: 'app-edit-devlopper',
  templateUrl: './edit-devlopper.component.html',
  styleUrls: ['./edit-devlopper.component.scss']
})
export class EditDevlopperComponent {
  image:any;
  cv:any;
   uuid:any
  developer: Developper [] = []
  // isLinear = true; // or false, depending on your requirement
  hide = true;
  firstFormGroup = new FormGroup({
     firstName:new UntypedFormControl ('', [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern('[a-zA-Z]*')]),
     lastName:new UntypedFormControl ('', [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern('[a-zA-Z]*')]),
     email_address:new UntypedFormControl ('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
     phone:new UntypedFormControl ('',[Validators.required, Validators.maxLength(10),Validators.pattern('[0-9]*')]),
     addresse:new UntypedFormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('[0-9a-zA-Z ]*')]),
     gender:new UntypedFormControl('', Validators.required),
     date:new UntypedFormControl('', Validators.required),
     password: new UntypedFormControl('', Validators.required), // Password input with required validation
     confirmPassword: new UntypedFormControl('', Validators.required), // Confirm password input with required validation
     skills:new UntypedFormControl('', Validators.required),
     study_level:new UntypedFormControl('', Validators.required),
     education:new UntypedFormControl('', Validators.required),
     certificate:new UntypedFormControl('', Validators.required),
     description:new UntypedFormControl('', Validators.required),
     bio:new UntypedFormControl('', Validators.required),
     status:new UntypedFormControl('', Validators.required),
    //  image:new UntypedFormControl('', Validators.required),
    //  cv:new UntypedFormControl('', Validators.required),
     github:new UntypedFormControl('', Validators.required),
     website:new UntypedFormControl('', Validators.required),
     linkedin:new UntypedFormControl('', Validators.required),
    });
    constructor(private fb: FormBuilder,private registerDev:RegisterDev,private router:Router,private activatedRoute:ActivatedRoute) {}
}
