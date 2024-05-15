import { Component, OnInit } from '@angular/core';
import { MedicationService } from '../../services/medication.service';

@Component({
  selector: 'app-medication-form',
  templateUrl: './medication-form.component.html',
  styleUrls: ['./medication-form.component.css']
})
export class MedicationFormComponent implements OnInit {
  medication = {
    name: '',
    dosage: '',
    frequency: '',
    notes: ''
  };

  constructor(private medicationService: MedicationService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.medicationService.addMedication(this.medication);
  }
}
