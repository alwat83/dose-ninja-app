import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medication } from '../models/medication.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  private apiUrl = 'https://example.com/api/medications';
  private medications: Medication[] = [];

  constructor(private http: HttpClient) {
    this.getMedications().subscribe((medications) => {
      this.medications = medications;
    });
  }

  getMedications(): Observable<Medication[]> {
    return this.http.get<Medication[]>(this.apiUrl);
  }

  editMedication(medication: Medication): void {
    const index = this.medications.indexOf(medication);
    if (index !== -1) {
      this.http.put(`${this.apiUrl}/${medication.id}`, medication).subscribe(() => {
        this.medications[index] = medication;
      });
    }
  }
  
  deleteMedication(medication: Medication): void {
    const index = this.medications.indexOf(medication);
    if (index !== -1) {
      this.http.delete(`${this.apiUrl}/${medication.id}`).subscribe(() => {
        this.medications.splice(index, 1);
      });
    }
  } //