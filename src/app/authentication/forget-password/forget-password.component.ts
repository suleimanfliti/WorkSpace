import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    const emailPattern =
      /^([_a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,5}))|(0)[0-9 ]{9}$/;
    this.loginForm = this.fb.group({
      emailorphone: [
        null,
        [Validators.required, Validators.pattern(emailPattern)],
      ],
    });
  }
  loginForm: FormGroup;
  submitForm() {}
}
