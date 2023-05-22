import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPromotionComponent } from './list-promotion/list-promotion.component';
import { AddPromotionComponent } from './add-promotion/add-promotion.component';

const routes: Routes = [
  {
    path: 'list-promotion',
    component: ListPromotionComponent,
  },
  {
    path: 'add-promotion',
    component: AddPromotionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRoutingModule { }
