import { Component } from '@angular/core';

interface Course {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses: Course[] = [];

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' }
    ];

  }

  trackCourse(index: number, course: Course) {
    return course ? course.id : undefined;
  }
}
