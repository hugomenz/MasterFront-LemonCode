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
  firstSelectedImageListItem!: number;
  lastSelectedImageListItem!: number;
  isPlaySelected!: boolean;
  intervalActive!: number;

  constructor(public galleryService: GalleryService) {
    this.galleryService.getApiImageList().then((list) => {
      this.imageList = list;
      this.image = list[1];
      this.imageScale = 1;
      this.firstSelectedImageListItem = 0;
      this.lastSelectedImageListItem = 3;
      this.isPlaySelected = false;
    });
  }

  ngOnInit(): void {}

  setLastSelectedImg(type: string) {
    if (
      type === 'next' &&
      this.lastSelectedImageListItem < this.imageList.length
    ) {
      this.firstSelectedImageListItem += 3;
      this.lastSelectedImageListItem += 3;
    } else if (type === 'previous' && this.firstSelectedImageListItem > 0) {
      this.firstSelectedImageListItem -= 3;
      this.lastSelectedImageListItem -= 3;
    }
  }
  setSelectedImg(img: ApiImageEntity): void {
    this.imageScale = 1;
    this.image = img;
  }

  nextImg() {
    if (this.isLastIndexImgList()) {
      this.setSelectedImg(this.imageList[0]);
    } else {
      const index =
        this.imageList.findIndex((element) => element.id === this.image.id) + 1;
      this.setSelectedImg(this.imageList[index]);
    }
  }

  previousImg() {
    const index =
      this.imageList.findIndex((element) => element.id === this.image.id) - 1;
    this.setSelectedImg(this.imageList[index]);
  }

  playGallery() {
    if (!this.isPlaySelected) {
      this.isPlaySelected = true;

      this.intervalActive = window.setInterval(() => {
        this.nextImg();
      }, 2000);
    } else {
      this.isPlaySelected = false;
      clearInterval(this.intervalActive);
    }
  }

  zoomIn() {
    this.imageScale = this.imageScale + 1;
  }
  zoomOut() {
    this.imageScale = this.imageScale - 1;
  }

  isLastIndexImgList(): boolean {
    return this.image.id === this.imageList[this.imageList.length - 1].id;
  }
}
