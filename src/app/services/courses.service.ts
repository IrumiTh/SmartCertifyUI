import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private baseurl = 'https://localhost:7142/api';
  constructor(private http: HttpClient) { }
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseurl + '/Course');
  }
}
