import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserData } from '../../../core/interface';
import { SessionService, SnackbarService } from '../../../core/service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isToggle: boolean = false;
  userRequestData: IUserData = {
    'id': 1,
    'userType': 2,
    'name': "Robin",
    "accountBalance": 200
  };
  adminRequestData: IUserData = {
    'id': 2,
    'userType': 1,
    'name': "Robin",
    "accountBalance": 200
  }
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snackbarService: SnackbarService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
  }


  private initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  public toggleIcon(): void {
    this.isToggle = !this.isToggle;
  }

  public onSubmitLoginForm(): void {
    if (this.loginForm.invalid) {
      return;
    } else {
      if ((this.loginForm.controls.email.value == 'admin@yopmail.com' || this.loginForm.controls.email.value == 'user@yopmail.com') && (this.loginForm.controls.password.value == 'qwerty')) {
        if (this.loginForm.controls.email.value == 'admin@yopmail.com') {
          this.sessionService.setToLocalStorage('userData', JSON.stringify(this.adminRequestData));
          this.router.navigate(['/dashboard']);

        }
        if (this.loginForm.controls.email.value == 'user@yopmail.com') {
          this.sessionService.setToLocalStorage('userData', JSON.stringify(this.userRequestData));
          this.router.navigate(['/dashboard']);
        }
      } else {
        this.snackbarService.openSnackBar('User not found')
      }
    }

  }
}
