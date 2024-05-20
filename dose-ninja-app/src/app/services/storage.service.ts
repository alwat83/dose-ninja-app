import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: AngularFireStorage) {}

  uploadImage(image: any) {
    const storageRef = this.storage.ref(`dose_images/${image.name}`);
    return storageRef.put(image);
  }

  getImageUrl(imageName: string) {
    const storageRef = this.storage.ref(`dose_images/${imageName}`);
    return storageRef.getDownloadURL();
  }
}
