import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDevlopperComponent } from './add-devlopper/add-devlopper.component';
import { ListDevlopperComponent } from './list-devlopper/list-devlopper.component';
import { AboutDevelopperComponent } from './about-developper/about-developper.component';

const routes: Routes = [
  {
    path: 'add-devlopper/:uuid',
    component: AddDevlopperComponent,
  },
  {
    path: 'list-devlopper',
    component: ListDevlopperComponent,
  },
  {
    path: 'about-developper/:id',
    component: AboutDevelopperComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevloppersRoutingModule { }
