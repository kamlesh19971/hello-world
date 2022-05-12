import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidtors {

    static validOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value !== "1234") {
                    resolve({ validOldPassword: true })
                }
                else reject(null)
            }, 2000);
        })
    }

}