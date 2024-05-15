import { Component, OnInit } from '@angular/core';
import { Medication } from '../medication.model';
import { MedicationLogService } from '../medication-log.service';

@Component({
  selector: 'app-medication-list',
  templateUrl: './medication-list.component.html',
  styleUrls: ['./medication-list.component.css']
})
export class MedicationListComponent implements OnInit {
  medications: Medication[] = [];

  constructor(private medicationLogService: MedicationLogService) { }

  ngOnInit(): void {
    // Load medications from API or storage
  }

  logMedication(medication: Medication, isTaken: boolean) {
    this.medicationLogService.logMedication(medication, isTaken);
    medication.adherenceStatus = isTaken ? 'taken' : 'missed';
  }
}
