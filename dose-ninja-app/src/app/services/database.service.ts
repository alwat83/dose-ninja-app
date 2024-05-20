import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private db: AngularFireDatabase) {}

  getDoses() {
    return this.db.list('doses').valueChanges();
  }

  addDose(dose: any) {
    return this.db.list('doses').push(dose);
  }

  updateDose(dose: any) {
    return this.db.list('doses').update(dose.id, dose);
  }

  deleteDose(dose: any) {
    return this.db.list('doses').remove(dose.id);
  }
}
