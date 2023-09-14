import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss'],
})
export class FundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }

  get emailValidator() {
    return this.loginForm.get('email');
  }

  get passwordValidator() {
    return this.loginForm.get('password');
  }
}
