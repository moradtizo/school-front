import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDevlopperComponent } from './add-devlopper/add-devlopper.component';

const routes: Routes = [
  {
    path: 'add-devlopper',
    component: AddDevlopperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevloppersRoutingModule { }
