import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
})
export class CoursesComponent {

    onKeyUp(email: string) {
        console.log(email);
    }
} 