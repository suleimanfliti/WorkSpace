import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Project } from '../interfaces/project.type';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  projects: Project[] = [];
  constructor(private http: HttpClient) {}
  getProjects() {
    return this.projects.slice();
  }
  getProjectsApi() {
    return this.http
      .get<{ success: string; data: Project[]; message: string }>(
        'http://localhost:8000/api/me/projects'
      )
      .pipe(
        map(
          (responeData) => {
            return responeData.data;
          },
          tap((resData: Project[]) => {
            this.projects = resData;
          })
        )
      );
  }
  getProjectTaskNumber() {
    //get number project task.
  }
  getProjectDeveloper() {
    return this.http.get('');
  }
}
