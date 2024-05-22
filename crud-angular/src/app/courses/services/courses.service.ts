import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  private readonly API = '/assets/courses.json';

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      delay(5000)
    );
  }
}
