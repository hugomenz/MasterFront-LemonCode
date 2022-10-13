import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-public',
  templateUrl: './menu-public.component.html',
  styleUrls: ['./menu-public.component.scss'],
})
export class MenuPublicComponent implements OnInit {
  imageSrc = 'assets/images/logo.png';
  imageAlt = 'Lemon';
  constructor() {}

  ngOnInit(): void {}
}
