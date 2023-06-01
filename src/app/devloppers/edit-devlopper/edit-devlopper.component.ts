import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Developper } from 'src/app/core/models/developper/developper';
import { DevelopperService } from 'src/app/core/service/developper/developper.service';

@Component({
  selector: 'app-edit-devlopper',
  templateUrl: './edit-devlopper.component.html',
  styleUrls: ['./edit-devlopper.component.scss']
})
export class EditDevlopperComponent implements OnInit {
  breadscrums = [
    {
      title: 'Edit developer',
      items: ['Devlopper'],
      active: 'Edit devlopper',
    },
  ];
  image:any;
  cv:any;
   uuid:any
   id=""
  developer: Developper [] = []
  // isLinear = true; // or false, depending on your requirement
  hide = true;
  constructor(private fb: FormBuilder,private developperService:DevelopperService,private router:Router,private activatedRoute:ActivatedRoute,private location:Location) {}
  editProductForm = new FormGroup({
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

    ngOnInit(): void {
      this.activatedRoute.params.subscribe((params: any) => {
        this.developperService.gitOneD(params.id).subscribe(res => {
          this.id = params.id;
          console.log(res); 
          this.editProductForm.patchValue(res.developer); // Update this line based on the structure of the response object
        });
      });
    }

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



    updateDeveloper() {
      const formData = new FormData() ;

      const updatedDeveloper: Partial<Developper> = {
        first_name: this.editProductForm.controls['firstName'].value,
        last_name: this.editProductForm.controls['lastName'].value,
        email_address: this.editProductForm.controls['email_address'].value,
        phone:this.editProductForm.controls['phone'].value,
        address: this.editProductForm.controls['addresse'].value,
        skills: this.editProductForm.controls['skills'].value,
        linkedin: this.editProductForm.controls['linkedin'].value ,
        website : this.editProductForm.controls['website'].value,
        github : this.editProductForm.controls['github'].value,
        gender : this.editProductForm.controls['gender'].value,
        birthday : this.editProductForm.controls['date'].value,
        description : this.editProductForm.controls['description'].value,
        bio : this.editProductForm.controls['bio'].value,
        study_level : this.editProductForm.controls['study_level'].value,
        education : this.editProductForm.controls['education'].value,
        certificate : this.editProductForm.controls['certificate'].value,
        password : this.editProductForm.controls['password'].value,
        status : this.editProductForm.controls['status'].value,
      };

      formData.append('image', this.image) ;
      formData.append('cv', this.cv) ;

      console.log(formData.get('thumbnail'))
      formData.append('product', JSON.stringify(updatedDeveloper));
      console.log(updatedDeveloper)
      this.developperService.updateDe(this.id,formData).subscribe(res => {
        // if(res.success) {
        //   this.location.back()
        //  }
      },
      err => console.error(err))
    }
}
