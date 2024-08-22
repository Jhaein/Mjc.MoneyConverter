import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-money-input',
  templateUrl: './money-input.component.html',
  styleUrl: './money-input.component.css'
})

export class MoneyInputComponent implements OnInit {
  moneyForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.moneyForm = this.fb.group({
      money: ['', Validators.required]
    });
  }

  submitForm() {
    const enteredAmountOfMoney = this.moneyForm.value.money;
    this.router.navigate(['/money-converter', enteredAmountOfMoney]);

  }
}
