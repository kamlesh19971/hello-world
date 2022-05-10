import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
})
export class CoursesComponent {

    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }
} 