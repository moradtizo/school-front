import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ListDevlopperComponent } from './list-devlopper/list-devlopper.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DevlopperDialogComponent } from './list-devlopper/devlopper-dialog/devlopper-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AboutDevelopperComponent } from './about-developper/about-developper.component';
import { EditDevlopperComponent } from './edit-devlopper/edit-devlopper.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddDevlopperComponent,
    ListDevlopperComponent,
    DevlopperDialogComponent,
    AboutDevelopperComponent,
    EditDevlopperComponent,

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
    MatSelectModule,
    MatDatepickerModule,
    NgScrollbarModule,
    NgApexchartsModule,
    MatMenuModule,
    SharedModule,
    MatPaginatorModule,
    NgIf,
    MatDialogModule,
    RouterModule
  ]
})
export class DevloppersModule { }
