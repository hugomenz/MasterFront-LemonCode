import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery/gallery.service';
import { ApiImageEntity } from '../../../api';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  imageList!: ApiImageEntity[];
  image!: ApiImageEntity;
  imageScale!: number;

  constructor(public galleryService: GalleryService) {
    this.galleryService.getApiImageList().then((list) => {
      this.imageList = list;
      this.image = list[0];
      this.imageScale = 1;
    });
  }

  ngOnInit(): void {}
}
