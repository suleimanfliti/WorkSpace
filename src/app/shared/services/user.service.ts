import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Education } from '../interfaces/education.type';

import { Profile } from '../interfaces/profile.type';
import { Skill } from '../interfaces/Skill.type';
import {ProjectList} from '../interfaces/project-list.type'
import { User } from '../interfaces/user.type';
import { AuthenticationService } from './authentication.service';
import { product } from '../interfaces/product.type';

@Injectable()
export class UserSerivce {
  token: string;
  user: User;
  profile: Profile;
  skills: Skill[] = [];
  educations: Education[] = [];
  name: string;
  products:product[]=[];
  projects: ProjectList[]=[];
  /////////////////////////////////////////////
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {
    this.authService.currentUser.subscribe((currentUser) => {
      this.token = currentUser;
    });
  }
  profObs: BehaviorSubject<Profile>;
  /////////////////////////////////////////////////////////

  getCurrentUserApi() {
    return this.http
      .get<{ success: string; message: string; data: User }>(
        'http://localhost:8000/api/me'
      )
      .pipe( map((resData) => { return resData.data; },tap((resData: User) => { this.user = resData;}))

           );
  }
  editUserApi(user: User) {
    return this.http
      .patch<{ success: string; message: string; data: User }>(
        'http://localhost:8000/api/me-edit',
        user
      )
      .pipe(
        map(
          (resData) => {
            return resData.data;
          },
          tap((resData: User) => {
            this.user = resData;
          })
        )
      );
    // catchError((errorResponse) => {
    //   let errorMesage = 'An unknow error occurred!';
    //   if (errorResponse.error || errorResponse.error.error) {
    //     return throwError(errorResponse);
    //   }
    //   switch (errorResponse.error.error.message) {
    //     case 'EMAIL_EXISTS':
    //       errorMesage = 'the email exists already';
    //   }
    //   return throwError(errorMesage);
    // })
  }

  deleteData() {
    this.user = null;
    this.profile = null;
    this.skills = [];
    this.educations = [];
  }
  ///////////////////////////////////////////////////////

  getProjectsList() {
    return this.http.get('http://localhost:8000/api/me/projecs', {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
    });
  }

  getReviewsList() {
    return this.http.get('http://localhost:8000/api/me/reviews', {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
    });
  }

  ////////////////////////////////////
  getProfile() {
    return { ...this.profile };
  }
  getUser() {
    return { ...this.user };
  }
  getSkills() {
    return this.skills.slice();
  }
  getEducations() {
    return this.educations.slice();
  }
  getproducts() {
    return this.products.slice();
  }
  getProjects() {
    return this.projects.slice();
  }

}
