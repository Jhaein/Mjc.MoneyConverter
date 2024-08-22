import { TestBed } from '@angular/core/testing';

import { MoneyconverterServiceService } from './moneyconverter-service.service';

describe('MoneyconverterServiceService', () => {
  let service: MoneyconverterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoneyconverterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
