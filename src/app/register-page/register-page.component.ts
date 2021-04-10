import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserRegister} from '../../Models/UserRegister';

function passwordMatchValidator(frm: FormGroup): { mismatch: boolean } {
  const password = frm.get('password').value;
  const passwordConfirm = frm.get('passwordConfirm').value;

  if (passwordConfirm === '') {
    return null;
  }

  return password === passwordConfirm ? null : {mismatch: true};
}

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.sass']
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup;
  passwordHide = true;
  passwordConfirmHide = true;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      passwordGroup: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirm: ['', [Validators.required]]
      }, {
        validators: passwordMatchValidator
      }),
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  register(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const model: UserRegister = {
      firstname: this.registerForm.get('firstname').value,
      lastname: this.registerForm.get('lastname').value,
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value,
    };

  }

}
