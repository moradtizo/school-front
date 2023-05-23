import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevloppersRoutingModule } from './devloppers-routing.module';
import { AddDevlopperComponent } from './add-devlopper/add-devlopper.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { ComponentsModule } from '../shared/components/components.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AddDevlopperComponent
  ],
  imports: [
    CommonModule,
    DevloppersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatStepperModule,
    ComponentsModule,
    MatSelectModule
  ]
})
export class DevloppersModule { }
