import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/shared/interfaces/user.type';

import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { UserSerivce } from 'src/app/shared/services/user.service';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading: boolean = false;
  error: string;
  res: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['dashboard']);
    }
  }
  submitForm(): void {
    const cheack = this.cheakFormControls();
    if (cheack) {
      const user: User = this.createUser(
        this.loginForm.value.emailorphone,
        this.loginForm.value.password
      );
        this.isLoading = true;
        this.authService.login(user).subscribe(
        (resData) => {
          this.isLoading = false;
          if (resData) {
            this.router.navigate(['/dashboard', 'home']);
          }
        },
        (errorMessage) => {
          this.error = errorMessage;
          this.isLoading = false;
          console.log(this.error);
        }
      );
    }
  }
  createUser(emailOrPhone: string, password: string) {
    let user: User;
    if (emailOrPhone.includes('@')) {
      user = {
        email: emailOrPhone,
        password: password,
      };
      return user;
    } else {
      user = {
        phone: emailOrPhone,
        password: password,
      };
      return user;
    }
  }
  //init component
  ngOnInit(): void {
    this.cheackToken();
    this.initSigninForm();
  }
  //init form control.
  cheakFormControls() {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }
    if (!this.loginForm.valid) {
      return false;
    }
    return true;
  }
  //validation email.
  validateEmail(email: string) {
    const regularExpression = /^\w+@\w+\.\w{2,3}$/;
    return regularExpression.test(email);
  }
  //validate Phone
  validatePhone(phone: string) {
    const regular = /[0-9]{11}/;
    return regular.test(String(phone));
  }
  //cheak found token in authentication serive
  cheackToken() {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/dashboard', 'home']);
    }
    return;
  }
  //cheack control and form validate submit.
  cheackControlsValidate() {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }
    if (!this.loginForm.valid) {
      return false;
    }
    return true;
  }
  //init sign in form and validate.
  initSigninForm() {
    const emailRegex = new RegExp(/^(?:\d{10}|\w+@\w+\.\w{2,3})$/);
    this.loginForm = this.fb.group({
      emailorphone: [
        null,
        [Validators.required, Validators.pattern(emailRegex)],
      ],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }
}
