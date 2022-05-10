import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
})
export class CoursesComponent {
    email: string = 'kamlesh@gmail.com';

    onKeyUp() {
        console.log(this.email);
    }
} 