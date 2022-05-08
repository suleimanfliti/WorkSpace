import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Profile } from '../interfaces/profile.type';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  profile: Profile;
  constructor(private http: HttpClient) {}
  getProfile() {
    return { ...this.profile };
  }
  //get profile API.
  getProfileApi() {
    return this.http
      .get<{ success: string; data: Profile; message: string }>(
        'http://localhost:8000/api/me/profile'
      )
      .pipe(
        map(
          (responeData) => {
            return responeData.data;
          },
          tap((resData: Profile) => {
            this.profile = resData;
          })
        )
      );
  }
  //Edit profile API.
  editProfileApi(profile: Profile) {
    return this.http
      .patch<{ success: string; data: Profile; message: string }>(
        'http://localhost:8000/api/me/profile-edit',
        profile
        //request.body ==> information profile}
      )
      .pipe(
        map(
          (responeData) => {
            return responeData.data;
          },
          tap((resData: Profile) => {
            this.profile = resData;
          })
        )
      );
  }

  
}
