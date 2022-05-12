import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidtors {

    static validOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            if (control.value !== "1234") {
                resolve({ validOldPassword: true })
            }
            else reject(null)
        })
    }

    static passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if (newPassword?.value !== confirmPassword?.value)
            return { passwordsShouldMatch: true };

        return null;
    }
}