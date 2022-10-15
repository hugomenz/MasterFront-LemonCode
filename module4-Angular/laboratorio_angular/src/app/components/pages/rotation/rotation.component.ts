import { Component, OnInit } from '@angular/core';
import { ApiImageEntity } from 'src/app/api';
import { GalleryService } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-rotation',
  templateUrl: './rotation.component.html',
  styleUrls: ['./rotation.component.scss'],
})
export class RotationComponent implements OnInit {
  imageList!: ApiImageEntity[];
  image!: ApiImageEntity;

  constructor(public galleryService: GalleryService) {
    this.galleryService.getApiImageList().then((list) => {
      this.imageList = list;
      this.image = list[1];
    });
  }

  ngOnInit(): void {}
}
