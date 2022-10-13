import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from 'src/app/services/login-auth/login.service';

@Component({
  selector: 'app-menu-private',
  templateUrl: './menu-private.component.html',
  styleUrls: ['./menu-private.component.scss'],
})
export class MenuPrivateComponent implements OnInit {
  imageSrc = 'assets/images/logo.png';
  imageAlt = 'Lemon';

  constructor(private authLoginService: AuthLoginService) {}

  ngOnInit(): void {}

  loggedUser() {
    return this.authLoginService.getUsername();
  }

  logout(): void {
    return this.authLoginService.logout();
  }
}
