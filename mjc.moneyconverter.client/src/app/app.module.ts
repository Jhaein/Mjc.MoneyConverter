import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoneyInputComponent } from './money-input/money-input.component';
import { MoneyConverterComponent } from './money-converter/money-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    MoneyInputComponent,
    MoneyConverterComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
