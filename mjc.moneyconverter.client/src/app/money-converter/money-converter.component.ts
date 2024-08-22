import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { MoneyConverterResponseMod } from '../shared/interface/money-converter-dto';
import { MoneyconverterServiceService } from '../shared/services/moneyconverter-service.service';


@Component({
  selector: 'app-money-converter',
  templateUrl: './money-converter.component.html',
  styleUrl: './money-converter.component.css'
})
export class MoneyConverterComponent implements OnInit {
  moneyInWords$: Observable<MoneyConverterResponseMod> | undefined;

  constructor(private route: ActivatedRoute,
    private moneyConverterService: MoneyconverterServiceService,
  ) { }

  ngOnInit() {
    this.moneyInWords$ = this.route.params.pipe(
      switchMap((params) => {
        return this.moneyConverterService.convertAmountToWords(params['money']).pipe();
      }),
    );
  }
}

