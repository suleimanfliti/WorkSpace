import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientJsonpModule,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ThemeConstantService } from './services/theme-constant.service';
import { SearchPipe } from './pipes/search.pipe';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AuthenticationRoutingModule } from '../authentication/authentication-routing.module';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { AuthenticationService } from './services/authentication.service';
import { JwtInterceptor } from './interceptor/token.interceptor';
import { UserSerivce } from './services/user.service';
import { NzInputGroupComponent } from 'ng-zorro-antd/input';
import { TableService } from './services/table.service';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NzIconModule,
    PerfectScrollbarModule,
    SearchPipe,
  ],
  imports: [
    RouterModule,
    CommonModule,
    NzIconModule,
    NzToolTipModule,
    PerfectScrollbarModule,
    NzSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [SearchPipe],
  providers: [ThemeConstantService, TableService],
})
export class SharedModule {}
