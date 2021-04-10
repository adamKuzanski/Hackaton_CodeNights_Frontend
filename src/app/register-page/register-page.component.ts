import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../_services/auth.service';
import {UserModel} from '../_models/UserModel';
import {TokenStorageService} from '../_services/token-storage.service';

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

  authErrors;
  registerForm: FormGroup;
  passwordHide = true;
  passwordConfirmHide = true;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private tokenService: TokenStorageService) {
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

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const model: UserModel = {
      firstName: this.registerForm.get('firstName').value,
      lastName: this.registerForm.get('lastName').value,
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('passwordGroup.password').value,
    };

    this.authService.register(model)
      .subscribe(value => {
        // TODO validate & login
        this.tokenService.saveUser(value);
      }, error => {
        console.log(error);
      });
  }

}
