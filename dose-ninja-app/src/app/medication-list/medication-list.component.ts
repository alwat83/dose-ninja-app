import { Component, OnInit } from '@angular/core';
import { MedicationService } from '../services/medication.service';
import { MedicationTrackingService } from '../services/medication-tracking.service';

@Component({
  selector: 'app-medication-list',
  templateUrl: './medication-list.component.html',
  styleUrls: ['./medication-list.component.css']
})
export class MedicationListComponent implements OnInit {
  medications: Medication[];

  constructor(private medicationService: MedicationService, private medicationTrackingService: MedicationTrackingService) { }

  ngOnInit(): void {
    this.medicationService.getMedications().subscribe((medications: Medication[]) => {
      this.medications = medications;
    });
  }

  trackMedication(medication: Medication) {
    const medicationTracking = new MedicationTracking();
    medicationTracking.medicationId = medication.id;
    medicationTracking.taken = true;
    medicationTracking.dateTime = new Date();

    this.medicationTrackingService.createMedicationTracking(medicationTracking).subscribe(() => {
      console.log('Medication tracked successfully!');
    });
  }

}
