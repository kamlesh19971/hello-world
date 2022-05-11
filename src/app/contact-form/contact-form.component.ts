import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  log(x: NgModel) {
    console.log(x);
  }

  jsonKeys(obj: Object) {
    console.log(Object.keys(obj));
    ;
  }

}
