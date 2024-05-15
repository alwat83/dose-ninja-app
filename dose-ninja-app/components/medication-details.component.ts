import { Component, OnInit } from '@angular/core';
import { Medication } from '../medication.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medication-details',
  templateUrl: './medication-details.component.html',
  styleUrls: ['./medication-details.component.css']
})
export class MedicationDetailsComponent implements OnInit {
  medication: Medication;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // Load medication details from API or storage
  }
}
