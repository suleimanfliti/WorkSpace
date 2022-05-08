import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzAlertModule } from 'ng-zorro-antd/alert';

import { SignUpComponent } from './sign-up/sign-up.component';
import { Error1Component } from './error-1/error-1.component';
import { Error2Component } from './error-2/error-2.component';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

import { NzSpinModule } from 'ng-zorro-antd/spin';

const antdModule = [
  NzFormModule,
  NzInputModule,
  NzButtonModule,
  NzCardModule,
  NzCheckboxModule,
  NzDropDownModule,
  NzSelectModule,
  NzSpinModule,
  NzAlertModule,
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    AuthenticationRoutingModule,
    ...antdModule,
  ],
  declarations: [
    LoginComponent,
    SignUpComponent,
    Error1Component,
    Error2Component,
    ForgetPasswordComponent,
  ],
  providers: [],
})
export class AuthenticationModule {}
