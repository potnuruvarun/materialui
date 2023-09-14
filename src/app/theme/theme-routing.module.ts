import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideberComponent } from './sideber/sideber.component';

const routes: Routes = [
  {
    path:"main",component:SideberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
