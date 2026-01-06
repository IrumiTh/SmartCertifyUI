import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private baseurl = '';
  constructor(private http: HttpClient) { }
  getCourses() {
    return this.http.get<any>(this.baseurl + '/courses');
  }
}
