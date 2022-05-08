import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Response } from '../interfaces/response.type';
import { User } from '../interfaces/user.type';

const API_ROOT = 'http://localhost:8000/api';

@Injectable()
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<string>;
  public currentUser: Observable<string>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<string>(
      localStorage.getItem('token')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): string {
    return this.currentUserSubject.value;
  }
  //sign up request.
  signup(newUser: User) {
    return this.http.post<Response>(`${API_ROOT}/register`, newUser).pipe(
      map(
        (authResponse) => {
          if (authResponse && authResponse.data.token) {
            localStorage.setItem('token', authResponse.data.token);
            this.currentUserSubject.next(authResponse.data.token);
          }
          return authResponse.success;
        },
        catchError((errorResponse) => {
          let errorMesage = 'An unknow error occurred!';
          if (errorResponse.error || errorResponse.error.error) {
            return throwError(errorResponse);
          }
          switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMesage = 'the email exists already';
          }
          return throwError(errorMesage);
        })
      )
    );
  }
  //sign in request.
  login(user: User) {
    return this.http
      .post<Response>('http://127.0.0.1:8000/api/login', user)
      .pipe(
        map((authResponse) => {
          if (authResponse && authResponse.data.token) {
            localStorage.setItem('token', authResponse.data.token);
            this.currentUserSubject.next(authResponse.data.token);
          }
          return authResponse;
        })
      );
  }
  //log out and remove token.
  logout() {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }
  
  forgetPassword() {}
  resetPassword() {}
}
