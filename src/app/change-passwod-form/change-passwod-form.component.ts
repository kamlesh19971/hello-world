import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidtors } from './password.validators';

@Component({
  selector: 'change-passwod-form',
  templateUrl: './change-passwod-form.component.html',
  styleUrls: ['./change-passwod-form.component.css']
})
export class ChangePasswodFormComponent {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['',
        Validators.required,
        PasswordValidtors.validOldPassword
      ],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidtors.passwordsShouldMatch
    });
  }

  submit() {

  }


  get oldPassword() {
    return this.form.get('oldPassword')
  }

  get newPassword() {
    return this.form.get('newPassword')
  }

  get confirmPassword() {
    return this.form.get('confirmPassword')
  }

  get match() {
    if (this.form.get('newPassword')?.value !== "") {
      if (this.form.get('newPassword')?.value !== this.form.get('confirmPassword')?.value) {
        return true;
      }
    }
    return false;
  }

} 
