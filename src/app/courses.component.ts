import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
})
export class CoursesComponent {

    onKeyUp($event: any) {
        // if ($event.keyCode === 13)
        console.log("Enter was pressed");
    }
} 