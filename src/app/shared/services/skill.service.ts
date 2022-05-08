import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Skill } from '../interfaces/Skill.type';

@Injectable({ providedIn: 'root' })
export class SkillService {
  skills: Skill[] = [];
  constructor(private http: HttpClient) {}
  getSkills() {
    // const skillList: Skill[] = [
    //   { name: 'html', level: 50, description: 'gooood' },
    //   { name: 'html', level: 50, description: 'gooood' },
    //   { name: 'html', level: 50, description: 'gooood' },
    //   { name: 'html', level: 50, description: 'gooood' },
    // ];
    return this.skills.slice();
    // return this.skills.slice();
  }
  getSkillsApi() {
    return this.http
      .get<{ success: string; message: string; data: Skill[] }>(
        'http://localhost:8000/api/me/skills'
      )
      .pipe(
        map(
          (resData) => {
            return resData.data;
          },
          tap((resData: Skill[]) => {
            this.skills = resData;
          })
        )
      );
  }
  editSkillApi(skill: Skill, id: number) {
    return this.http
      .patch<{ success: string; message: string; data: Skill[] }>(
        'http://localhost:8000/api/me/skills-add/' + id,
        skill
      )
      .pipe(
        map(
          (resData) => {
            return resData.data;
          },
          tap((resData: Skill[]) => {
            this.skills = resData;
          })
        )
      );
  }
  addSkillApi(skill: Skill) {
    return this.http
      .post<{ success: string; message: string; data: Skill[] }>(
        'http://localhost:8000/api/me/skills-add',
        skill
      )
      .pipe(
        map(
          (resData) => {
            return resData.data;
          },
          tap((resData: Skill[]) => {
            this.skills = resData;
          })
        )
      );
  }
  deleteSkillApi(id: number) {}
}
