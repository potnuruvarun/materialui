import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlllistComponent } from './alllist/alllist.component';


const routes: Routes = [

  {path:'alldata',component:AlllistComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
