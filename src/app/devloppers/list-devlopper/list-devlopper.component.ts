import { number } from 'echarts';
import { MatDialog } from '@angular/material/dialog';
import { Developper, ResDevelopper, Pagination } from './../../core/models/developper/developper';
import { DevelopperService } from './../../core/service/developper/developper.service';
import { Component, OnInit } from '@angular/core';
import { DevlopperDialogComponent } from './devlopper-dialog/devlopper-dialog.component';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-list-devlopper',
  templateUrl: './list-devlopper.component.html',
  styleUrls: ['./list-devlopper.component.scss']
})
export class ListDevlopperComponent  implements OnInit {
developper: Developper[] | undefined=[]
developers: Developper[] | undefined;
pagination: any; // Update the type based on your API response
page = 1;
limit = 5;

  breadscrums = [
    {
      title: 'List developer',
      items: ['Devlopper'],
      active: 'List devlopper',
    },
  ];
constructor( private developperService:DevelopperService,public dialog: MatDialog){}

ngOnInit(): void {
this.getAllDevelopers()
}

getAllDevelopers(): void {
  this.developperService.getDevelopers(this.page, this.limit).subscribe((res: { developers: Developper[], pagination: Pagination }) => {
    this.developers = res.developers;
    this.pagination = res.pagination;
    console.log(res.developers);
    console.log(res.pagination);
  });
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


    if(!confirm('are you delete this developer')){
      return
    }
 this.developperService.deleteD(id).subscribe(()=> {
          this.getAllDevelopers()
        })

      }

      onPageChange(event: PageEvent): void {
        this.page = event.pageIndex + 1;
        this.limit = event.pageSize;
        this.getAllDevelopers();
      }


}
