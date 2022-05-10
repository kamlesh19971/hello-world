import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
})
export class CoursesComponent {

    onDivClicked() {
        console.log("Div was Clicked");

    }
    onSave($event: any) {
        $event.stopPropagation();
        console.log("Button  Was Clicked", $event);
    }
} 