import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './modules/authentification/page/authentification.component';
import { DashbordComponent } from './modules/dashbord/page/dashbord.component';

const routes: Routes = [
  {
    path : '',
    component : DashbordComponent
  },
  {
    path : 'auth',
    loadChildren: () => import('../app/modules/authentification/page/authentification.module').then(m => m.AuthentificationModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
