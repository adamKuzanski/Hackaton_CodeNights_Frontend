import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../_services/auth.service';
import {TokenStorageService} from '../_services/token-storage.service';
import {UserModel} from '../_models/UserModel';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  authErrors;
  loginForm: FormGroup;
  passwordHide = true;
  passwordConfirmHide = true;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private tokenService: TokenStorageService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const model: UserModel = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
    };

    this.authService.register(model)
      .subscribe(value => {
        // TODO validate & login
        this.snackBar.open(`Pomyslnie zalogowano jako ${value.email}`, 'ok!', { duration: 2000 });
        this.tokenService.saveUser(value);
      }, error => {
        this.snackBar.open(error, 'Zamknij', { duration: 3000 });
      });
  }

}
