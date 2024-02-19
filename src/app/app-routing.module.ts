import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiFormComponent } from './bmi-form/bmi-form.component';

const routes: Routes = [
  {path: 'calculate-bmi', component : BmiFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
