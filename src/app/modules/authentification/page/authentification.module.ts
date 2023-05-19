import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthentificationComponent } from './authentification.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "", component: AuthentificationComponent}
]

@NgModule({
  declarations: [
    AuthentificationComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {}),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AuthentificationModule { }
