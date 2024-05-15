import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medication } from '../models/medication.model';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  private apiUrl = 'https://example.com/api/medications';

  constructor(private http: HttpClient) { }

  getMedications(): Observable<Medication[]> {
    return this.http.get<Medication[]>(this.apiUrl);
  }
  editMedication(medication: any): void {
    const index = this.medications.indexOf(medication);
    if (index !== -1) {
      this.medications[index] = medication;
    }
  }
  deleteMedication(medication: any): void {
    const index = this.medications.indexOf(medication);
    if (index !== -1) {
      this.medications.splice(index, 1);
    }
  }
  
  
}
