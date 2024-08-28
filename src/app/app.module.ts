import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CheckmarkTestComponent } from './checkmark-test/checkmark-test.component';
import { FormsModule } from '@angular/forms';
import { GradientComponent } from './gradient/gradient.component';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';





const routes: Routes = [
  { path: 'json', loadChildren: () => import('./json-viewer/json-viewer.module').then(m => m.JsonViewerModule) },
  { path: 'gray', component: GradientComponent },
  { path: '', component: FormComponent },
  { path: '**', component: FormComponent },
  

];

@NgModule({
  declarations: [
    AppComponent,
    CheckmarkTestComponent,
    GradientComponent,
    FormComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
