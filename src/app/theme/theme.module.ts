import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeRoutingModule } from './theme-routing.module';
import { SideberComponent } from './sideber/sideber.component';
import { AdminModule } from '../admin/admin.module';



@NgModule({
  declarations: [
    SideberComponent,
   
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    AdminModule
  ],
  exports:[
    SideberComponent
  ]
})
export class ThemeModule { }
