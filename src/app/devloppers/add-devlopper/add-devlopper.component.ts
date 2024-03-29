import { RegisterD } from 'src/app/core/models/developper/registerDev';
import { Developper} from 'src/app/core/models/developper/developper';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import {  Router, ActivatedRoute } from '@angular/router';
import { RegisterDev } from 'src/app/core/service/developper/registerDev.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-devlopper',
  templateUrl: './add-devlopper.component.html',
  styleUrls: ['./add-devlopper.component.scss']
})
export class AddDevlopperComponent implements OnInit {
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
    // secondFormGroup = this.fb.group({


  //  });
  // therdFormGroup = this.fb.group({

  // });

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
     this.uuid = params['uuid'];
      // Use the uuid variable as needed
      console.log(this.uuid);
      // Call your API or perform any other operations with the UUID
    });
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'passwordMismatch': true };
    }

    return null;
  }

  // isOptional = false;
  breadscrums = [
    {
      title: 'add developer',
      items: ['Devlopper'],
      active: 'List devlopper',
    },
  ];

  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
        const file = event.target.files[0];
        const mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return ;
        }
        this.image = file;

    }
  }
  onSelectFile_2(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const mimeType = event.target.files[0].type;
      if (mimeType !== 'application/pdf') {
        return;
      }
      this.cv = file;
    }
  }
  saveD(){
    const formData = new FormData() ;
    // if(!this.image){
    //   return
    // }
    const developer = {
      first_name: this.firstFormGroup.controls['firstName'].value,
      last_name: this.firstFormGroup.controls['lastName'].value,
      email_address: this.firstFormGroup.controls['email_address'].value,
      phone:this.firstFormGroup.controls['phone'].value,
      address: this.firstFormGroup.controls['addresse'].value,
      skills: this.firstFormGroup.controls['skills'].value,
      linkedin: this.firstFormGroup.controls['linkedin'].value ,
      website : this.firstFormGroup.controls['website'].value,
      github : this.firstFormGroup.controls['github'].value,
      gender : this.firstFormGroup.controls['gender'].value,
      birthday : this.firstFormGroup.controls['date'].value,
      description : this.firstFormGroup.controls['description'].value,
      bio : this.firstFormGroup.controls['bio'].value,
      study_level : this.firstFormGroup.controls['study_level'].value,
      education : this.firstFormGroup.controls['education'].value,
      certificate : this.firstFormGroup.controls['certificate'].value,
      password : this.firstFormGroup.controls['password'].value,
      status : this.firstFormGroup.controls['status'].value,

    }

    console.log(this.image)
    console.log(this.cv)
    // const modifiedUuid = uuid?.replace('D_', '');

    formData.append('image', this.image)
    formData.append('cv', this.cv);
    //  formData.append('developer' , JSON.stringify(developer) ) ;
     formData.append('first_name' , JSON.stringify(developer.first_name) ) ;
     formData.append('last_name' , JSON.stringify(developer.last_name) ) ;
     formData.append('email_address' , JSON.stringify(developer.email_address) ) ;
     formData.append('phone' , JSON.stringify(developer.phone) ) ;
     formData.append('address' , JSON.stringify(developer.address) ) ;
     formData.append('skills' , JSON.stringify(developer.skills) ) ;
     formData.append('linkedin' , JSON.stringify(developer.linkedin) ) ;
     formData.append('website' , JSON.stringify(developer.website) ) ;
     formData.append('github' , JSON.stringify(developer.github) ) ;
     formData.append('gender' , JSON.stringify(developer.gender) ) ;
     formData.append('birthday' , JSON.stringify(developer.birthday) ) ;
     formData.append('description' , JSON.stringify(developer.description) ) ;
     formData.append('bio' , JSON.stringify(developer.bio) ) ;
     formData.append('study_level' , JSON.stringify(developer.study_level) ) ;
     formData.append('education' , JSON.stringify(developer.education) ) ;
     formData.append('certificate' , JSON.stringify(developer.certificate) ) ;
     formData.append('password' , JSON.stringify(developer.password) ) ;
     formData.append('status' , JSON.stringify(developer.status) ) ;

    console.log(developer)
    this.registerDev.registrationCom(formData,this.uuid).subscribe((res:Developper) => {
      this.developer = [...this.developer,res]
        this.firstFormGroup.reset()
         this.router.navigate(['/devloppers/list-devlopper'])
      })
  }


}
