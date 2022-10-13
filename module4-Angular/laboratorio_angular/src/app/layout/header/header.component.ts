import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from 'src/app/services/login-auth/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public authLoginService: AuthLoginService) {}

  ngOnInit(): void {}

  loginSuccess() {
    return this.authLoginService.isLogged();
  }
}
