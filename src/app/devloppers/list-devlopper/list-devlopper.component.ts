import { MatDialog } from '@angular/material/dialog';
import { Developper, ResDevelopper } from './../../core/models/developper/developper';
import { DevelopperService } from './../../core/service/developper/developper.service';
import { Component, OnInit } from '@angular/core';
import { DevlopperDialogComponent } from './devlopper-dialog/devlopper-dialog.component';


@Component({
  selector: 'app-list-devlopper',
  templateUrl: './list-devlopper.component.html',
  styleUrls: ['./list-devlopper.component.scss']
})
export class ListDevlopperComponent  implements OnInit {
developper: Developper[] | undefined=[]
  breadscrums = [
    {
      title: 'List developer',
      items: ['Devlopper'],
      active: 'List devlopper',
    },
  ];
constructor( private developperService:DevelopperService,public dialog: MatDialog){}

ngOnInit(): void {
this.allDev()
}

allDev(){
  this.developperService.getAllDev().subscribe((res: ResDevelopper) =>

  this.developper = res.developers
 );
}


animal: string | undefined;
  name: string | undefined;

  openDialog(): void {
    const dialogRef = this.dialog.open(DevlopperDialogComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  destroyD(id:string){




        this.developperService.deleteD(id).subscribe(()=> {
          this.allDev()
        })

      }



}
