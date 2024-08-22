import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { MoneyConverterComponent } from './money-converter/money-converter.component';
import { MoneyInputComponent } from './money-input/money-input.component';

@NgModule({
  declarations: [
    AppComponent, MoneyConverterComponent, MoneyInputComponent,
  ],


  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule], providers: [provideHttpClient(withInterceptorsFromDi()), provideAnimationsAsync()]
})
export class AppModule { }
