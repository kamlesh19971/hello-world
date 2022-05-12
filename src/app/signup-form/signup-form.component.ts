import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserNamValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UserNamValidators.cannotContainSpace
    ],
      UserNamValidators.shouldBeUnique),
    password: new FormControl('', Validators.required)
  });

  login() {

    // let isValid = authService.login(this.form.value);
    // if (!isValid) {
    this.form.setErrors({
      invalidLogin: true
    });
    // }
  }

  get username() {
    return this.form.get('username');
  }



}
