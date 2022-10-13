import { Injectable } from '@angular/core';
import { ApiImageEntity, apiImageDataList } from '../../api';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  imageList!: ApiImageEntity[];

  constructor() {}

  getApiImageList(): Promise<ApiImageEntity[]> {
    return Promise.resolve(apiImageDataList);
  }
}
