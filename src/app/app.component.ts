import { Component } from '@angular/core';

interface Task {
  title: string;
  assignee: {
    name: string;
  } | null | undefined
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  task: Task = {
    title: 'Review Applications',
    assignee: null
    // {
    //   name: 'John Smith'
    // }
  }
}
