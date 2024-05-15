import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicationTrackingService {

  private apiUrl = 'https://example.com/api/medication-trackings';

  constructor(private http: HttpClient) { }

  createMedicationTracking(medicationTracking: MedicationTracking) {
    return this.http.post(this.apiUrl, medicationTracking);
  }

  getMedicationTrackings() {
    return this.http.get<MedicationTracking[]>(this.apiUrl);
  }

}
