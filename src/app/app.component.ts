import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
  ];

  onAdd() {
    const id = this.courses.length + 1;
    this.courses.push({ id: id, name: `course${id}` });
  }

  onRemove(index: number) {
    this.courses.splice(index, 1);
  }

  onChange(course: any) {
    course.name = "Updated";
  }
}
