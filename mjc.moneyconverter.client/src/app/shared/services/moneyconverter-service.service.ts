import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { MoneyConverterResponseMod } from '../interface/money-converter-dto';

@Injectable({
  providedIn: 'root'
})
export class MoneyconverterServiceService {

  private apiUrl = 'http://localhost:5120/MoneyConverter/api/ConvertMoneyToWords';

  constructor(private httpClient: HttpClient) { }

  convertAmountToWords(money: number): Observable<MoneyConverterResponseMod> {
    const url = `${this.apiUrl}/${money}`;
    return this.httpClient.get<MoneyConverterResponseMod>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    // Handle the error here
    return throwError(() => new Error('Something went wrong. Please try again later.'));
  }
}


