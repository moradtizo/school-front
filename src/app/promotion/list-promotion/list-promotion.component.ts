import { Component } from '@angular/core';

@Component({
  selector: 'app-list-promotion',
  templateUrl: './list-promotion.component.html',
  styleUrls: ['./list-promotion.component.scss']
})
export class ListPromotionComponent {
  breadscrums = [
    {
      title: 'Blank',
      items: ['Extra'],
      active: 'Blank',
    },
  ];

}
