import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginInfo } from 'src/app/model/UserLoginInfo';
import { AuthLoginService } from 'src/app/services/login-auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user!: UserLoginInfo;
  loginValidated: boolean = true;

  constructor(
    private router: Router,
    private authLoginService: AuthLoginService
  ) {
    this.user = {
      username: '',
      password: '',
    };
  }

  ngOnInit(): void {}

  public onSubmit(): void {
    this.authLoginService.login(this.user.username, this.user.password);

    if (this.authLoginService.isLogged()) {
      this.router.navigate(['/dashboard']);
    } else {
      this.loginValidated = false;
    }
  }
}
