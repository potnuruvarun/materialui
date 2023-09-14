import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AlllistComponent } from './alllist/alllist.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AlllistComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule

  ],
  exports:[
    AlllistComponent
  ]
})
export class AdminModule { }
