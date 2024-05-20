import { Component, OnInit } from '@angular/core';
import { MedicationService } from '../../services/medication.service';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {
  medications: any[] = [];

  constructor(private medicationService: MedicationService) { }

  ngOnInit(): void {
    this.medications = this.medicationService.getMedications();
  }

  editMedication(medication: any): void {
    this.medicationService.editMedication(medication);
  }
  

  deleteMedication(medication: any): void {
    this.medicationService.deleteMedication(medication);
  }
  searchTerm!: string;

  filterMedications(): void {
    this.medications = this.medicationService.getMedications().filter(medication => {
      return medication.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
  sortOrder: string | undefined;

  sortMedications(): void {
    this.medications = this.medicationService.getMedications().sort((a, b) => {
      if (this.sortOrder === 'name') {
        return a.name.localeCompare(b.name);
      } else if (this.sortOrder === 'dosage') {
        return a.dosage.localeCompare(b.dosage);
      } else if (this.sortOrder === 'frequency') {
        return a.frequency.localeCompare(b.frequency);
      }
    });
  }
  
  

}
