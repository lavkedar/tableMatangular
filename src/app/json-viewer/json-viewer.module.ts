import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SveletJsonViewrComponent } from './svelet-json-viewr/svelet-json-viewr.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: SveletJsonViewrComponent
  }
  

];



@NgModule({
  declarations: [
    SveletJsonViewrComponent
  ],
  imports: [
    CommonModule,
  
    

    RouterModule.forChild(routes)
  ]
  ,exports : [
    RouterModule
  ]
})
export class JsonViewerModule { }
