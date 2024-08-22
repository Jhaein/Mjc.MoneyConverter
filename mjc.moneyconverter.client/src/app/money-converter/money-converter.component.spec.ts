import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyConverterComponent } from './money-converter.component';

describe('MoneyConverterComponent', () => {
  let component: MoneyConverterComponent;
  let fixture: ComponentFixture<MoneyConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoneyConverterComponent]
    });
    fixture = TestBed.createComponent(MoneyConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
