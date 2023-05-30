import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDevlopperComponent } from './add-devlopper/add-devlopper.component';
import { ListDevlopperComponent } from './list-devlopper/list-devlopper.component';
import { AboutDevelopperComponent } from './about-developper/about-developper.component';
import { EditDevlopperComponent } from './edit-devlopper/edit-devlopper.component';

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
  },
  {
    path: 'edit-developper/:id',
    component: EditDevlopperComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevloppersRoutingModule { }
