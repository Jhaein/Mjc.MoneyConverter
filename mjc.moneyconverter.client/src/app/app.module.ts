import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoneyInputComponent } from './money-input/money-input.component';
import { MoneyConverterComponent } from './money-converter/money-converter.component';

@NgModule({ declarations: [
        AppComponent,
        MoneyInputComponent,
        MoneyConverterComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
