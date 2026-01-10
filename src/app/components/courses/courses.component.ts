import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { CoursesService } from '../../services/courses.service';
import { CommonModule } from '@angular/common';
import { TechFilterComponent } from '../tech-filter/tech-filter.component';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, TechFilterComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CoursesService){
    
  }
  //for calling the loadCourses method when component is initialized
  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(){
      this.courseService.getCourses().subscribe(courses => {
        this.courses = courses;
      });
  }
}
