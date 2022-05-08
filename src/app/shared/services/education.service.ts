import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Education } from '../interfaces/education.type';

@Injectable({ providedIn: 'root' })
export class EducationService {
  educations: Education[] = [];
  constructor(private http: HttpClient) {

  }

  getEducationsListApi() {
    return this.http
      .get<{
        success: string;
        message: string;
        data: Education[];
      }>('http://localhost:8000/api/me/educations')
      .pipe(
        map(
          (resData) => {
            return resData.data;
          },
          tap((resData: Education[]) => {
            this.educations = resData;
          })
        )
      );
  }
  editEducation(education: Education) {
    const id = education.id - 1;
    const newEducation = {
      school: education.school,
      degree: education.degree,
      start_date: education.start_date,
      end_date: education.end_date,
      activities: education.activities,
    };
    this.http
      .patch(
        `http://localhost:8000/api/me/educations/${education.id}`,
        newEducation
      )
      .subscribe((resData) => {
        console.log(resData);
        this.educations[id] = education;
      });
  }
  addEduction(education: Education) {
    this.http
      .post(`http://localhost:8000/api/me/educations/add-education`, education)
      .subscribe((resData) => {
        console.log(resData);
      });
  }
  getEducations() {
    return this.educations.slice();
  }
}
