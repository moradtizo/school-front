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
async downloadPdf(pdfUrl: string): Promise<void> {
  const response = await fetch(pdfUrl);
  const blob = await response.blob();

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'document.pdf';
  link.click();
}

async downloadImage(imageUrl: string): Promise<void> {
  const response = await fetch(imageUrl);
  const blob = await response.blob();

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'image.jpg';
  link.click();
}




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
