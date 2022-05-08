import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user.type';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { country } from './countries';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signUpForm: FormGroup;
  newUser: User;
  isLoading: boolean = false;
  error: string;
  listOfOption: Array<string> = [];
  //constructor sign-up component.
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['dashboard']);
    }
  }
  //FormReactive Initiliaze Controls with validators.
  ngOnInit(): void {
    //pattern validator mobile phone.
    this.initFormSignup();
  }
  //send user to http service.
  submitForm(): void {
    const validate = this.cheackControlsValidate();
    if (validate) this.signup();
  }

  //sign up request and subscribe api.
  signup() {
    this.isLoading = true;
    this.createNewUser();
    this.authService.signup(this.newUser).subscribe(
      (success: boolean) => {
        this.isLoading = false;
        if (success) {
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
  //get form value and create new user.
  createNewUser() {
    this.newUser = {
      name: this.signUpForm.value.name,
      email: this.signUpForm.value.email,
      phone: this.signUpForm.value.phone,
      password: this.signUpForm.value.password,
      confirm_password: this.signUpForm.value.confirm_password,
    };
  }
  //init input form validate.
  initFormSignup() {
    country.forEach((item) => {
      this.listOfOption.push(item.dial_code);
    });
    const patternPhone = '[0-9]{10}';
    this.signUpForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.pattern(patternPhone)]],
      email: [null, [Validators.required, Validators.email]],
      phoneNumberPrefix: ['+963'],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirm_password: [
        null,
        [Validators.required, this.confirmationValidator],
      ],
      agree: [false],
    });
  }
  //cheack controls and form validate.
  cheackControlsValidate() {
    for (const i in this.signUpForm.controls) {
      this.signUpForm.controls[i].markAsDirty();
      this.signUpForm.controls[i].updateValueAndValidity();
    }
    if (!this.signUpForm.valid) {
      return false;
    }
    return true;
  }
  //validators input.
  //////////////////////////////////////////
  updateConfirmValidator(): void {
    Promise.resolve().then(() =>
      this.signUpForm.controls.checkPassword.updateValueAndValidity()
    );
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.signUpForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  };
  //////////////////////////////////////////
}
