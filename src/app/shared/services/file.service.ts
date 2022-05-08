import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FileService {
  files: File[] = [];

  constructor(private http: HttpClient) {}

  getFiles() {
    return this.files.slice();
  }
  getFilesApi() {
    return this.http
      .get<{ success: string; data: File[]; message: string }>(
        'http://localhost:8000/api/me/files'
      )
      .pipe(
        map(
          (responeData) => {
            return responeData.data;
          },
          tap((resData: File[]) => {
            this.files = resData;
          })
        )
      );
  }
  addFileApi() {
    return this.http
      .get<{ success: string; data: File[]; message: string }>(
        'http://localhost:8000/api/me/files'
      )
      .pipe(
        map(
          (responeData) => {
            return responeData.data;
          },
          tap((resData: File[]) => {
            this.files = resData;
          })
        )
      );
  }
  editFileApi(file: File) {
    return this.http
      .patch<{ success: string; data: File[]; message: string }>(
        'http://localhost:8000/api/me/file-edit',
        file
      )
      .pipe(
        map(
          (responeData) => {
            return responeData.data;
          },
          tap((resData: File[]) => {
            this.files = resData;
          })
        )
      );
  }
  removeFileApi() {
    return this.http
      .delete<{ success: string; data: File[]; message: string }>(
        'http://localhost:8000/api/me/files'
      )
      .pipe(
        map(
          (responeData) => {
            return responeData.data;
          },
          tap((resData: File[]) => {
            this.files = resData;
          })
        )
      );
  }
}
