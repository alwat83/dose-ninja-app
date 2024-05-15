import { Component, OnInit } from '@angular/core';
import { MedicationService } from '../../services/medication.service';

@Component({
  selector: 'app-medication-edit',
  templateUrl: './medication-edit.component.html',
  styleUrls: ['./medication-edit.component.css']
})
export class MedicationEditComponent implements OnInit {
  medication: any;

  constructor(private medicationService: MedicationService) { }

  ngOnInit(): void {
    this.medication = this.medicationService.getSelectedMedication();
  }

  onSubmit(): void {
    this.medicationService.editMedication(this.medication);
  }
}
