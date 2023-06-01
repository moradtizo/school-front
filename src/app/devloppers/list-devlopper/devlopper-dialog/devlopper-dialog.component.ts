import { RegisterDev } from './../../../core/service/developper/registerDev.service';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ListDevlopperComponent } from '../list-devlopper.component';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { RegisterD } from 'src/app/core/models/developper/registerDev';
import { Router } from '@angular/router';
// export interface DialogData {
//   animal: string;
//   name: string;
// }
@Component({
  selector: 'app-devlopper-dialog',
  templateUrl: './devlopper-dialog.component.html',
  styleUrls: ['./devlopper-dialog.component.scss']
})
export class DevlopperDialogComponent {

  form :RegisterD [] = []


  registerFormGroup = this.fb.group({
    email: ['',[Validators.required, Validators.email, Validators.minLength(5)],],
    profil: ['', [Validators.required]],

  });

  constructor(
    public dialogRef: MatDialogRef<ListDevlopperComponent>,private fb: UntypedFormBuilder,private registerDev:RegisterDev,private router:Router,
    @Inject(MAT_DIALOG_DATA) public data: RegisterD,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  postRegister(){
    if(this.registerFormGroup.valid){
const{email,profil} = this.registerFormGroup.value
    this.registerDev.register({email,profil}).subscribe((res: RegisterD) => {
      this.form = [...this.form,res]
     this.registerFormGroup.reset()
     this.router.navigate(['/devloppers/list-devlopper'])
    })
    }

  }
  
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures

}
