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

}
