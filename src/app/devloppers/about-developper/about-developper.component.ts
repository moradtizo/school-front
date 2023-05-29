import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { number } from 'echarts';
import { Developper, ResDevelopper } from 'src/app/core/models/developper/developper';
import { DevelopperService } from 'src/app/core/service/developper/developper.service';

@Component({
  selector: 'app-about-developper',
  templateUrl: './about-developper.component.html',
  styleUrls: ['./about-developper.component.scss']
})
export class AboutDevelopperComponent implements OnInit {
  details: any =[]
  breadscrums = [
    {
      title: 'About developer',
      items: ['Devlopper'],
      active: 'About devlopper',
    },
  ];
constructor( private developperService:DevelopperService,private  route: ActivatedRoute){}

ngOnInit(): void {
 this.route.params.subscribe((params: any) => this.getDetails(params.id))

}

getDetails(id:number) {
  this.developperService.gitOneD(id).subscribe((response :any) =>  {
    this.details=response.developer
    console.log(this.details);

  } )

}
}
