import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoneyConverterComponent } from './money-converter/money-converter.component';
import { MoneyInputComponent } from './money-input/money-input.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'money-input', pathMatch: 'full' }, // Default route
      { path: 'money-input', component: MoneyInputComponent },
      { path: 'money-converter/:money', component: MoneyConverterComponent },
    ],
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
